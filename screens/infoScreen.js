import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons } from '@expo/vector-icons'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Linking,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const data = [
  {
    name: 'о нас',
    text: `JOY-это еда , которая приносит радость! Насладиться прекрасно приготовленными наисвежайшими роллами, аппетитной пиццей и другими блюдами.\n\nПОЧЕМУ ИМЕННО МЫ ?\n\n- доставка еды существенно экономит ваше время\n- в наших роллах всегда свежая рыбка\n- курьер доставит вам пиццу еще с дымком\n- все готовятся непосредственно после получения заказа`,
  },
  {
    name: 'стоимость доставки',
    text: `Город 100р\nБесплатная доставка от 500рублей\n\nСтарый Балиндер, СМУ,\nНовый поселок 150 рублей\nБесплатная доставка от 700рублей\n\nНовый Балиндер, Слободка 200рублей\nБесплатная доставка от 900рублей\n\nМиронская 250рублей\nБесплатная доставка от 1200рублей\n\nСорокино 300рублей\nБесплатная доставка от 1500рублей\n\nКомарское, Копылово, Гришино, 400рублей\nГришино, Омутное, Верх камышенка,\nГоношиха\nБесплатная доставка от 1700рублей\n\nКокорская 500рублей\nБесплатная доставка от 2500рублей\n\nЗалесово 800рублей\nБесплатная доставка от 4000рублей`,
  },
  {
    name: 'контакты',
    text: `г.Заринск ул.Металлургов 3/2\n\n8-963-535-4144`,
  },
]
const Info = () => {
  let [fontsLoaded] = useFonts({
    'Philosopher-Regular': require('../assets/fonts/Philosopher-Regular.ttf'),
    'Philosopher-Bold': require('../assets/fonts/Philosopher-Bold.ttf'),
  })
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ScrollView>
      <View style={styles.center}>
        {data.map((item, i) => (
          <View key={i}>
            <TouchableOpacity style={styles.viewLine} onPress={() => toggle(i)}>
              <Text style={styles.textLine}>{item.name}</Text>

              {selected === i ? (
                <Ionicons name="chevron-up" size={24} color="black" />
              ) : (
                <Ionicons name="chevron-down-sharp" size={24} color="black" />
              )}
            </TouchableOpacity>
            {selected === i ? (
              <View style={{ width: WIDTH * 0.9 }}>
                <Text style={styles.textLine}>{item.text}</Text>
              </View>
            ) : (
              <View></View>
            )}
          </View>
        ))}

        <View style={styles.viewButtonImage}>
          <SimpleIcon
            name="social-vkontakte"
            size={52}
            style={styles.ButtonImage}
            color="rgba(207, 99, 45, 1)"
            onPress={() => Linking.openURL('https://vk.com/joy_foods')}
          />
          <EvilIcons
            name="sc-telegram"
            size={60}
            style={styles.ButtonImage}
            color="rgba(207, 99, 45, 1)"
            onPress={() => Linking.openURL('https://t.me/joyfoods')}
          />
          <Feather
            name="instagram"
            size={49}
            style={styles.ButtonImage}
            color="rgba(207, 99, 45, 1)"
            onPress={() =>
              Linking.openURL('https://www.instagram.com/joy_sushi_pizza/')
            }
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Info

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },

  viewLine: {
    // borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#DDD1D1',
    marginTop: HEIGHT * 0.04,
    width: WIDTH * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textLine: {
    fontSize: 18,
    fontFamily: 'Philosopher-Regular',
  },
  viewButtonImage: { flexDirection: 'row' },
  ButtonImage: {
    padding: 5,
    marginTop: 20,
  },
  textList: {
    margin: 20,
    textAlign: 'left',
  },
})
