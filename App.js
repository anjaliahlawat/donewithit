import React, { useState} from 'react'
import {enableScreens} from 'react-native-screens'
import {NavigationContainer, useNavigation} from '@react-navigation/native'

import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'
import OfflineNotice from './app/components/OfflineNotice'

enableScreens()

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
      </NavigationContainer>
    </>
  );
}
