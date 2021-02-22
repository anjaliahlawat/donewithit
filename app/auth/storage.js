import * as SecureStore from 'expo-secure-store'

const key = 'authToken'

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken)
  } catch (error) {
    console.log(error)
  }
}

const getToken = async () => {
  try {
    return await SecureStore.getItemAsyn(key)
  } catch (error) {
    console.log(error)
  }
}

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key)
  } catch (error) {
    console.log(error)
  }
}

export default { getToken, removeToken, storeToken}