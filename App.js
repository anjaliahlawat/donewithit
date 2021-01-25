import React, {useState} from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

export default function App() {
  const [isNew, setIsNew] = useState(false)

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
  
}
