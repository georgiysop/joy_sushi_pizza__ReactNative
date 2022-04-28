import { StyleSheet, View, Text, FlatList } from 'react-native'

export default function FormProducts() {
  // const DATA = JSON.parse(require('../products'))
  // const Item = (name, description, price) => {
  //   <View>
  //     <Image source={require(picture)} />
  //     <Text>{name}</Text>
  //     <Text>{description}</Text>
  //     <Text>{price}</Text>
  //   </View>
  // }
  return (
    <View style={styles.container}>
      <Text>КУШАЦ</Text>
      {/* <FlatList data={DATA} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
})
