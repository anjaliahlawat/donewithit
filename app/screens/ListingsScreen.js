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

function ListingsScreen({navigation}) {
  const [listings, setListings]=useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    loadListings()
  },[])

  const loadListings = async ()=>{
    setLoading(true)
    const response = await listingApi.getListings()
    setLoading(false)

    if(!response.ok) return setError(true)

    setError(false)
    setListings(response.data)
  }

  return (
    <Screen style={styles.screen}>
        {error && <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadListings}/>
        </>}
        <ActivityIndicator visible={true} />
        {/* <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item})=>
            <Card 
              title={item.title}
              subTitle={"$"+item.price}
              imageUrl={item.images[0].url}
              onPress={()=> navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          }
        /> */}
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