import React, { useState} from 'react'
import {Button, Text } from 'react-native'
import {enableScreens} from 'react-native-screens'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer, useNavigation} from '@react-navigation/native'

import Screen from './app/components/Screen'
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'

enableScreens()

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
     <AppNavigator />
    </NavigationContainer>
  );
}
