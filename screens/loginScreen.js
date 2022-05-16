import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase'
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native'
import { ButtonGoogle, ButtonFacebook } from '../components/CustomButton'

const Pizza25 = [
  {
    id: '3690835',
    category_id: '15161',
    name: '4 Вкуса 25 см',
    description:
      'Томатный соус, сыр Моцарелла, куриная грудка, грибы Шампиньоны, Ветчина, Бекон, Пепперони, соус барбекю, сырный соус',
    price: 289,
    picture:
      'https://dlvry.ru/upload/resize_cache/iblock/b39/900_900_1/l_jq_5.jpg',
  },
  {
    id: '3690921',
    category_id: '15161',
    name: 'Американский завтрак 25 см',
    description:
      'Томатный соус, сыр Моцарелла, ветчина, бекон, томат, картофель фри, яйцо куриное, соус Цезарь',
    price: 289,
    picture:
      'https://dlvry.ru/upload/resize_cache/iblock/fa2/900_900_1/l_jq_4.jpg',
  },
  {
    id: '2590585',
    category_id: '15161',
    name: 'Бургер пицца 25 см',
    description:
      'Томатный соус, ветчина, бекон, сыр Моцарелла, шампиньоны, корнишоны, томаты, соус барбекю',
    price: 289,
    picture:
      'https://dlvry.ru/upload/resize_cache/iblock/c72/900_900_1/burger.png.jpg',
  },
  {
    id: '2590598',
    category_id: '15161',
    name: 'Гавайская 25 см',
    description: 'Томатный соус, сыр Моцарелла, ветчина, ананас',
    price: 249,
    picture: 'https://dlvry.ru/upload/iblock/c94/gavayskaya.jpg',
  },
  {
    id: '3690893',
    category_id: '15161',
    name: 'Деревенская 25 см',
    description:
      'Томатный соус, сыр Моцарелла, маринованный красный лук, ветчина, бекон, охотничьи колбаски, карнишоны, соус барбекю',
    price: 289,
    picture:
      'https://dlvry.ru/upload/resize_cache/iblock/5ca/900_900_1/2558628_1637144860.6377_original.jpg',
  },
  {
    id: '2590607',
    category_id: '15161',
    name: 'Джульетта 25 см',
    description: 'Чесночный соус, сыр Моцарелла, шампиньоны, укроп',
    price: 219,
    picture: 'https://dlvry.ru/upload/iblock/7c1/dzhuleta.jpg',
  },
  {
    id: '2590613',
    category_id: '15161',
    name: 'Диабло 25 см',
    description:
      'Томатный соус, сыр Моцарелла, охотничьи колбаски, халапеньо, перец Чилли, томаты, курица',
    price: 269,
    picture: 'https://dlvry.ru/upload/iblock/8e1/diablo2.jpg',
  },
  {
    id: '2590619',
    category_id: '15161',
    name: 'Манхеттен 25 см',
    description:
      'Томатный соус, сыр Моцарелла, шампиньоны, маслины, томаты, пепперони',
    price: 259,
    picture:
      'https://dlvry.ru/upload/resize_cache/iblock/427/900_900_1/mankhetten.jpg',
  },
  {
    id: '2590623',
    category_id: '15161',
    name: 'Маргарита 25 см',
    description: 'Томатный соус, сыр Моцарелла , томаты',
    price: 249,
    picture:
      'https://dlvry.ru/upload/resize_cache/iblock/aad/900_900_1/margarita.jpg',
  },
  {
    id: '2590643',
    category_id: '15161',
    name: 'Мясная 25 см',
    description:
      'Томатный соус, курица, ветчина, колбаса пк, сыр Моцарелла, пепперони, томаты',
    price: 269,
    picture:
      'https://dlvry.ru/upload/resize_cache/iblock/da7/900_900_1/myasnaya.jpg',
  },
  {
    id: '2590657',
    category_id: '15161',
    name: 'Пепперони 25 см',
    description: 'Томатный соус, сыр Моцарелла, пепперони',
    price: 299,
    picture:
      'https://dlvry.ru/upload/resize_cache/iblock/f3b/900_900_1/pepperoni.jpg',
  },
  {
    id: '3690783',
    category_id: '15161',
    name: 'Ранчо 25 см',
    description:
      'Томатный соус, сыр Моцарелла, охотничьи колбаски, перец Болгарский, томаты, корнишоны, сырный соус',
    price: 269,
    picture: 'https://dlvry.ru/upload/iblock/c62/l_jq_3_min.jpg',
  },
  {
    id: '2590673',
    category_id: '15161',
    name: 'Салями 25 см',
    description:
      'Томатный соус, колбаса пк, сыр Моцарелла, ветчина, маслины, шампиньоны, колбаски охотничьи, лук зеленый',
    price: 269,
    picture:
      'https://dlvry.ru/upload/resize_cache/iblock/b1e/900_900_1/salyami.jpg',
  },
  {
    id: '3691172',
    category_id: '15161',
    name: 'Спайси Хот 25 см',
    description:
      'Томатный соус, сыр Моцарелла, Пепперони, спайси соус, курица, болгарский перец, перец халапенью',
    price: 269,
    picture:
      'https://dlvry.ru/upload/resize_cache/iblock/681/900_900_1/2558639_1637145039.649_original.jpg',
  },
  {
    id: '2590678',
    category_id: '15161',
    name: 'Цезарь 25 см',
    description:
      'Томатный соус, микс салатов, томаты, сыр Моцарелла, курица, соус Цезарь, сыр Пармезан',
    price: 259,
    picture:
      'https://dlvry.ru/upload/resize_cache/iblock/295/900_900_1/tsezar.jpg',
  },
  {
    id: '2590697',
    category_id: '15161',
    name: 'Чикен  Чиз 25 см',
    description:
      'Томатный соус, курица, бекон, сыр Моцарелла, томаты, сырный соус',
    price: 269,
    picture:
      'https://dlvry.ru/upload/resize_cache/iblock/d81/900_900_1/chiken2.jpg',
  },
]
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('all')
      }
    })
    return unsubscribe
  }, [])

  const now = new Date()

  const handleSingUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log('Зарегистрирован: ', user.email)
        return db
          .collection('users')
          .doc(userCredentials.user.uid)
          .set({
            email: email,
            name: '',
            phone: '',
            street: '',
            house: '',
            pod: '',
            kv: '',
            createdAt: now,
          })
      })
      .catch((error) => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log('в системе: ', user.email)
      })
      .catch((error) => alert(error.message))
  }

  const addCol = () => {
    Pizza25.forEach(function(obj) {
      return db
        .collection('Пицца25')
        .doc()
        .set({
          id: obj.id,
          category_id: obj.category_id,
          name: obj.name,
          description: obj.description,
          price: obj.price,
          picture: obj.picture,
        })
        .then(function(docRef) {
          console.log('Document written with ID: ')
        })
        .catch(function(error) {
          console.error('Error adding document: ', error)
        })
    })
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inputcontainer} beha>
        <TextInput
          placeholder="email"
          placeholderTextColor={'red'}
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor={'red'}
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>
        {/* <Button
          title="Добавить товары"
        onPress={addCol}
        /> */}
        <TouchableOpacity
          onPress={handleSingUp}
          style={[styles.button, styles.buttonOutLine]}
        >
          <Text style={styles.buttonOutLineText}>Регистрация</Text>
        </TouchableOpacity>
        <View>
          <ButtonGoogle title="авторизироваться через   " />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputcontainer: { width: '80%' },
  input: {
    backgroundColor: '#FFF0F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    // borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    color: 'red',
    fontSize: 16,
    opacity: 0.4,
  },
  buttoncontainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'red',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutLine: {
    backgroundColor: '#fff',
    marginTop: 5,
    borderColor: 'red',
    borderWidth: 1,
  },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  buttonOutLineText: { color: 'red', fontWeight: '700', fontSize: 16 },
})
