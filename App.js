import React, { useState, Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomStackNavigator from './navigation/StackNavigator'
import BottomTabNavigator from './navigation/TabNavigator'
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'
import { Provider } from 'react-redux'
import store from './redux/store'
export default class App extends React.Component {
  render() {
    return (
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
