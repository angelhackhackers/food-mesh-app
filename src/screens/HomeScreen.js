import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import Camera from '../components/CameraPreview'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Camera/>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5059ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    color: '#fff'
  }
})
