import React, { useState} from 'react'
import {enableScreens} from 'react-native-screens'
import {NavigationContainer, useNavigation} from '@react-navigation/native'

import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'
import OfflineNotice from './app/components/OfflineNotice'
import AuthNavigator from './app/navigation/AuthNavigator'
import AuthContext from './app/auth/context'

enableScreens()

export default function App() {
  const [user, setUser] = useState()
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator /> }
      </NavigationContainer>
    </AuthContext.Provider>
    
  );
}
