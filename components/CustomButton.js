import { React } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CustomButton1 = (props) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnstyle1}>
          <Text style={styles.btntext1}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const CustomButton2 = (props) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnstyle2}>
          <Text style={styles.btntext2}>{props.title}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  btnstyle1: {
    backgroundColor: '#FF0000',
    borderRadius: 20,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: 278,
    fontSize: 15,
    fontWeight: '700',
  },

  btntext1: {
    color: '#fff',
  },
  btnstyle2: {
    backgroundColor: '#FF0000',
    borderRadius: 20,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: 278,
    fontSize: 15,
    fontWeight: '700',
  },
  btntext2: {
    color: '#fff',
  },
})

export default CustomButton1
