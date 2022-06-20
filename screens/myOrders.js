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
const Myorder = () => {
  let [fontsLoaded] = useFonts({
    'Philosopher-Regular': require('../assets/fonts/Philosopher-Regular.ttf'),
    'Philosopher-Bold': require('../assets/fonts/Philosopher-Bold.ttf'),
  })
  const [selected, setSelected] = useState(null)

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ScrollView>
      <View style={styles.center}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.text}>Маргарита 25 см</Text>
          </View>
          <View>
            <Text style={styles.text}> X2</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.text}>СЕТ "Филадельфия MIX" (24 шт)</Text>
          </View>
          <View>
            <Text style={styles.text}> X1</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.text}>Соус Сырный</Text>
          </View>
          <View>
            <Text style={styles.text}> X3</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={[styles.text, styles.text2]}>ИТОГ:</Text>
          </View>
          <View>
            <Text style={[styles.text, styles.text2]}> 2214 ₽</Text>
          </View>
        </View>
        <View style={styles.viewLine}></View>
      </View>
    </ScrollView>
  )
}

export default Myorder

const styles = StyleSheet.create({
  center: {
    flex: 1,
    margin: 20,
  },
  viewLine: {
    // borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#DDD1D1',
    marginTop: HEIGHT * 0.04,
    width: WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Philosopher-Regular',
    fontSize: 16,
  },
  text2: {
    textDecorationLine: 'underline',
  },
})
