import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import colors from '../config/colors';
import listingApi from '../api/listings';
import routes from '../navigation/Routes'
import Screen from '../components/Screen';
import AppText from '../components/AppText/AppText';
import AppButton from '../components/Button/Button';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({navigation}) {
  const {data: listings, error, loading, request: loadListings} = useApi(listingApi.getListings)

  useEffect(()=>{
    loadListings()
  },[])

  return (
    <Screen style={styles.screen}>
        {error && <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadListings}/>
        </>}
        <ActivityIndicator visible={loading} />
        <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item})=>
            <Card 
              title={item.title}
              subTitle={"$"+item.price}
              imageUrl={item.images[0].url}
              onPress={()=> navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          }
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 20,
    backgroundColor: colors.light
  }
})

export default ListingsScreen;