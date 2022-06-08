import React, { useEffect, useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { StyleSheet, View, Text, TextInput } from 'react-native'

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={25} />
      <TextInput placeholder="ням ням ням        " style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
    marginHorizontal: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    elevation: 3,
    shadowOpacity: 0.3,
    padding: 10,
    borderRadius: 40,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
})

export default SearchComponent
