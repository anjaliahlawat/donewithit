import React, { useState } from 'react';
import { Platform, TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles'
import AppText from './AppText/AppText';
import PickerItem from './PickerItem';

function AppPicker({icon, items, onSelectItem, numberOfColumns=1, PickerItemComponent=PickerItem, placeholder, selectedItem, width="100%"}) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
          {icon && <MaterialCommunityIcons 
                      name={icon}
                      size={20}
                      color={defaultStyles.colors.medium}
                      style={styles.icon}
                  />}
          {selectedItem ? 
            <AppText style={styles.text}>{selectedItem.label}</AppText> 
            : <AppText style={styles.placeholder}>{placeholder}</AppText>}
          <MaterialCommunityIcons 
              name="chevron-down"
              size={20}
              color={defaultStyles.colors.medium}
          />
        </View>
      
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)}/>
        <FlatList 
          data={items}
          keyExtractor={item => item.value.toString()}
          numColumns={numberOfColumns}
          renderItem={({item}) => 
            <PickerItemComponent 
              item={item}  
              label={item.label}
              onPress={()=> {
                setModalVisible(false)
                onSelectItem(item)
              }}
            />
          }
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10
  },
  icon:{
    marginRight: 10,
  },
  placeholder:{
    color: defaultStyles.colors.medium,
    flex: 1
  },
  text:{
    flex: 1
  }
})


export default AppPicker;