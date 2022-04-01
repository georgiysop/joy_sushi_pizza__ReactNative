import { View, Text, StyleSheet, Image } from 'react-native'

export default function CategoryItem({ name, imgu, index }) {
  return (
    <View
      style={[
        styles.container,
        index === 0 ? { marginLeft: 20 } : { marginLeft: 15 },
      ]}
    >
      <View style={styles.imageContainer}>
        <Image source={imgu} style={styles.image} />
      </View>
      <Text style={styles.header}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: 85,
    height: 100,
    borderRadius: 50,

    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    elevation: 3,
    shadowOpacity: 0.3,
    padding: 10,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    opacity: 0.2,
  },
  image: {
    width: 40,
    height: 40,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  header: {
    fontWeight: 'bold',
  },
})
