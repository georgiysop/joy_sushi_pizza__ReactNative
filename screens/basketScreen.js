import React, { useState, useEffect } from 'react'
import { increment, decrement, removeItem } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'
const { createSelector } = require('@reduxjs/toolkit')
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
// import cartTotalPriceSelector from '../redux/selectors'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Philosopher_400Regular,
  Philosopher_700Bold,
} from '@expo-google-fonts/philosopher'
import { FlatList } from 'react-native-gesture-handler'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const pol_width = WIDTH / 2 - 20

const Basket = ({ navigation }) => {
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

  let [fontsLoaded] = useFonts({
    Philosopher_400Regular,
    Philosopher_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.viewStyte}>
              <View style={{ width: pol_width, marginRight: 5 }}>
                <Image
                  source={{
                    uri: item.picture !== '' ? item.picture : undefined,
                  }}
                  style={styles.kartinka}
                />
              </View>
              <View style={{ width: pol_width }}>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: 'red',
                      textDecorationLine: 'underline',
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 25,
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          if (item.quantity === 1) {
                            dispatch(removeItem(item.id))
                            return
                          } else {
                            dispatch(decrement(item.id))
                          }
                        }}
                      >
                        <AntDesign name={'minussquareo'} size={30} />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <Text style={{ fontSize: 25, marginHorizontal: 10 }}>
                        {item.quantity}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(increment(item.id))
                        }}
                      >
                        <AntDesign name={'plussquareo'} size={30} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(removeItem(item.id))
                      }}
                    >
                      <AntDesign
                        name={'delete'}
                        size={30}
                        style={{
                          marginRight: 10,
                          justifyContent: 'center',
                          color: 'red',
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    marginLeft: 0,
                    marginBottom: 0,
                    paddingTop: 25,
                    paddingRight: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 20,
                    }}
                  >
                    {item.quantity *
                      (item.newPrice ? item.newPrice : item.price)}{' '}
                    ₽
                  </Text>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      fontSize: 14,
                    }}
                  >
                    {item.newPrice ? item.newPrice : item.price} ₽/ шт
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        ListFooterComponent={() => {
          return (
            <View style={styles.contaiiner}>
              {cart.length === 0 ? (
                <View style={{ marginTop: 130 }}>
                  <Image
                    source={require('../assets/basket/sushi2.png')}
                    style={styles.imStyle}
                  />
                  {/* <Ionicons name={'ios-basket-outline'}  size={200} /> */}
                  <Text style={styles.basketclear1}>Ваша корзина пуста!</Text>
                  <Text style={styles.basketclear2}>
                    Добавьте понравившийся товар из меню.
                  </Text>
                </View>
              ) : (
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.styleText}>
                    Итого к оплате:
                    <Text style={{ fontSize: 24 }}> {totalPrice} ₽</Text>
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Order')}
                  >
                    <Text style={{ color: '#fff' }}>перейти к оформлению</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Home')}
                      >
                        <Text style={{ color: '#fff' }}>к покупкам</Text>
                      </TouchableOpacity> */}
                </View>
              )}
            </View>
          )
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  kartinka: {
    resizeMode: 'stretch',
    borderRadius: 10,
    width: '100%',
    height: HEIGHT * 0.16,
  },
  viewStyte: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    elevation: 3,
    shadowOpacity: 0.3,
    padding: 10,
  },
  button: {
    marginVertical: 10,
    backgroundColor: 'red',
    width: '80%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  blockText: { marginBottom: 20 },
  styleText: { fontSize: 18, fontWeight: 'bold', color: 'red' },
  contaiiner: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imStyle: {
    resizeMode: 'contain',
    width: WIDTH,
    height: HEIGHT * 0.14,
  },
  btnstyle: {
    backgroundColor: '#000',
  },
  basketclear1: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Philosopher_700Bold',
  },
  basketclear2: {
    color: '#000',
    fontSize: 20,
    marginBottom: 30,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',
    fontFamily: 'Philosopher_400Regular',
  },
})

export default Basket

// import { React } from 'react'
// import { StyleSheet, View, Text, Image, Dimensions, Button } from 'react-native'
// import { CustomButton1, CustomButton2 } from '../components/CustomButton'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import AppLoading from 'expo-app-loading'
// import {
//   useFonts,
//   Philosopher_400Regular,
//   Philosopher_700Bold,
// } from '@expo-google-fonts/philosopher'

// const WIDTH = Dimensions.get('window').width
// const HEIGHT = Dimensions.get('window').height

// const Basket = ({ navigation }) => {
//   const loadScreenHome = () => {
//     navigation.navigate('homeScreen')
//   }

//   let [fontsLoaded] = useFonts({
//     Philosopher_400Regular,
//     Philosopher_700Bold,
//   })

//   if (!fontsLoaded) {
//     return <AppLoading />
//   } else {
//     return (
// <View style={styles.container}>
//   <Image
//     source={require('../assets/basket/sushi2.png')}
//     style={styles.imStyle}
//   />
//   {/* <Ionicons name={'ios-basket-outline'}  size={200} /> */}
//   <Text style={styles.basketclear1}>Ваша корзина пуста!</Text>
//   <Text style={styles.basketclear2}>
//     Добавьте понравившийся товар из меню.
//   </Text>
// </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
//   imStyle: {
//     resizeMode: 'contain',
//     width: WIDTH,
//     height: HEIGHT * 0.14,
//   },
//   btnstyle: {
//     backgroundColor: '#000',
//   },
//   basketclear1: {
//     color: '#000',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//     fontFamily: 'Philosopher_700Bold',
//   },
//   basketclear2: {
//     color: '#000',
//     fontSize: 20,
//     marginBottom: 30,
//     paddingLeft: 40,
//     paddingRight: 40,
//     textAlign: 'center',
//     fontFamily: 'Philosopher_400Regular',
//   },
// })

// export default Basket
