import React, { useState, useEffect } from 'react'
import { addToCart } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'
import { auth, db } from '../firebase'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  LogBox,
} from 'react-native'

LogBox.ignoreLogs(['Setting a timer'])

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const pol_width = WIDTH / 2 - 20
// const [{data, loading, error}, searchProducts] =

function FormProducts(props) {
  
  const dispatch = useDispatch()
  const [product, setProduct] = useState([]) // Initial empty array of users

  useEffect(() => {
    const subscriber = db
      // props.product
      .collection(props.product)
      .onSnapshot((querySnapshot) => {
        const product = []

        querySnapshot.forEach((documentSnapshot) => {
          product.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          })
        })

        setProduct(product)
        // console.log(product)
      })

    // Unsubscribe from events when no longer in use
    return () => subscriber()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        numColumns={2}
        keyExtractor={(item) => item.id}
        key={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          // <TouchableOpacity onPress={windowDesc(item.description)}>
          <View style={styles.blockProduct}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  alert(item.description)
                }}
              >
                <Image
                  source={{
                    uri: item.picture !== '' ? item.picture : undefined,
                  }}
                  style={styles.kartinka}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.name}>{item.name}</Text>
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View>
                <Text style={styles.price}>{item.price} ₽</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(addToCart(item))
                  alert('Добавлено')
                }}
              >
                <MaterialIcons
                  name="add-shopping-cart"
                  size={24}
                  color="red"
                  style={styles.addCart}
                />
              </TouchableOpacity>
            </View>
          </View>
          /* </TouchableOpacity> */
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
  blockProduct: {
    marginHorizontal: 10,
    marginBottom: 10,
    height: 220,
    width: pol_width,
    borderRadius: 10,

    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 10 },
    backgroundColor: '#fff',
  },
  kartinka: {
    resizeMode: 'stretch',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    width: '100%',
    height: HEIGHT * 0.138,
  },
  price: {
    fontSize: 24,
    textDecorationLine: 'underline',
    color: 'red',
    padding: 10,
  },
  addCart: {
    fontSize: 24,
    padding: 10,
  },
  name: {
    padding: 10,
    fontSize: 14,
    fontWeight: '700',
  },
  // namePriceAdd: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginHorizontal: 20,
  //   marginTop: 10,
  // },
  // button: {
  //   marginHorizontal: 20,
  //   backgroundColor: 'white',
  //   padding: 10,
  //   borderRadius: 10,
  //   alignItems: 'center',
  //   justifyContent: 'center',

  //   shadowColor: 'black',
  //   shadowOffset: { width: 5, height: 5 },
  //   elevation: 3,
  //   shadowOpacity: 0.6,
  // },

  // discription: {
  //   marginHorizontal: 20,
  //   padding: 10,
  //   fontSize: 14,
  // },
})

{
  /* <View>
            <View>
              <Image
                source={{ uri: item.picture !== '' ? item.picture : undefined }}
                style={styles.kartinka}
              />
              <View style={styles.namePriceAdd}>
                <View style={{ width: '50%' }}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
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
          </View> */
}
