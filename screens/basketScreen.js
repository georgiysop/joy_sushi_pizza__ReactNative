import React from 'react'
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

const Home = () => {
  return (
    <View style={styles.center}>
      <Image source={require('../assets/basket/clearBasket.png')} />
      <Text>В корзине пусто</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
})

export default Home
