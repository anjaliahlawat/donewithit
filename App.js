import React, {useState} from 'react'
import {enableScreens} from 'react-native-screens'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import AppLoading from 'expo-app-loading'

import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage'
import navigationTheme from './app/navigation/navigationTheme'
import { navigationRef } from './app/navigation/rootNavigation'
import OfflineNotice from './app/components/OfflineNotice'

enableScreens()

export default function App() {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async ()=> {
    const user = await authStorage.getUser()
    if(user) setUser(user) 
  }

  if(!isReady)
    return <AppLoading startAsync={restoreUser} onFinish={()=> setIsReady(true)} onError={console.warn}/>

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator /> }
      </NavigationContainer>
    </AuthContext.Provider>  
  );
}
