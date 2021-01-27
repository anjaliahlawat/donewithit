import React, { useState } from 'react';
import { Image, Stylesheet } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/Button/Button';
import Screen from '../components/Screen';
import styles from '../config/styles';

function LoginScreen(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return (
    <Screen>
        <Image 
          style={styles.logo}
          source={require('../assets/logo-red.png')} />
        <AppTextInput 
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <AppTextInput 
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setPassword(text)}
          icon="lock"
          secureTextEntry
          placeholder="Password"
        />
        <AppButton title="Login" onPress={() => console.log()}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo:{
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20
  }
})

export default LoginScreen;