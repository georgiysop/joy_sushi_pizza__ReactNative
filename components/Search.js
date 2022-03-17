import React from 'react'

import { StyleSheet, View, Text, TextInput } from 'react-native'

const SearchComponent = () => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        placeholderTextColor={'black'}
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
