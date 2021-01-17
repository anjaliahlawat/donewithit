import React from 'react';
import { View } from 'react-native';
import styles from './styles';

function Button({children}) {
  return (
   <View style={styles.button}>
       {children.text}
   </View>
  );
}

export default Button;