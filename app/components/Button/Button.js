import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../config/colors';

function AppButton({title, onPress, color="primary"}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
          <Text style={styles.text}>{title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor : colors.primary,
    borderRadius: 25,
    width : "100%",
    padding : 15,
    justifyContent : 'center',
    alignItems : 'center',
    marginVertical : 10
  },
  text :{
    color : colors.white,
    fontSize : 18,
    textTransform : 'uppercase'
  }
})

export default AppButton;