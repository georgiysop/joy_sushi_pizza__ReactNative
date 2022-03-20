import React from 'react'
import CustomButton1 from '../components/CustomButton'
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
  TouchableOpacity,
} from 'react-native'

const Profil = () => {
  return (
    <View style={styles.container}>
      <CustomButton1 title="Перейти к заказам" />
      <CustomButton1 title="Перейти к заказам" />
      <CustomButton1 title="Перейти к заказам" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
})

export default Profil
