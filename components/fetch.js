import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../config'

const Fetch = () => {
  const [users, setUsers] = useState([])
  const joyRef = firebase.firestore().collection('Pizza25')

  useEffect(async () => {
    joyRef.onSnapshot((querySnapshot) => {
      const users = []
      querySnapshot.forEach((doc) => {
        const { picture, name, description, price } = doc.data()
        users.push({ id: doc.id, picture, name, description, price })
      })
      setUsers(users)
    })
  })
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Pressable style={styles.container}>
            <View>
              <Image
                source={require('../assets/example/vkus_4.jpg')}
                style={styles.kartinka}
              />
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.addCart}>
                <View style={styles.discription}>
                  <Text>{item.description}</Text>
                </View>
                <View>
                  <Feather name="plus" size={25} />
                </View>
                <View>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  )
}

export default Fetch

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  kartinka: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  name: {
    marginLeft: 20,
    padding: 10,
    fontSize: 18,
    fontWeight: '700',
  },
  addCart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discription: {
    marginLeft: 20,
    padding: 10,
    fontSize: 14,
    width: '60%',
  },
})
