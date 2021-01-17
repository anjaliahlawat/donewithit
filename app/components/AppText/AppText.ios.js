import React from 'react';
import { StyleSheet, Text } from 'react-native';

function AppText({children}) {
  return (
    <Text style={StyleSheet.text}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text:{
    color : "tomato",
    fontSize : 20,
    fontFamily :"Avenir"
  }
})

export default AppText;