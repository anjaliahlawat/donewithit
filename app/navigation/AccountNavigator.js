import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';

const Stack = createStackNavigator()

const AccountNavigator = () =>(
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessageScreen}/>
  </Stack.Navigator>
)

export default AccountNavigator