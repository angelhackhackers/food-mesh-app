
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'
import { ViewPager } from 'rn-viewpager'

import MapView from 'react-native-maps';
import StepIndicator from 'react-native-step-indicator'

const PAGES = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5']

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#a4d4a5',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#a4d4a5',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f'
}

const secondIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  separatorStrokeFinishedWidth: 4,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

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
        {/* <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={firstIndicatorStyles}
            currentPosition={this.state.currentPage}
            labels={['Account', 'Profile', 'Band', 'Membership', 'Dashboard']}
            renderLabel={this.renderLabel}
            onPress={this.onStepPress}
          />
        </View>
        <View style={styles.stepIndicator}>
          <StepIndicator
            renderStepIndicator={this.renderStepIndicator}
            customStyles={secondIndicatorStyles}
            currentPosition={this.state.currentPage}
            onPress={this.onStepPress}
            labels={[
              'Cart',
              'Delivery Address',
              'Order Summary',
              'Payment Method',
              'Track'
            ]}
          />
        </View> */}
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
          />:null
        }
        { data=='Page 2'?<MapView
          style={{ alignSelf: 'stretch', height: 400 }}
          initialRegion={{
            latitude: 35.674372,  longitude: 139.768568,
            latitudeDelta: 0.0922, longitudeDelta: 0.0421,
          }}
          />:null
        }
        { data=='Page 3'?<MapView
          style={{ alignSelf: 'stretch', height: 400 }}
          initialRegion={{
            latitude: 35.674372,  longitude: 139.768568,
            latitudeDelta: 0.0922, longitudeDelta: 0.0421,
          }}
          />:null
        }
        { data=='Page 4'?<MapView
          style={{ alignSelf: 'stretch', height: 400 }}
          initialRegion={{
            latitude: 35.674372,  longitude: 139.768568,
            latitudeDelta: 0.0922, longitudeDelta: 0.0421,
          }}
          />:null
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