import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/homeScreen'
import Promo from '../screens/promoScreen'
import Profile from '../screens/profilScreen'
import Info from '../screens/infoScreen'
import Basket from '../screens/basketScreen'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Promo" component={Promo} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Info" component={Info} />
      <Tab.Screen name="Basket" component={Basket} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
