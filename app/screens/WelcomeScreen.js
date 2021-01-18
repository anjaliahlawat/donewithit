import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/Button/Button';

function WelcomeScreen(props) {
  const handleButton = ()=>{
    console.log("tapped")
  }
  return (
    <ImageBackground 
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
          <Text>Sell What You Don't Need</Text>      
      </View>
      <AppButton title="LOGIN" onPress={handleButton}/>
      <AppButton title="REGISTER" onPress={handleButton}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background :{
     flex : 1,
     justifyContent: "flex-end",
     alignItems : "center"
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems:"center"
  },
  logo:{
    width : 100,
    height : 100,
  }
})

export default WelcomeScreen;