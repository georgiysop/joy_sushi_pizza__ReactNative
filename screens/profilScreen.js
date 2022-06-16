import { useNavigation } from '@react-navigation/core'
import React, { useReducer, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native'

const Profil = () => {
  let [fontsLoaded] = useFonts({
    'Philosopher-Regular': require('../assets/fonts/Philosopher-Regular.ttf'),
    'Philosopher-Bold': require('../assets/fonts/Philosopher-Bold.ttf'),
  })
  const navigation = useNavigation()
  const [userData, setUserData] = useState(null)

  const getUser = async () => {
    const user = auth.currentUser
    db.collection('users')
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data())
          setUserData(documentSnapshot.data())
        }
      })
      .catch((error) => alert(error.message))
  }

  useEffect(() => {
    getUser()
  }, [])

  const handleSingOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login')
      })
      .catch((error) => alert(error.message))
  }

  const save = () => {
    const user = auth.currentUser
    db.collection('users')
      .doc(user.uid)
      .update({
        name: userData.name,
        phone: userData.phone,
        street: userData.street,
        house: userData.house,
        pod: userData.pod,
        kv: userData.kv,
        doc: user.uid,
      })
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            placeholder="email"
            placeholderTextColor={'red'}
            value={userData ? userData.email : ''}
            style={styles.input}
          />
          <TextInput
            placeholder="Имя"
            placeholderTextColor={'red'}
            value={userData ? userData.name : ''}
            onChangeText={(txt) => setUserData({ ...userData, name: txt })}
            style={styles.input}
          />
          <TextInput
            placeholder="Телефон"
            placeholderTextColor={'red'}
            value={userData ? userData.phone : ''}
            onChangeText={(txt) => setUserData({ ...userData, phone: txt })}
            style={styles.input}
          />
          <TextInput
            placeholder="Улица"
            placeholderTextColor={'red'}
            value={userData ? userData.street : ''}
            onChangeText={(txt) => setUserData({ ...userData, street: txt })}
            style={styles.input}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '32%',
              justifyContent: 'center',
            }}
          >
            <TextInput
              placeholder="дом"
              placeholderTextColor={'red'}
              value={userData ? userData.house : ''}
              onChangeText={(txt) => setUserData({ ...userData, house: txt })}
              style={styles.input}
            />
            <TextInput
              placeholder="подъезд"
              placeholderTextColor={'red'}
              value={userData ? userData.pod : ''}
              onChangeText={(txt) => setUserData({ ...userData, pod: txt })}
              style={styles.input}
            />
            <TextInput
              placeholder="кв"
              placeholderTextColor={'red'}
              value={userData ? userData.kv : ''}
              onChangeText={(txt) => setUserData({ ...userData, kv: txt })}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.save}>
          <TouchableOpacity style={styles.button} onPress={save}>
            <Text style={styles.buttonText}>сохранить</Text>
          </TouchableOpacity>
          
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Мои заказы</Text>
          </TouchableOpacity> */}
        </View>

        <View style={{ width: '85%', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontFamily: 'Philosopher-Bold' }}>
            Аккаунт: {auth.currentUser?.email}
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleSingOut}>
            <Text style={styles.buttonText}>Выйти из аккаунта</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: { width: '85%', alignItems: 'center', marginTop: 50 },
  button: {
    backgroundColor: 'red',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '60%',
  },
  save: {
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },

  buttonText: { color: '#fff', fontSize: 16, fontFamily: 'Philosopher-Bold' },
  input: {
    backgroundColor: '#FFF0F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 6,
    color: 'red',
    fontSize: 18,
    opacity: 0.4,
    width: '90%',
    fontFamily: 'Philosopher-Regular',
  },
})

export default Profil
