import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import SearchComponent from '../components/Search'
import Ionic from 'react-native-vector-icons/Ionicons'

import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  View,
  Text,
  BackHandler,
  Button,
  Alert,
  Image,
  Dimensions,
  AppRegistry,
  FlatList,
} from 'react-native'

const imgMassivSlider = [
  require('../assets/popular/spaisi.jpg'),
  require('../assets/popular/furo.jpeg'),
]

const Home = () => {
  const [data, setData] = useState([])

  const getdata = async () => {
    //  try {
    // await axios.post('https://app.frontpad.ru/api/index.php?get_products',
    //  {secret:'NNsKDNkzsEFy64BYHyyEZt2nS9BKFF7fenSG366fAADtr5b2kzs9SdkzbQ7Hf4RndzY6sRaRbE8tyaeHAAGdDYBFAzdGnYYteFkzhnbkTaFdaNNAahED568srb2FZH24dankrrB8s7bsGQSG2h9Sb88saZZZtKQzN4K4fa3B74SEFzasFa8G8638SNYakzA2n8Qz9EZ6tDz33zeyzd5y9StRtbRFBbsRa7aaA26SrsGdQNAaSrzR8SyrYa'})
    // .then(response => {console.log(response.data)});
    //   catch (error) {
    //     console.error(error);
    //   }
    // }

    let formdata = new FormData()
    formdata.append(
      'secret',
      'NNsKDNkzsEFy64BYHyyEZt2nS9BKFF7fenSG366fAADtr5b2kzs9SdkzbQ7Hf4RndzY6sRaRbE8tyaeHAAGdDYBFAzdGnYYteFkzhnbkTaFdaNNAahED568srb2FZH24dankrrB8s7bsGQSG2h9Sb88saZZZtKQzN4K4fa3B74SEFzasFa8G8638SNYakzA2n8Qz9EZ6tDz33zeyzd5y9StRtbRFBbsRa7aaA26SrsGdQNAaSrzR8SyrYa'
    )

    let requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    }

    fetch('https://app.frontpad.ru/api/index.php?get_products', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setData(result)
      })
      .catch((error) => console.log('error', error))
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <Slider imgMassivSlider={imgMassivSlider} />
        <SearchComponent />

        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Home
