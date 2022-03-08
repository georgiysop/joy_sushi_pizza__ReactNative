import React, { useState, Component } from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import Slider from './components/Slider'

import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  View,
  Text,
  BackHandler,
  Button,
  Alert,
  Image,
  Dimensions,
  AppRegistry,
} from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const imgMassivSlider = [
  require('./assets/popular/spaisi.jpg'),
  require('./assets/popular/furo.jpeg'),
]

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        <Slider imgMassivSlider={imgMassivSlider} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
