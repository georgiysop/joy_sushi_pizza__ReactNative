import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import {
  useFonts,
  Philosopher_400Regular,
} from '@expo-google-fonts/philosopher'
import AppLoading from 'expo-app-loading'

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
  Linking,
} from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Info = () => {
  let [fontsLoaded] = useFonts({
    Philosopher_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.center}>
        <View style={styles.viewLine}>
          <Text style={styles.textLine}>о нас</Text>
          <Icon name="chevron-down-outline" size={18}></Icon>
        </View>
        <View style={styles.viewLine}>
          <Text style={styles.textLine}>условия доставки</Text>
          <Text style={styles.textLine}>условия доставки</Text>
          <Icon name="chevron-down-outline" size={18}></Icon>
        </View>
        <View style={styles.viewLine}>
          <Text style={styles.textLine}>контакты</Text>
          <Icon name="chevron-down-outline" size={18} />
        </View>
        <View style={styles.viewButtonImage}>
          <SimpleIcon
            name="social-vkontakte"
            size={52}
            style={styles.ButtonImage}
            color="rgba(207, 99, 45, 1)"
            onPress={() => Linking.openURL('https://vk.com/joy_foods')}
          />
          <EvilIcons
            name="sc-telegram"
            size={60}
            style={styles.ButtonImage}
            color="rgba(207, 99, 45, 1)"
            onPress={() => Linking.openURL('https://t.me/joyfoods')}
          />
          <Feather
            name="instagram"
            size={49}
            style={styles.ButtonImage}
            color="rgba(207, 99, 45, 1)"
            onPress={() =>
              Linking.openURL('https://www.instagram.com/joy_sushi_pizza/')
            }
          />
        </View>
      </View>
    )
  }
}
// borderWidth: 5,

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
  },

  viewLine: {
    borderWidth: 2,
    // borderBottomWidth:2,

    borderColor: '#DDD1D1',
    marginTop: HEIGHT * 0.04,
    width: WIDTH * 0.9,
  },
  textLine: {
    fontSize: 18,
    fontFamily: 'Philosopher_400Regular',
  },
  viewButtonImage: {
    flexDirection: 'row',
  },
  ButtonImage: {
    padding: 5,
    marginTop: 20,
  },
})

export default Info
