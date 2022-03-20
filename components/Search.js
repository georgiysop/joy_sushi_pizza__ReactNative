import React from 'react'

import { StyleSheet, View, Text, TextInput } from 'react-native'

const SearchComponent = () => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        placeholderTextColor={'black'}
        style={{
          fontSize: 20,
          borderWidth: 1,
          margin: 10,
          borderRadius: 20,
          borderColor: 'red',
          width: 45,
          height: 40,
        }}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default SearchComponent
