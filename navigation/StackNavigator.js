import React from 'react'
import { createStackTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from '../screens/homeScreen'
import Promo from '../screens/promoScreen'
import Profile from '../screens/profilScreen'
import Info from '../screens/infoScreen'
import Basket from '../screens/basketScreen'


const Stack = createStackNavigator()

const BottomStackbNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Акции" component={Promo} />
      <Stack.Screen name="Профиль" component={Profile} />
      <Stack.Screen name="Инфо" component={Info} />
      <Stack.Screen name="Корзина" component={Basket} />
   </Stack.Navigator>
  )
}

export default BottomStackbNavigator
