import React, { useState, Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './TabNavigator'

import Login from '../screens/loginScreen'
import Order from '../screens/orderScreen'
import Conf from '../screens/confScreen'
// import all from  '../screens/allScreen'

const Stack = createStackNavigator()

const BottomStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="all"
        children={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerTitle:'Оформление заказа',}}
      />
      <Stack.Screen
        name="Conf"
        component={Conf}
        options={{ headerShown: false ,}}
      />
    </Stack.Navigator>
  )
}

export default BottomStackNavigator
