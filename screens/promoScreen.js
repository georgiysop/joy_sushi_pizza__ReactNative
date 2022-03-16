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

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Promo = () => {
  return (
    <ScrollView>
      <View style={styles.center}>
        <View>
          <Image
            source={require('../assets/promo/1.png')}
            style={styles.imageStyle}
          />
          <Text style={{ fontFamily: 'Roboto-light' }}>
            С понедельника по пятницу на роллы с 13:00 - 16:00 СКИДКА 15% (сеты
            в акцию не входят)
          </Text>
        </View>
        <View>
          <Image
            source={require('../assets/promo/2.png')}
            style={styles.imageStyle}
          />
          <Text>
            Скидка Именинника 15% на любой ваш заказ. Действует 3 дня до и 3 дня
            после. *не суммируется с другими скидками, акциями, подарками и
            другими спец. предложениями.
          </Text>
        </View>
        <View>
          <Image
            source={require('../assets/promo/3.png')}
            style={styles.imageStyle}
          />
          <Text>
            При заказе 2-ух пицц , пицца Маргарита 33 см в подарок (
            распространяется на все пиццы кроме пицц 25см и акционного товара )
          </Text>
        </View>
        <View>
          <Image
            source={require('../assets/promo/4.png')}
            style={styles.imageStyle}
          />
          <Text>Скидка 5% при самовывозе</Text>
        </View>
      </View>
    </ScrollView>
  )
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
    height: HEIGHT * 0.2,
  },
})

export default Promo
