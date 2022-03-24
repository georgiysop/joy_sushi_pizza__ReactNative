import React, { useState, Component } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native'

const imgMassivSlider = [
  require('../assets/popular/spaisi.jpg'),
  require('../assets/popular/furo.jpeg'),
]
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class Slider extends React.Component {
  state = {
    active: 0,
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    )

    if (slide !== this.state.active) {
      this.setState({ active: slide })
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        <View>
          <ScrollView
            horizontal
            pagingEnabled
            onScroll={this.change}
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}
          >
            {this.props.imgMassivSlider.map((image, index) => (
              <Image key={index} source={image} style={styles.wrap} />
            ))}
          </ScrollView>

          <View style={styles.pagination}>
            {this.props.imgMassivSlider.map((i, k) => (
              <Text
                key={k}
                style={
                  k == this.state.active
                    ? styles.pagingActiveText
                    : styles.pagingText
                }
              >
                ⬤
              </Text>
            ))}
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  wrap: {
    resizeMode: 'stretch',
    width: WIDTH,
    height: HEIGHT * 0.34,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {
    color: '#888',
    margin: 2,
  },
  pagingActiveText: {
    color: '#fff',
    margin: 2,
  },
})
