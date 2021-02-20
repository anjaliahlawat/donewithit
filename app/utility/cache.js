import { AsyncStorage } from 'react-native';
import moment from 'moment';

const prefix = 'cache'
const expiryInMinutes = 5

const store = async (key, value) => {
  try {
    const item  ={
      value,
      timestamp: Date.now()
    }
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    
  } catch (error) {
    
  }
}

const isExpired = item => {
  const now = moment(Date.now())
  const storedTime = moment(item.timestamp)
  return now.diff(storedTime, 'minutes') > expiryInMinutes
}

const get = async(key, value) => {
  try {
    const result = await AsyncStorage.getItem(prefix + key)
    JSON.parse(value)

    if(!item) return null

    if(isExpired(item)){
      await AsyncStorage.removeItem(prefix + key)
      return null
    }

    return item.value
    
  } catch (error) {
    console.log(error)
  }
}

export default {
  store,
  get
}