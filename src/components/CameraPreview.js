/**
 * Camera.js
 * Camera Component
 */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Toast } from 'native-base';
import * as Icon from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Storage } from 'aws-amplify';

import Colors from '../constants/Colors';

export default class CameraComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null, // カメラ機能の許可
      type: Camera.Constants.Type.back, // 背面カメラを利用
    };

    this.takePicture = this.takePicture.bind(this);
  }

  // 初期起動時、カメラの使用の権限を取得する。
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  }

  // 撮影
  async takePicture() {
    const pictureData = await this.camera.takePictureAsync({width:30,height:30});
    alert('successs')
    const awsReturn = uploadImageToS3(pictureData.uri)
    console.log('return: ',awsReturn)
  }

  render() {
    const {
      hasCameraPermission,
    } = this.state;

    if (hasCameraPermission === null || hasCameraPermission === false) {
      return (
        <View>
          <Text>
            カメラの使用が許可されていません。
          </Text>
        </View>
      );
    }
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Camera
          style={{
            flex: 1,
          }}
          type={this.state.type}
          ref={(ref) => {
            this.camera = ref;
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                this.takePicture();
              }}
            >
              <Icon.MaterialIcons
                name="camera"
                size={70}
                style={{ marginBottom: 20 }}
                color={Colors.tabIconDefault}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}

// const storeFileInS3 = async (
//   fileUri,
//   awsKey = null,
//   access = "public"
// ) => {
//   const blob = await new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = function() {
//       resolve(xhr.response);
//     };
//     xhr.onerror = function() {
//      reject(new TypeError("Network request failed"));
//     };
//     xhr.responseType = "blob";
//     xhr.open("GET", fileUri, true);
//     xhr.send(null);
//   });
//   const { name, type } = blob._data;
//   const options = {
//     level: access,
//     contentType: type
//   };
//   const key = awsKey || name;
//   try {
//     const result = await Storage.put(key, blob, options);
//     return {
//       access,
//       key: result.key
//     };
//   } catch (err) {
//     throw err;
//   }
// };
uploadImageToS3 = async uri => {
  const response = await fetch(uri)
  const blob = await response.blob() // format the data for images
  const folder = 'images'
  // generate a unique random name for every single image 'fixed length'
  const fileName = Math.random().toString(18).slice(3).substr(0, 10) + '.jpeg'
  await Storage.put(folder + '/' + fileName, blob, {
    contentType: 'image/jpeg',
    level: 'public'
  })
    .then(() => {
      // every time a new image is added, we call all the items again
      this.fetchImages('images/', { level: "public" })
    })
    .catch(err => console.log(err))
}
