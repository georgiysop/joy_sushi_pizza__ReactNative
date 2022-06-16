import React, { useState, Component } from 'react'
import { useNavigation } from '@react-navigation/core'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './TabNavigator'
import { Feather } from '@expo/vector-icons'
import Login from '../screens/loginScreen'
import Order from '../screens/orderScreen'
import Conf from '../screens/confScreen'
import Fast from '../screens/fastScreen'
import Info from '../screens/infoScreen'
import { TouchableOpacity, Linking, Platform } from 'react-native'
import { View } from 'react-native-animatable'

const Stack = createStackNavigator()
const BottomStackNavigator = () => {
  const navigation = useNavigation()
  const makeCall = () => {
    let phoneNumber = ''

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${89635354144}'
    } else {
      phoneNumber = 'telprompt:${89635354144}'
    }

    Linking.openURL(phoneNumber)
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{
          headerShown: true,
          headerBackTitle: 'назад',
          headerTitle: 'Инфо',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Fast"
        component={Fast}
        options={{
          headerShown: true,
          headerTitle: 'Быстрый заказ',
          headerBackTitle: 'назад',

          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 5 }}>
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => {
                  navigation.navigate('Info')
                }}
              >
                <Feather name="info" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => {
                  makeCall()
                }}
              >
                <Feather name="phone-call" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="all"
        children={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{
          headerTitle: 'Оформление заказа',
          headerBackTitle: 'назад',
        }}
      />
      <Stack.Screen
        name="Conf"
        component={Conf}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default BottomStackNavigator
