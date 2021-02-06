import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ImageInput({imageUri, onChangeImage}) {

  useEffect(()=>{
    requestPermission()
  },[])

  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    if(!granted)
      alert('You need to enable permission to access the lib')
  }

  const handlePress =()=>{
    if(!imageUri)
      selectImage()
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [{text: 'Yes', onPress:()=> onChangeImage(null)},{text: 'No'}])
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      })
      if(!result.cancelled)
        onChangeImage(result.uri)

    } catch (error) {
      console.log(error)
    }   
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name="camera" color={colors.medium} size={35}/>}
        {imageUri && <Image source={{uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow:'hidden',
    width: 100
  },
  image:{
     width: '100%', 
     height: "100%"
  }
})

export default ImageInput;