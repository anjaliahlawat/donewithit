import React, {useState} from 'react';
import { Text, TextInput, View } from 'react-native';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessageScreen from './app/screens/MessageScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  const [firstName, setFirstName] = useState('')

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput 
        onChangeText={text=> setFirstName(text)} 
        placeholder="First Name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1
        }}
      />
    </Screen>
  );
  
}
