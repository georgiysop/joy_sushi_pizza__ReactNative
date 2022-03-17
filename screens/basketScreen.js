import { React } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import CustomButton1 from '../components/CustomButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Philosopher_400Regular,
  Philosopher_700Bold,
} from '@expo-google-fonts/philosopher'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Basket = () => {
  let [fontsLoaded] = useFonts({
    Philosopher_400Regular,
    Philosopher_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/basket/sushi2.png')}
          style={styles.imStyle}
        />
        {/* <Ionicons name={'ios-basket-outline'}  size={200} /> */}
        <Text style={styles.basketclear1}>Ваша корзина пуста!</Text>
        <Text style={styles.basketclear2}>
          Добавьте понравившийся товар из меню.
        </Text>
        <CustomButton1 title="Перейти к заказам" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imStyle: {
    resizeMode: 'contain',
    width: WIDTH,
    height: HEIGHT * 0.14,
  },
  btnstyle: {
    backgroundColor: '#000',
  },
  basketclear1: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Philosopher_700Bold',
  },
  basketclear2: {
    color: '#000',
    fontSize: 20,
    marginBottom: 30,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',
    fontFamily: 'Philosopher_400Regular',
  },
})

export default Basket
