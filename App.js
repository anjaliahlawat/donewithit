import React, { useState} from 'react'
import {Button, Text } from 'react-native'
import { enableScreens } from 'react-native-screens'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer, useNavigation} from '@react-navigation/native'

import Screen from './app/components/Screen'

enableScreens()

const Link = () => {
  const navigation = useNavigation()
  return(
    <Button 
      title="Click"
      onPress={()=>navigation.navigate('TweetDetails', {id: 1}) }
    />
  )
}

const Tweets = ({ navigation })=> {
  return( 
    <Screen>
      <Text>Tweets</Text>
      <Link />
    </Screen>
  )
}

const TweetDetails =({route})=>{
  //useRouter
  return(
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  )
}

const Stack = createStackNavigator()

const StackNavigator =()=>{
  return (
    <Stack.Navigator initialRouteName="Tweets">
      <Stack.Screen 
        name="Tweets" 
        component={Tweets}
        options={{
          headerStyle:{backgroundColor: 'tomato'},
          headerTintColor:"white"
        }}
      />
      <Stack.Screen 
        name="TweetDetails" 
        component={TweetDetails}
        options={({route})=> ({title: route.params.id})}
      />
    </Stack.Navigator>
  )
}

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
)

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
  <Tab.Navigator 
    tabBarOptions={{ 
      activeBackgroundColor: 'tomato',
      activeTintColor:'white',
      inactiveBackgroundColor:'#eee',
      inactiveTintColor:'black'
    }}
  >
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Tweets} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <TabNavigator />
    </NavigationContainer>
  );
}
