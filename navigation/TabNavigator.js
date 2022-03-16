import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from '../screens/homeScreen'
import Promo from '../screens/promoScreen'
import Profile from '../screens/profilScreen'
import Info from '../screens/infoScreen'
import Basket from '../screens/basketScreen'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  View,
  Text,
  BackHandler,
  Button,
  Alert,
  Image,
  Dimensions,
  AppRegistry,
} from 'react-native'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      //
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'ios-restaurant' : 'ios-restaurant-outline'
          } else if (route.name === 'Акции') {
            iconName = focused ? 'flame' : 'flame-outline'
          } else if (route.name === 'Профиль') {
            iconName = focused ? 'md-person' : 'md-person-outline'
          } else if (route.name === 'Инфо') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline'
          } else if (route.name === 'Корзина') {
            iconName = focused ? 'ios-basket' : 'ios-basket-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} color={color} size={25} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 50 },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Акции" component={Promo} />
      <Tab.Screen name="Профиль" component={Profile} />
      <Tab.Screen name="Инфо" component={Info} />
      <Tab.Screen name="Корзина" component={Basket} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

//     // You can return any component that you like here!
//     return <Ionicons name={iconName} size={size} color={color} />
//   },

// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import 'react-native-gesture-handler'
// import {Ionicons,FontAwesome} from 'react-native-vector-icons/Ionicons'

// import Home from '../screens/homeScreen'
// import Promo from '../screens/promoScreen'
// import Profile from '../screens/profilScreen'
// import Info from '../screens/infoScreen'
// import Basket from '../screens/basketScreen'
// import {
//   SafeAreaView,
//   StyleSheet,
//   StatusBar,
//   Platform,
//   ScrollView,
//   View,
//   Text,
//   BackHandler,
//   Button,
//   Alert,
//   Image,
//   Dimensions,
//   AppRegistry,
// } from 'react-native'

// const Tab = createBottomTabNavigator()

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       // headerShown: false,
//       // tabBarShowLabel: false,
//       //   tabBarStyle: { height: 60 },
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName

//           if (route.name === 'Home') {
//             iconName = focused
//               ? 'md-home'
//               : 'md-home-outline'
//           } else if (route.name === 'Promo') {
//             iconName = focused ? 'ios-list-box' : 'ios-list'
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//       })}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Promo" component={Promo} />
//       <Tab.Screen name="Profile" component={Profile} />
//       <Tab.Screen name="Info" component={Info} />
//       <Tab.Screen name="Basket" component={Basket} />
//     </Tab.Navigator>
//   )
// }

// export default BottomTabNavigator

// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import 'react-native-gesture-handler'

// import Home from '../screens/homeScreen'
// import Promo from '../screens/promoScreen'
// import Profile from '../screens/profilScreen'
// import Info from '../screens/infoScreen'
// import Basket from '../screens/basketScreen'
// import {
//   SafeAreaView,
//   StyleSheet,
//   StatusBar,
//   Platform,
//   ScrollView,
//   View,
//   Text,
//   BackHandler,
//   Button,
//   Alert,
//   Image,
//   Dimensions,
//   AppRegistry,
// } from 'react-native'

// const Tab = createBottomTabNavigator()

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       // headerShown: false,
//       screenOptions={{ tabBarShowLabel: false, tabBarStyle: { height: 60 } }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View>
//               <Image
//                 resizeMode="contain"
//                 style={{ width: 34, height: 36 }}
//                 source={require('../assets/navigator/home.png')}
//                 fadeDuration={0}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Promo"
//         component={Promo}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View>
//               <Image
//                 resizeMode="contain"
//                 style={{ width: 29, height: 34 }}
//                 source={require('../assets/navigator/promo.png')}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View>
//               <Image
//                 resizeMode="contain"
//                 style={{ width: 28, height: 28 }}
//                 source={require('../assets/navigator/profil.png')}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Info"
//         component={Info}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View>
//               <Image
//                 resizeMode="contain"
//                 style={{ width: 34, height: 36 }}
//                 source={require('../assets/navigator/info.png')}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Basket"
//         component={Basket}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View>
//               <Image
//                 resizeMode="contain"
//                 style={{ width: 30, height: 30 }}
//                 source={require('../assets/navigator/shop.png')}
//               />
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

// export default BottomTabNavigator
