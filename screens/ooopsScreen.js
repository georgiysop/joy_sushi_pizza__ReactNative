import React, { useState, useEffect } from 'react'
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

function Ooops() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/network/oops.png')}
          style={styles.imStyle}
        />
      </View>
      <View style={{ width: '70%' }}>
        <Text style={{ fontSize: 14, textAlign: 'center' }}>
          похоже что-то с интернетом
        </Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        {/* <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'center',
              fontWeight: '700',
              color: '#fff',
            }}
          >
            повторить попытку
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default Ooops

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
