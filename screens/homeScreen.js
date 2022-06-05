import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import SearchComponent from '../components/Search'
import CategoryItem from '../components/categoryItem'
import FormProducts from '../components/FormProducts'

import { ScrollView } from 'react-native-virtualized-view'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  Text,
  BackHandler,
  Button,
  Alert,
  Image,
  Dimensions,
  AppRegistry,
  VirtualizedScrollView,
  FlatList,
  // ScrollView,
} from 'react-native'

const imgMassivSlider = [
  require('../assets/popular/spaisi.jpg'),
  require('../assets/popular/furo.jpeg'),
]

const Home = () => {
  const [term, setTerm] = useState('Пицца25')

  const commonCategories = [
    {
      name: 'Пицца25',
      imgu: require('../assets/category/pizza_25.png'),
    },
    {
      name: 'Пицца33',
      imgu: require('../assets/category/pizza_33.png'),
    },
    {
      name: 'Пицца40',
      imgu: require('../assets/category/pizza_40.png'),
    },
    {
      name: 'Сеты',
      imgu: require('../assets/category/sets.png'),
    },
    {
      name: 'WOK',
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

        <FormProducts product={term} />
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
