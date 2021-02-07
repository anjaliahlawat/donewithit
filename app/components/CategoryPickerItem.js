import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import AppText from './AppText/AppText';
import Icon from './Icon';

function CategoryPickerItem({item, onPress}) {
  return (
   <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon 
          backgroundColor={item.backgroundColor} 
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
     <AppText style={styles.label}>{item.label}</AppText>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 27,
    paddingVertical: 15,
    alignItems: "center",
    width: '33%'
  },
  label: {
    marginTop: 5,
    textAlign:"center"
  }
})

export default CategoryPickerItem;