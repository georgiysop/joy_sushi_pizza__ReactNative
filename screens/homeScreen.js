import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import SearchComponent from '../components/Search'
import CategoryItem from '../components/categoryItem'
import Ionic from 'react-native-vector-icons/Ionicons'
import axios from 'axios'

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
  const commonCategories = [
    {
      name: 'Пицца',
      imgu: require('../assets/category/pizza.png'),
    },
    {
      name: 'Сеты',
      imgu: require('../assets/category/sets.png'),
    },
    {
      name: 'Wok',
      imgu: require('../assets/category/wok.png'),
    },
    {
      name: 'Закуски',
      imgu: require('../assets/category/snack.png'),
    },
  ]

  // const [data, setData] = useState([])

  // const getdata = async () => {
  //  try {
  // await axios.post('https://app.frontpad.ru/api/index.php?get_products',
  //  {secret:'NNsKDNkzsEFy64BYHyyEZt2nS9BKFF7fenSG366fAADtr5b2kzs9SdkzbQ7Hf4RndzY6sRaRbE8tyaeHAAGdDYBFAzdGnYYteFkzhnbkTaFdaNNAahED568srb2FZH24dankrrB8s7bsGQSG2h9Sb88saZZZtKQzN4K4fa3B74SEFzasFa8G8638SNYakzA2n8Qz9EZ6tDz33zeyzd5y9StRtbRFBbsRa7aaA26SrsGdQNAaSrzR8SyrYa'})
  // .then(response => {console.log(response.data)});
  //   catch (error) {
  //     console.error(error);
  //   }
  // }

  //   let FormData = require('form-data')
  //   let data = new FormData()
  //   data.append('owner_id', '-203680384')
  //   data.append('count', '1')

  //   axios
  //     .post('https://api.vk.com/method/market.get', data, {
  //       params: {
  //         owner_id: '-203680384',
  //         v: 5.124,
  //         access_token:
  //           'ba5fb524da1ef5f1f6a034709e3a19872f378e9c1c3351fea137375b073d3f85eeb313f2bd0f1fade2471',
  //       },
  //       //header
  //     })
  //     .then(function(response) {
  //       console.log(JSON.stringify(response.data))
  //     })
  //     .catch(function(error) {
  //       console.log(error)
  //     })

  //   // console.log(res)
  // }

  // useEffect(() => {
  //   getdata()
  // }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Slider imgMassivSlider={imgMassivSlider} /> */}
        <SearchComponent />

        <FlatList
          data={commonCategories}
          renderItem={({ item, index }) => {
            return (
              <CategoryItem name={item.name} imgu={item.imgu} index={index} />
            )
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(category) => category.name}
        />

        {/* <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        /> */}
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
