import React, { useState, useEffect } from 'react'
import Carousel from 'react-native-snap-carousel'
import { addToCart } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth, db } from '../firebase'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { MaterialIcons } from '@expo/vector-icons'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const pol_width = WIDTH / 2 - 20

function SpecialOffers() {
  let [fontsLoaded] = useFonts({
    'Philosopher-Regular': require('../assets/fonts/Philosopher-Regular.ttf'),
    'Philosopher-Bold': require('../assets/fonts/Philosopher-Bold.ttf'),
  })

  const [loading, setLoading] = useState(true) // Set loading to true on component mount
  const [offers, setOffers] = useState([]) // Initial empty array of users
  const dispatch = useDispatch()

  useEffect(() => {
    const subscriber = db
      .collection('SpecOffers')
      .onSnapshot((querySnapshot) => {
        const offers = []

        querySnapshot.forEach((documentSnapshot) => {
          offers.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          })
        })

        setOffers(offers)
        setLoading(false)
      })

    // Unsubscribe from events when no longer in use
    return () => subscriber()
  }, [])

  if (loading) {
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator />
      </View>
    )
  }

  function carouselCardItem({ item, index }) {
    return (
      <View>
        <View style={{ position: 'relative' }}>
          <Image
            source={{ uri: item.picture !== '' ? item.picture : undefined }}
            style={styles.wrap}
          />
          <View style={{ position: 'absolute' }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                padding: 5,
                borderRadius: 10,
                margin: 10,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontFamily: 'Philosopher-Bold',
                }}
              >
                Акция!
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              marginBottom: 45,
              margin: 10,
            }}
          >
            <Text
              style={{
                color: '#fff',
                textDecorationLine: 'line-through',
                fontSize: 20,
                fontFamily: 'Philosopher-Regular',
              }}
            >
              {item.price} ₽
            </Text>
          </View>
          <View
            style={{ position: 'absolute', left: 0, bottom: 0, margin: 10 }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 30,
                fontFamily: 'Philosopher-Bold',
              }}
            >
              {item.newPrice} ₽
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              marginLeft: WIDTH - 40,
              margin: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(item))
                Alert.alert('', 'Добавлено')
              }}
            >
              <MaterialIcons
                name="add-shopping-cart"
                size={30}
                color="white"
                style={styles.addCart}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              marginLeft: WIDTH - 80,
              margin: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (item.description === '') {
                } else {
                  Alert.alert('Состав:', item.description)
                }
              }}
            >
              <MaterialIcons name="info-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <View style={styles.container}>
      <Carousel
        data={offers}
        renderItem={carouselCardItem}
        sliderWidth={WIDTH}
        itemWidth={HEIGHT * 0.6}
        inactiveSlideShift={17}
        useScrollView={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplay
        autoplayInterval={3000}
      />
    </View>
  )
}

export default SpecialOffers

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrap: {
    resizeMode: 'stretch',
    width: WIDTH,
    height: HEIGHT * 0.32,

    zIndex: 0,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageStyle: {
    borderRadius: 10,
    resizeMode: 'stretch',
    width: '100%',
    // width: WIDTH,
    height: HEIGHT * 0.23,
  },
})
