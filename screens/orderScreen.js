import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Button,
  TextInput,
} from 'react-native'

import { RadioButton } from 'react-native-paper'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Philosopher_400Regular,
  Philosopher_700Bold,
} from '@expo-google-fonts/philosopher'
import { ScrollView } from 'react-native-gesture-handler'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Order = () => {
  const navigation = useNavigation()
  const cart = useSelector((state) => state.cart)
  const [checked_1, setChecked_1] = useState('delivery')
  const [checked_2, setChecked_2] = useState('cash')

  //   let [fontsLoaded] = useFonts({
  //     Philosopher_400Regular,
  //     Philosopher_700Bold,
  //   })

  //   if (!fontsLoaded) {
  //     return <AppLoading />
  //   } else {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.blockText}>
          <Text style={styles.styleText}>Личные данные:</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Имя*"
            placeholderTextColor={'red'}
            style={styles.input}
          />
          <TextInput
            placeholder="Телефон*"
            placeholderTextColor={'red'}
            style={styles.input}
          />
        </View>
        <View style={styles.blockText}>
          <Text style={styles.styleText}>Доставка:</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '32%',
          }}
        >
          <View style={styles.redioText}>
            <Text>доставка</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              borderRadius: 50,
              marginRight: 10,
            }}
          >
            <RadioButton
              color="red"
              value="delivery"
              status={checked_1 === 'delivery' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_1('delivery')}
            />
          </View>
          <View style={styles.redioText}>
            <Text>самовызов</Text>
          </View>
          <View
            style={{ borderWidth: 1, borderColor: 'red', borderRadius: 50 }}
          >
            <RadioButton
              color="red"
              value="self"
              status={checked_1 === 'self' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_1('self')}
            />
          </View>
        </View>
        <View style={styles.form}>
          <View style={{ marginTop: 10 }}>
            <TextInput
              placeholder="Адрес доставки*"
              placeholderTextColor={'red'}
              style={styles.input}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '33.3%',
            }}
          >
            <TextInput
              placeholder="дом"
              placeholderTextColor={'red'}
              style={styles.input}
            />
            <TextInput
              placeholder="подъезд"
              placeholderTextColor={'red'}
              style={styles.input}
            />
            <TextInput
              placeholder="кв"
              placeholderTextColor={'red'}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.blockText}>
          <Text style={styles.styleText}>Оплата курьеру:</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '32%',
          }}
        >
          <View style={styles.redioText}>
            <Text>наличными</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              borderRadius: 50,
              marginRight: 10,
            }}
          >
            <RadioButton
              color="red"
              value="cash"
              status={checked_2 === 'cash' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_2('cash')}
            />
          </View>
          <View style={styles.redioText}>
            <Text>картой</Text>
          </View>
          <View
            style={{ borderWidth: 1, borderColor: 'red', borderRadius: 50 }}
          >
            <RadioButton
              color="red"
              value="cart"
              status={checked_2 === 'cart' ? 'checked' : 'unchecked'}
              onPress={() => setChecked_2('cart')}
            />
          </View>
        </View>
        <View style={{ marginTop: 10, marginBottom: 30 }}>
          <TextInput
            placeholder="Комментарий к заказу*"
            placeholderTextColor={'red'}
            style={styles.input}
          />
        </View>
        <View style={styles.blockText}>
          <Text style={styles.styleText}>
            Итого к оплате: <Text style={{ fontSize: 24 }}> 1099 ₽ P </Text>
          </Text>
        </View>
        <Button title="Оформить заказ" />
      </View>
    </ScrollView>
  )
  //   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  input: {
    backgroundColor: '#FFF0F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,

    color: 'red',
    fontSize: 16,
    opacity: 0.4,
    width: '100%',
  },
  blockText: { marginBottom: 20 },
  styleText: { fontSize: 18, fontWeight: 'bold', color: 'red' },
  redioText: {
    justifyContent: 'center',
    marginRight: 10,
  },
})

export default Order
