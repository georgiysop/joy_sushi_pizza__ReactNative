import { React } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import CustomButton1 from '../components/CustomButton'

const Basket = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/basket/clearBasket.png')} />
      <Text>В корзине пусто</Text>
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
  btnstyle: {
    backgroundColor: '#000',
  },
})

export default Basket
