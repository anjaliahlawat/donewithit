import React, { useState} from 'react';
import {View } from 'react-native';

import Screen from './app/components/Screen';
import ImageInputList from './app/components/ImageInputList';

export default function App() {
  const [imageUris, setImageUris] = useState([])

  const handleAdd = uri => {
    setImageUris([...imageUris, uri])
  }

  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  }

  return (
    <Screen>
      <ImageInputList 
        imageUri={image} 
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}
