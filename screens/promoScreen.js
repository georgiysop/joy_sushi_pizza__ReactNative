import React, { useState, useEffect } from 'react'
import AppLoading from 'expo-app-loading'
import { auth, db } from '../firebase'
import {
  useFonts,
  Philosopher_400Regular,
} from '@expo-google-fonts/philosopher'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Promo = () => {
  const [loading, setLoading] = useState(true) // Set loading to true on component mount
  const [promo, setPromo] = useState([]) // Initial empty array of users

  useEffect(() => {
    const subscriber = db.collection('Акции').onSnapshot((querySnapshot) => {
      const promo = []

      querySnapshot.forEach((documentSnapshot) => {
        promo.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        })
      })

      setPromo(promo)
      setLoading(false)
    })

    // Unsubscribe from events when no longer in use
    return () => subscriber()
  }, [])

  if (loading) {
    return <View style={{justifyContent:'center',  flex: 1,}}><ActivityIndicator/></View>
  }

  // let [fontsLoaded] = useFonts({
  //   Philosopher_400Regular,
  // })

  // if (!fontsLoaded) {
  //   return <AppLoading />
  // } else {
  return (
    <View>
      <FlatList
        data={promo}
        renderItem={({ item }) => (
          <View style={styles.center}>
            <View style={styles.viewStyte}>
              <Image
                source={{ uri: item.image !== '' ? item.image : undefined }}
                style={styles.imageStyle}
              />
              <Text style={styles.textStyle}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
  // }
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageStyle: {
    resizeMode: 'stretch',
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Philosopher_400Regular',
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 16,
    borderBottomColor: 'red',
  },
})

export default Promo
