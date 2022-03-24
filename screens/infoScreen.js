import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import { List } from 'react-native-paper'
import {
  useFonts,
  Philosopher_400Regular,
} from '@expo-google-fonts/philosopher'
import AppLoading from 'expo-app-loading'

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Linking,
  ScrollView,
} from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
// const customFonts = {
//     'Philosopher-Regular': require('../assets/fonts/Philosopher-Regular.ttf'),
//       'Philosopher-Bold': require('../assets/fonts/Philosopher-Bold.ttf'),}

export default class Info extends React.Component {
  constructor() {
    super()
    this.state = {
      ShowHideTextComponentView_1: false,
      ShowHideTextComponentView_2: false,
      ShowHideTextComponentView_3: false,
      // fontsLoaded: false,
    }
  }

  // async _loadFontsAsync() {
  //   await Font.loadAsync({
  //     'Philosopher-Regular': require('../assets/fonts/Philosopher-Regular.ttf'),
  //     'Philosopher-Bold': require('../assets/fonts/Philosopher-Bold.ttf'),
  //   })
  //   this.setState({ fontsLoaded: true })
  // }

  // componentDidMount() {
  //   this._loadFontsAsync()
  // }

  ShowHideTextComponentView_1 = () => {
    if (this.state.ShowHideTextComponentView_1 == true) {
      this.setState({ ShowHideTextComponentView_1: false })
    } else {
      this.setState({ ShowHideTextComponentView_1: true })
    }
  }

  ShowHideTextComponentView_2 = () => {
    if (this.state.ShowHideTextComponentView_2 == true) {
      this.setState({ ShowHideTextComponentView_2: false })
    } else {
      this.setState({ ShowHideTextComponentView_2: true })
    }
  }

  ShowHideTextComponentView_3 = () => {
    if (this.state.ShowHideTextComponentView_3 == true) {
      this.setState({ ShowHideTextComponentView_3: false })
    } else {
      this.setState({ ShowHideTextComponentView_3: true })
    }
  }

  render() {
    // if (!this.state.fontsLoaded) {
    //   return <AppLoading />
    // }

    return (
      <ScrollView>
        <View style={styles.center}>
          <View style={styles.viewLine}>
            <Text style={styles.textLine}>о нас</Text>
            <Icon
              name="chevron-down-outline"
              size={24}
              onPress={this.ShowHideTextComponentView_1}
            ></Icon>
          </View>
          {this.state.ShowHideTextComponentView_1 ? (
            <View style={styles.textList}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  fontFamily: 'Philosopher_400Regular',
                }}
              >
                <Text>{`JOY-это еда , которая приносит радость! Насладиться прекрасно приготовленными наисвежайшими роллами, аппетитной пиццей и другими блюдами.\n\n`}</Text>
                <Text>{`ПОЧЕМУ ИМЕННО МЫ ?\n\n- доставка еды существенно экономит ваше время\n- в наших роллах всегда свежая рыбка\n- курьер доставит вам пиццу еще с дымком\n- все готовятся непосредственно после получения заказа`}</Text>
              </Text>
            </View>
          ) : null}

          <View style={styles.viewLine}>
            <Text style={styles.textLine}>стоимость доставки</Text>
            <Icon
              name="chevron-down-outline"
              size={24}
              onPress={this.ShowHideTextComponentView_2}
            ></Icon>
          </View>
          {this.state.ShowHideTextComponentView_2 ? (
            <View style={styles.textList}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  fontFamily: 'Philosopher_400Regular',
                }}
              >
                <Text>{`Город 100р
Бесплатная доставка от 500рублей

Старый Балиндер, СМУ, Новый поселок 150 рублей
Бесплатная доставка от 700рублей

Новый Балиндер, Слободка 200рублей
Бесплатная доставка от 900рублей

Миронская 250рублей
Бесплатная доставка от 1200рублей

Сорокино 300рублей
Бесплатная доставка от 1500рублей

Комарское, Копылово, Гришино, 400рублей
Гришино, Омутное, Верх камышенка,
Гоношиха
Бесплатная доставка от 1700рублей

Кокорская 500рублей
Бесплатная доставка от 2500рублей

Залесово 800рублей
Бесплатная доставка от 4000рублей`}</Text>
              </Text>
            </View>
          ) : null}

          <View style={styles.viewLine}>
            <Text style={styles.textLine}>контакты</Text>
            <Icon
              name="chevron-down-outline"
              size={24}
              onPress={this.ShowHideTextComponentView_3}
            />
          </View>
          {this.state.ShowHideTextComponentView_3 ? (
            <View style={styles.textList}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  fontFamily: 'Philosopher_400Regular',
                }}
              ><Text>{`г.Заринск ул.Металлургов 3/2\n\n8-963-535-4144`}</Text>
              </Text>
            </View>
          ) : null}
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
}

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
  },
  textLine: {
    fontSize: 18,
    fontFamily: 'Philosopher_400Regular',
  },
  viewButtonImage: { flexDirection: 'row' },
  ButtonImage: {
    padding: 5,
    marginTop: 20,
  },
  textList: {
    margin: 20,
    textAlign:'left'
  },
})
