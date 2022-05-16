import { React } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const ButtonGoogle = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnstyle2}>
          <Text style={styles.btntext2}>авторизироваться через </Text>
          <Image
            source={require('../assets/authorization/google.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

const ButtonFacebook = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnstyle2}>
          <Text style={styles.btntext2}>авторизироваться через</Text>
          <Image
            source={require('../assets/authorization/facebook.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  btnstyle1: {
    margin: 30,
    backgroundColor: '#FF0000',
    borderRadius: 20,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
  },

  btntext1: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  btnstyle2: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF0000',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
  },
  btntext2: {
    color: '#FF0000',
    fontSize: 15,
  },
  image: {
    width: 20,
    height: 20,
  },
})

export { ButtonGoogle, ButtonFacebook }
