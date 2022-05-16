import Feather from 'react-native-vector-icons/Feather'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import CategoryItem from '../components/categoryItem'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,

} from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
// const [{data, loading, error}, searchProducts] =

function FormProducts() {
  const [loading, setLoading] = useState(true) // Set loading to true on component mount
  const [product, setProduct] = useState([]) // Initial empty array of users

  useEffect(() => {
    const subscriber = db.collection('Пицца25').onSnapshot((querySnapshot) => {
      const product = []

      querySnapshot.forEach((documentSnapshot) => {
        product.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        })
      })

      setProduct(product)
      setLoading(false)
    })

    // Unsubscribe from events when no longer in use
    return () => subscriber()
  }, [])

  if (loading) {
    return <ActivityIndicator style={{justifyContent:'center'}}/>
  }
  const namesCollections = [
    'Пицца25',
    'Пицца33',
    'Пицца40',
    'Сеты',
    'Wok',
    'Закуски',
    'StreetFood',
    'Супы',
    'Гунканы',
    'Роллы',
    'Салаты',
    'Десерты',
    'Напитки',
    'Добавки',
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        renderItem={({ item }) => (
          <View>
            <View>
              <Image
                source={{ uri: item.picture !== '' ? item.picture : undefined }}
                style={styles.kartinka}
              />
              <View style={styles.namePriceAdd}>
                <View style={{width:'50%'}}><Text style={styles.name}>{item.name}</Text></View>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ fontSize: 15 }}>
                    Добавить за <Text style={styles.price}>{item.price} ₽</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.discription}>
              <Text style={{ textAlign: 'justify' }}>{item.description}</Text>
            </View>
          </View>
        )}
      />

    </View>
  )
}

export default FormProducts

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  kartinka: {
    resizeMode: 'stretch',
    width: WIDTH,
    height: HEIGHT * 0.3,
  },
  namePriceAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    elevation: 3,
    shadowOpacity: 0.6,
  },
  price: { fontSize: 20, textDecorationLine: 'underline', color: 'red' },
  name: {
    padding: 10,
    fontSize: 18,
    fontWeight: '700',
  },

  discription: {
    marginHorizontal: 20,
    padding: 10,
    fontSize: 14,
  },
})
