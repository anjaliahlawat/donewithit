import React from 'react';
import { StyleSheet, Text } from 'react-native';

function AppText({children, style}) {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text:{
    color : "black",
    fontSize : 18,
    fontFamily :"Roboto"
  }
})

export default AppText;