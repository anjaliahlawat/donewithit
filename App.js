import React, {useState} from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  const [category, setCategory] = useState(categories[0])

  return (
    <LoginScreen />
  );
  
}
