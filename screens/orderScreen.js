import React, { useState, useEffect } from 'react'
import {clear } from '../redux/cartSlice'
import { db, auth } from '../firebase'
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
} from 'react-native'

import { RadioButton } from 'react-native-paper'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Philosopher_400Regular,
  Philosopher_700Bold,
} from '@expo-google-fonts/philosopher'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Order = () => {
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
          console.log('User Data', documentSnapshot.data())
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
  //   let [fontsLoaded] = useFonts({
  //     Philosopher_400Regular,
  //     Philosopher_700Bold,
  //   })

  //   if (!fontsLoaded) {
  //     return <AppLoading />
  //   } else {
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
          <View style={styles.redioText}>
            <Text>доставка</Text>
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
          <View style={styles.redioText}>
            <Text>самовывоз</Text>
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
          <View style={styles.redioText}>
            <Text>наличными</Text>
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
          <View style={styles.redioText}>
            <Text>картой</Text>
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
          <Text style={{ fontSize: 12 }}>без учета доставки </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              if (userData.name === '' || userData.phone === '') {
                alert('введите личные данные')
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
    fontSize: 16,
    opacity: 0.4,
    width: '100%',
  },
  blockText: { marginBottom: 20,marginTop:20 },
  styleText: { fontSize: 18, fontWeight: 'bold', color: 'red' },
  redioText: {
    justifyContent: 'center',
    marginRight: 10,
  },
  button: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'red',
    width: '80%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
})

export default Order
