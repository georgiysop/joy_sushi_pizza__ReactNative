import React from 'react'
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

const Home = () => {
  return (
    <View style={styles.center}>
      <View>
        <Button
          title="Быстрый заказ"
          color="#f194ff"
          titleStyle={{ fontWeight: '700' }}
          styles={styles.separator}
        />
      </View>
      <Button title="Войти" color="#f194ff" />
      <Button title="Регистрация" color="#f194ff" />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  separator: {
    backgroundColor: 'rgba(111, 202, 186, 1)',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    paddingVertical: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
})

export default Home
