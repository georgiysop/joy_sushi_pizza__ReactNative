import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts, Roboto_300Light } from '@expo-google-fonts/roboto'

import { Philosopher_400Regular } from '@expo-google-fonts/philosopher'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Promo = () => {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Philosopher_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ScrollView>
        <View style={styles.center}>
          <View style={styles.viewStyte}>
            <Image
              source={require('../assets/promo/1.png')}
              style={styles.imageStyle2}
            />
            <Text style={styles.textStyle}>
              С понедельника по пятницу на роллы с 13:00 - 16:00 СКИДКА 15%
              <Text style={styles.textBold}> (сеты в акцию не входят)</Text>
            </Text>
          </View>
          <View style={styles.viewStyte}>
            <Image
              source={require('../assets/promo/2.png')}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>
              Скидка Именинника 15% на любой ваш заказ. Действует 3 дня до и 3
              дня после{' '}
              <Text style={styles.textBold}>
                ( не суммируется с другими скидками, акциями, подарками и
                другими спец. предложениями )
              </Text>
            </Text>
          </View>
          <View style={styles.viewStyte}>
            <Image
              source={require('../assets/promo/3.png')}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>
              При заказе 2-ух пицц , пицца Маргарита 33 см в подарок{' '}
              <Text style={styles.textBold}>
                ( распространяется на все пиццы кроме пицц 25см и акционного
                товара )
              </Text>
            </Text>
          </View>
          <View style={styles.viewStyte}>
            <Image
              source={require('../assets/promo/4.png')}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>Скидка 5% при самовывозе</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageStyle: {
    resizeMode: 'stretch',
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  imageStyle2: {
    resizeMode: 'stretch',
    width: WIDTH,
    height: HEIGHT * 0.2,
  },
  viewStyte: {},
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Philosopher_400Regular',
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 16,
  },
  textBold: {
    fontWeight: 'bold',
  },
})

export default Promo
