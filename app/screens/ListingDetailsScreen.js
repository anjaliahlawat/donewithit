import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache'

import AppText from '../components/AppText/AppText';
import ListItem from '../components/ListItem';
import ContactSellerForm from '../components/ContactSellerForm';

import colors from '../config/colors'

function ListingDetailsScreen({route}) {
  const listing = route.params

  return (
    <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
        <Image 
          style={styles.image}
          preview={{uri: listing.images[0].thumbailUrl}}
          tint="light"
          uri={listing.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem 
              image={require("../assets/mosh.jpg")}
              title="Mosh Hamedani"
              subTitle=" 5 Listings"
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer : {
      padding : 20
  },
  image :{
     width : "100%",
     height : 300
  },
  price :{
    color : colors.secondary,
    fontWeight: "bold",
    fontSize:20,
    marginVertical : 10
  },
  title : {
    fontSize : 24,
    fontWeight : "500",    
  },
  userContainer : {
    marginVertical : 40
  }
})

export default ListingDetailsScreen;