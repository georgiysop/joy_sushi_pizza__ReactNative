import NetInfo from '@react-native-community/netinfo'

export const checkConnected = () => {
  NetInfo.fetch().then((state) => {
    return state.isConnected
  })
}
