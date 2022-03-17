import React from 'react'
import Slider from '../components/Slider'
import SearchComponent from '../components/Search'
import Ionic from 'react-native-vector-icons/Ionicons'
import HomeSVG from '../assets/navigatorSVG/homeSVG'

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
        <SearchComponent />
        <Text>fdsfsdf</Text>
        {/* <HomeSVG/> */}
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
