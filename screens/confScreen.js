import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import useTimeout from '../components/useTimeout'
// import { auth, db } from '../firebase'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const pol_width = WIDTH / 2 - 20

function Conf() {
  let [fontsLoaded] = useFonts({
    'Philosopher-Regular': require('../assets/fonts/Philosopher-Regular.ttf'),
    'Philosopher-Bold': require('../assets/fonts/Philosopher-Bold.ttf'),
  })

  const navigation = useNavigation()

  useTimeout(() => {
    navigation.navigate('Home')
  }, 5000)

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/confirmation/ruka.png')}
          style={styles.imStyle}
        />
      </View>
      <View style={{ width: '70%' }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: 'center',

            fontFamily: 'Philosopher-Bold',
            color: 'green',
            paddingBottom: 10,
          }}
        >
          Заказ принят
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            fontFamily: 'Philosopher-Bold',
          }}
        >
          В течении минуты
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            fontFamily: 'Philosopher-Bold',
          }}
        >
          менеджер вам позвонит
        </Text>
      </View>
      <View style={{ marginTop: 10, width: '70%', marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            fontFamily: 'Philosopher-Regular',
          }}
        >
          Переадресация через ...
        </Text>
      </View>

      <CountdownCircleTimer
        size={60}
        strokeWidth={6}
        isPlaying
        duration={5}
        colors={['#004777', '#F7B801', '#A30000']}
        colorsTime={[5, 2, 0]}
      >
        {({ remainingTime }) => <Text>{remainingTime}</Text>}
      </CountdownCircleTimer>
    </View>
  )
}

export default Conf

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imStyle: {
    resizeMode: 'contain',
    width: WIDTH,
    height: HEIGHT * 0.14,
  },
  button: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'red',
    width: '80%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
})
