import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { clear } from '../redux/cartSlice'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useSelector, useDispatch } from 'react-redux'
import useTimeout from '../components/useTimeout'
// import { auth, db } from '../firebase'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const pol_width = WIDTH / 2 - 20

function Conf() {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  useTimeout(() => {
    navigation.navigate('Home')
    // dispatch(clear(useSelector((state) => state.cart)))
  }, 5000)

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/confirmation/ruka.png')}
          style={styles.imStyle}
        />
      </View>
      <View style={{ width: '70%' }}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            fontWeight: '700',
            color: 'green',
            paddingBottom: 10,
          }}
        >
          Заказ принят
        </Text>
        <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: '700' }}>
          В течении минуты
        </Text>
        <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: '700' }}>
          менеджер вам позвонит
        </Text>
      </View>
      <View style={{ marginTop: 10, width: '70%', marginBottom: 20 }}>
        <Text style={{ fontSize: 10, textAlign: 'center' }}>
          Переадресация через ...
        </Text>
      </View>

      <CountdownCircleTimer
        size={60}
        strokeWidth={6}
        isPlaying
        duration={5}
        colors={['#004777', '#F7B801', '#A30000']}
        colorsTime={[5, 2, 0]}
      >
        {({ remainingTime }) => <Text>{remainingTime}</Text>}
      </CountdownCircleTimer>
    </View>
  )
}

export default Conf

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imStyle: {
    resizeMode: 'contain',
    width: WIDTH,
    height: HEIGHT * 0.14,
  },
  button: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'red',
    width: '80%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
})

//   <View style={styles.container}>
//   <View>
//     <Image
//       source={require('../assets/network/oops.png')}
//       style={styles.imStyle}
//     />
//   </View>
//   <View style={{ width: '70%' }}>
//     <Text style={{ fontSize: 14, textAlign: 'center', }}>
//      похоже что-то с интернетом
//     </Text>
//   </View>
//   <View style={{justifyContent:'center' }}>
//   <TouchableOpacity style={styles.button}>
//     <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: '700', color:'#fff' }}>
//       повторить попытку
//     </Text>
//     </TouchableOpacity>
//   </View>
// </View>
