import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight} from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log('clicked')
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native. Welcome back</Text>
      <TouchableHighlight>
        <Image source={{
          width: 200,
          height: 200,
          uri : "https://picsum.photos/200/300"}} />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
