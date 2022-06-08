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
import { TouchableOpacity } from 'react-native-gesture-handler'

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
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator />
      </View>
    )
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
              <View style={styles.imageStyle}>
                <Image
                  source={{ uri: item.image !== '' ? item.image : undefined }}
                  style={styles.imageStyle}
                />
              </View>
              <View style={styles.padd}>
                <Text style={styles.textStyle}>{item.description}</Text>
              </View>
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
    borderRadius: 10,
    resizeMode: 'stretch',
    width: '100%',
    // width: WIDTH,
    height: HEIGHT * 0.23,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Philosopher_400Regular',

    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 16,
    borderBottomColor: 'red',
  },
  viewStyte: {
    marginTop: 10,
    marginBottom: 20,
    width: '90%',

    backgroundColor: '#fff',

    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 10 },
    elevation: 3,
    shadowOpacity: 0.3,
    padding: 10,
  },
  padd: {
    marginTop: 10,
  },
})

export default Promo
