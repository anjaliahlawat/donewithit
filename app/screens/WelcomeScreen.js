import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/Button/Button';

function WelcomeScreen(props) {
  const handleButton = ()=>{
    console.log("tapped")
  }
  return (
    <ImageBackground 
      blurRadius={2}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
          <Text style={styles.tagline}>Sell What You Don't Need</Text>      
      </View>
      <View style={styles.buttonContainer}>
          <AppButton title="LOGIN" onPress={handleButton}/>
          <AppButton title="REGISTER" onPress={handleButton} color="secondary"/>
      </View>
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
  },
  buttonContainer: {
     padding : 20,
     width : "100%",
  },
  tagline : {
    fontSize : 25,
    fontWeight : "600",
    paddingVertical : 20
  }
})

export default WelcomeScreen;