import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer,Gyroscope } from 'expo';
import { ProgressBar, Colors } from 'react-native-paper';

export default class App extends React.Component {

  constructor() {
    super();
    // state初期化
    this.state = {
      accelerometerData: {},
      gyroscopeData: {},
    };
  }

  componentDidMount() {
    this._toggle();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  }
  _slow = () => {
    Gyroscope.setUpdateInterval(1000);
  }

  _fast = () => {
    Gyroscope.setUpdateInterval(16);
  }



  // 加速度センシングを開始する
  _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      // 加速度を取得
      this.setState({ accelerometerData });
    });
    this._subscription = Gyroscope.addListener((result) => {
      this.setState({gyroscopeData: result});
    });
    // 1秒ごとに加速度を測定
    Accelerometer.setUpdateInterval(100);
  }

  // 加速度センシングを終了する
  _unsubscribe = () => {
    if (this._subscription) {
      this._subscription.remove();
    }
    this._subscription = null;
  }

  render() {
    let { x, y, z } = this.state.accelerometerData;
    let g = this.state.gyroscopeData;
    return (
      <View style={styles.container}>
        <View style = {{flex:0.5,width:'80%'}}>
        <ProgressBar progress={g.x} color={Colors.red800} />
        <ProgressBar progress={g.y} color={Colors.red800} />
        <ProgressBar progress={g.z} color={Colors.red800} />
        <ProgressBar progress={abs(x)} color={Colors.blue800} />
        <ProgressBar progress={abs(y)} color={Colors.blue800} />
        <ProgressBar progress={abs(z)} color={Colors.blue800} />
        <ProgressBar progress={abs(z/3+y/3+z/3)} color={Colors.green800} />
        </View>
        <View style = {{flex:0.5,width:'80%'}}>
        <Text>　ジャイロ</Text>
        <Text>x: {round(g.x)} y: {round(g.y)} z: {round(g.z)}</Text>
        <Text>　　加速 </Text>
        <Text>x : {round(x)}</Text>
        <Text>y : {round(y)}</Text>
        <Text>z : {round(z)}</Text>
        </View>
      </View>
    );
  }
}
function abs(n) {

  return Math.abs(n )
}
function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})