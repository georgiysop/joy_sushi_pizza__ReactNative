import React from 'react'
import Slider from '../components/Slider'
import Ionic from 'react-native-vector-icons/Ionicons'
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

const imgMassivSlider = [
  require('../assets/popular/spaisi.jpg'),
  require('../assets/popular/furo.jpeg'),
]

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Slider imgMassivSlider={imgMassivSlider} />
        <Slider imgMassivSlider={imgMassivSlider} />
        <Slider imgMassivSlider={imgMassivSlider} />
        <Slider imgMassivSlider={imgMassivSlider} />
        <Slider imgMassivSlider={imgMassivSlider} />
        <Ionic name='ios-home'/>
        <Text>fdsfsdf</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Home
