
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'
import { ViewPager } from 'rn-viewpager'

import MapView , {Marker} from 'react-native-maps';
import StepIndicator from 'react-native-step-indicator'
import SetName from '../components/SetName'
import AudioRecord from '../components/AudioRecord'
import PhotoGallery from '../components/photoGallery'

const PAGES = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5']



const thirdIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#7eaec4',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#7eaec4',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#7eaec4',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#7eaec4',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#7eaec4'
}

const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
  const iconConfig = {
    name: 'feed',
    color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
    size: 15
  }
  switch (position) {
    case 0: {
      iconConfig.name = 'shopping-cart'
      break
    }
    case 1: {
      iconConfig.name = 'location-on'
      break
    }
    case 2: {
      iconConfig.name = 'assessment'
      break
    }
    case 3: {
      iconConfig.name = 'payment'
      break
    }
    case 4: {
      iconConfig.name = 'track-changes'
      break
    }
    default: {
      break
    }
  }
  return iconConfig
}

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      currentPage: 0
    }
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (nextState.currentPage != this.state.currentPage) {
      if (this.viewPager) {
        this.viewPager.setPage(nextState.currentPage)
      }
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            stepCount={4}
            customStyles={thirdIndicatorStyles}
            currentPosition={this.state.currentPage}
            onPress={this.onStepPress}
            labels={['Location', 'Name', 'Audio', '360 Photo']}
          />
        </View>
        <ViewPager
          style={{ flexGrow: 1 }}
          ref={viewPager => {
            this.viewPager = viewPager
          }}
          onPageSelected={page => {
            this.setState({ currentPage: page.position })
          }}
        >
          {PAGES.map(page => this.renderViewPagerPage(page))}
        </ViewPager>
      </View>
    )
  }

  onStepPress = position => {
    this.setState({ currentPage: position })
    this.viewPager.setPage(position)
  }

  renderViewPagerPage = data => {
    console.log(data)
    return (
      <View style={styles.page}>
        { data=='Page 1'?<MapView
          style={{ alignSelf: 'stretch', height: 400 }}
          initialRegion={{
            latitude: 35.674372,  longitude: 139.768568,
            latitudeDelta: 0.0922, longitudeDelta: 0.0421,
          }}
          ><Marker draggable coordinate={{latitude: 35.674372,  longitude: 139.768568,}}/>
        </MapView>:null
        }
        { data=='Page 2'?
          <SetName/>
          :null
        }
        { data=='Page 3'?
       <AudioRecord/>
          :null
        }
        { data=='Page 4'?
        <PhotoGallery style={{height:'100%'}}/>
          :null
        }
      </View>
    )
  }

  renderStepIndicator = params => (
    <View/>
  )

  renderLabel = ({ position, stepStatus, label, currentPosition }) => {
    return (
      <Text
        style={
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }
      >
        {label}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  stepIndicator: {
    marginVertical: 50
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999'
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f'
  }
})