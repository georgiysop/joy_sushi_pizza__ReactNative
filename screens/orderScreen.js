import React, { useState, useEffect } from 'react'
import { clear } from '../redux/cartSlice'
import { db, auth } from '../firebase'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
const { createSelector } = require('@reduxjs/toolkit')
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Button,
  TextInput,
  Alert,
} from 'react-native'

import { RadioButton } from 'react-native-paper'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Order = () => {
  let [fontsLoaded] = useFonts({
    'Philosopher-Regular': require('../assets/fonts/Philosopher-Regular.ttf'),
    'Philosopher-Bold': require('../assets/fonts/Philosopher-Bold.ttf'),
  })
  const [userData, setUserData] = useState(null)
  const navigation = useNavigation()
  const [checked_1, setChecked_1] = useState('delivery')
  const [checked_2, setChecked_2] = useState('cash')

  const cartSelector = (state) => state.cart
  const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
    cart.reduce(
      (total, current) =>
        (total +=
          (current.newPrice ? current.newPrice : current.price) *
          current.quantity),
      0
    )
  )
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const totalPrice = useSelector(cartTotalPriceSelector)

  const getUser = async () => {
    const user = auth.currentUser
    db.collection('users')
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          setUserData(documentSnapshot.data())
        }
      })
      .catch((error) => alert(error.message))
  }

  useEffect(() => {
    getUser()
  }, [])

  const SetOrder = () => {
    const now = new Date()
    const user = auth.currentUser
    return db
      .collection('orders')
      .doc()
      .set({
        name: userData.name,
        phone: userData.phone,
        house: userData.house,
        kv: userData.kv,
        pod: userData.pod,
        street: userData.street,
        doc: user.uid,
        Price: totalPrice,
        TimeOrder: now,
        delivery: checked_1,
        payment: checked_2,
        products: cart,
      })
  }
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.blockText}>
          <Text style={styles.styleText}>Личные данные:</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Имя*"
            placeholderTextColor={'red'}
            value={userData ? userData.name : ''}
            onChangeText={(txt) => setUserData({ ...userData, name: txt })}
            style={styles.input}
          />
          <TextInput
            placeholder="Телефон*"
            placeholderTextColor={'red'}
            value={userData ? userData.phone : ''}
            onChangeText={(txt) => setUserData({ ...userData, phone: txt })}
            style={styles.input}
          />
        </View>
        <View style={styles.blockText}>
          <Text style={styles.styleText}>Доставка:</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '32%',
          }}
        >
          <View style={styles.radio}>
            <Text style={styles.radioText}>доставка</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              borderRadius: 50,
              marginRight: 10,
            }}
          >
            <RadioButton
              color="red"
              value="delivery"
              status={checked_1 === 'delivery' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_1('delivery')}
            />
          </View>
          <View style={styles.radio}>
            <Text style={styles.radioText}>самовывоз</Text>
          </View>
          <View
            style={{ borderWidth: 1, borderColor: 'red', borderRadius: 50 }}
          >
            <RadioButton
              color="red"
              value="self"
              status={checked_1 === 'self' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_1('self')}
            />
          </View>
        </View>
        <View style={styles.form}>
          <View style={{ marginTop: 10 }}>
            <TextInput
              placeholder="Адрес доставки*"
              placeholderTextColor={'red'}
              value={userData ? userData.street : ''}
              onChangeText={(txt) => setUserData({ ...userData, street: txt })}
              style={styles.input}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '33.3%',
            }}
          >
            <TextInput
              placeholder="дом"
              placeholderTextColor={'red'}
              value={userData ? userData.house : ''}
              onChangeText={(txt) => setUserData({ ...userData, house: txt })}
              style={styles.input}
            />
            <TextInput
              placeholder="подъезд"
              placeholderTextColor={'red'}
              value={userData ? userData.pod : ''}
              onChangeText={(txt) => setUserData({ ...userData, pod: txt })}
              style={styles.input}
            />
            <TextInput
              placeholder="кв"
              placeholderTextColor={'red'}
              value={userData ? userData.kv : ''}
              onChangeText={(txt) => setUserData({ ...userData, kv: txt })}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.blockText}>
          <Text style={styles.styleText}>Оплата курьеру:</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '32%',
          }}
        >
          <View style={styles.radio}>
            <Text style={styles.radioText}>наличными</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              borderRadius: 50,
              marginRight: 10,
            }}
          >
            <RadioButton
              color="red"
              value="cash"
              status={checked_2 === 'cash' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_2('cash')}
            />
          </View>
          <View style={styles.radio}>
            <Text style={styles.radioText}>картой</Text>
          </View>
          <View
            style={{ borderWidth: 1, borderColor: 'red', borderRadius: 50 }}
          >
            <RadioButton
              color="red"
              value="cart"
              status={checked_2 === 'cart' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_2('cart')}
            />
          </View>
        </View>
        {/* <View style={{ marginTop: 10, marginBottom: 30 }}>
          <TextInput
            placeholder="Комментарий к заказу*"
            placeholderTextColor={'red'}
           
            style={styles.input}
          />
        </View> */}
        <View style={styles.blockText}>
          <Text style={styles.styleText}>
            Итого к оплате:{' '}
            <Text style={{ fontSize: 24 }}> {totalPrice} ₽ </Text>
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Philosopher-Regular',
              fontSize: 16,
            }}
          >
            без учета доставки{' '}
          </Text>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            if (userData.name === '' || userData.phone === '') {
              Alert.alert('', 'Введите личные данные')
            } else {
              SetOrder()
              dispatch(clear())
              navigation.replace('Conf')
            }
          }}
          style={styles.button}
        >
          <Text style={{ color: '#fff', fontWeight: '700' }}>
            Оформить заказ
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
  //   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  input: {
    backgroundColor: '#FFF0F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,

    color: 'red',
    fontSize: 20,
    fontFamily: 'Philosopher-Regular',
    opacity: 0.4,
    width: '100%',
  },
  blockText: { marginVertical: 10 },
  styleText: { fontSize: 24, fontFamily: 'Philosopher-Bold', color: 'red' },
  radio: {
    justifyContent: 'center',
    marginRight: 10,
  },
  radioText: { fontFamily: 'Philosopher-Regular', fontSize: 16 },
  button: {
    marginBottom: 20,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 15,
  },
})

export default Order
