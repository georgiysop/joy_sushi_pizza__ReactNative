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
      <Image source={require('../assets/promo/1.png')} />
      <Text>
        С понедельника по пятницу на роллы с 11:00 - 16:00 скидка 15 %
      </Text>
      <Image source={require('../assets/promo/2.png')} />
      <Image source={require('../assets/promo/3.png')} />
      <Text>
        {' '}
        Акция 1+1=3 распространяется на все пиццы кроме пицц 25см и акционного
        товара
      </Text>
      <Image source={require('../assets/promo/4.png')} />
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
