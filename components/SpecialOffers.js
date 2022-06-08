import React, { useState, useEffect } from 'react'
import Carousel from 'react-native-snap-carousel'
import { auth, db } from '../firebase'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const imgMassivSlider = [
  require('../assets/popular/spaisi.jpg'),
  require('../assets/popular/furo.jpeg'),
]
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const pol_width = WIDTH / 2 - 20
function SpecialOffers() {
  const [loading, setLoading] = useState(true) // Set loading to true on component mount
  const [offers, setOffers] = useState([]) // Initial empty array of users

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
        <Image
          source={{ uri: item.picture !== '' ? item.picture : undefined }}
          style={styles.wrap}
        />
        <Text>{item.price} ₽</Text>
        <Text>{item.newPrice} ₽</Text>

        <View>
          <Text>спец. предложение</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Carousel
        data={offers}
        renderItem={carouselCardItem}
        sliderWidth={WIDTH}
        itemWidth={HEIGHT * 0.6}
        inactiveSlideShift={2}
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
    marginTop: 10,
  },

  wrap: {
    resizeMode: 'contain',
    width: WIDTH,
    height: HEIGHT * 0.35,
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
