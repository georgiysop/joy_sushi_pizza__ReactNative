import React, { useState, useEffect } from 'react'
// import { auth, db } from '../firebase'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function FastHeader() {
  return (
    <View style={{ flexDirection: 'row', marginRight: 5 }}>
      <TouchableOpacity
        style={{ marginRight: 15 }}
        onPress={() => {
          navigation.navigate('Info')
        }}
      >
        <Feather name="info" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginRight: 15 }}>
        <Feather name="phone-call" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default FastHeader

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
