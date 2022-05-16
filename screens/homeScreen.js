import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import SearchComponent from '../components/Search'
import CategoryItem from '../components/categoryItem'
// import Fetch from '../components/fetch'

import Ionic from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
import FormProducts from '../components/FormProducts'

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
  SegmentedControlIOSComponent,
} from 'react-native'

const imgMassivSlider = [
  require('../assets/popular/spaisi.jpg'),
  require('../assets/popular/furo.jpeg'),
]

const Home = () => {
  const [term, setTerm] = useState('Пицца')

  const commonCategories = [
    {
      name: 'Пицца 25 см',
      imgu: require('../assets/category/pizza_25.png'),
    },
    {
      name: 'Пицца 33 см',
      imgu: require('../assets/category/pizza_33.png'),
    },
    {
      name: 'Пицца 40 см',
      imgu: require('../assets/category/pizza_40.png'),
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
    {
      name: 'Street Food',
      imgu: require('../assets/category/kebab.png'),
    },
    {
      name: 'Супы',
      imgu: require('../assets/category/soup.png'),
    },
    {
      name: 'Гунканы',
      imgu: require('../assets/category/gunkan.png'),
    },
    {
      name: 'Роллы',
      imgu: require('../assets/category/sushi.png'),
    },
    {
      name: 'Салаты',
      imgu: require('../assets/category/salad.png'),
    },
    {
      name: 'Десерты',
      imgu: require('../assets/category/desert.png'),
    },
    {
      name: 'Напитки',
      imgu: require('../assets/category/drink.png'),
    },
    {
      name: 'Добавки',
      imgu: require('../assets/category/sauce.png'),
    },
  ]

  return (
    <View style={styles.container}>
      <ScrollView>
        <Slider imgMassivSlider={imgMassivSlider} />
        <SearchComponent setTerm={setTerm} />
        <FlatList
          data={commonCategories}
          renderItem={({ item, index }) => {
            return (
              <CategoryItem
                name={item.name}
                imgu={item.imgu}
                index={index}
                active={item.name === term}
                handlePress={() => setTerm(item.name)}
              />
            )
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(category) => category.name}
        />

        <FormProducts />
        {/* <Fetch /> */}
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
