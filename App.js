import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomStackNavigator from './navigation/StackNavigator'
import BottomTabNavigator from './navigation/TabNavigator'
import Ooops from './screens/ooopsScreen'
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'
import { Provider } from 'react-redux'
import store from './redux/store'
import NetInfo from '@react-native-community/netinfo'

const App = () => {
  return NetInfo.fetch() ? (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <NavigationContainer>
        {/* <BottomTabNavigator /> */}
        <Provider store={store}>
          <BottomStackNavigator />
        </Provider>
      </NavigationContainer>
    </SafeAreaView>
  ) : (
    <Ooops />
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
