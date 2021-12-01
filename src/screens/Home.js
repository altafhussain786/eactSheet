import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import HeaderTabs from '../component/HeaderTabs';
import SearchBar from '../component/SearchBar';
import Categories from '../component/Categories';
// import RestaurantItem, {localRestaurant} from '../component/RestaurantItem';
import RestaurantItem, {localRestaurant} from '../component/RestaurantItem';

const YELP_API_KEY =
  'fpZrM2DtfGs93jREZ15RoZj2G77g4aovL0pAhUxV355NzEyEkklfk2WNDG677hv-GYsSP3A09JwV9ulhCStbvo2AEXjKF-pPCw_IhqF5n2Y_vduB3PaGGTji-COmYXYx';
const Home = () => {
  const [restaurantData, setrestaurantData] = useState(localRestaurant);
  // const [dummy, setDummy] = useState(null);

  // console.log('API CHECKING DATA===>', dummy);
  const [city, setcity] = useState('San Francisco');
  // console.log(
  //   '=====================>',
  //   restaurantData,
  //   '<======================',
  // );

  const getRestaurantFromYelp = async () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return await fetch(yelpURL, apiOptions)
      .then(res => res.json())
      // .then(data => {
      //   console.log(data);
      // })
      .then(json => setrestaurantData(json.businesses));
  };

  const Data = getRestaurantFromYelp();
  // console.log('=======>FROM APi', Data);

  useEffect(() => {
    getRestaurantFromYelp();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eeee'}}>
      <View style={styles.headrStyle}>
        <HeaderTabs />
      </View>
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restData={restaurantData} name="Altaf" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headrStyle: {
    backgroundColor: '#eeee',
  },
  searchBar: {
    backgroundColor: 'white',
  },
});

// const obj={
//    {"businesses": [{"alias": "farmhouse-kitchen-thai-cuisine-san-francisco", "categories": [Array], "coordinates": [Object], "display_phone": "(415) 814-2920", "distance": 2201.588555604964, "id": "8kck3-K4zYKTJbJko0JlXQ", "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/kUlEaPpv0JGlHG_nrPr7wQ/o.jpg", "is_closed": false, "location": [Object], "name": "Farmhouse Kitchen Thai Cuisine", "phone": "+14158142920", "price": "$$", "rating": 4, "review_count": 2977, "transactions": [Array], "url": "https://www.yelp.com/biz/farmhouse-kitchen-thai-cuisine-san-francisco?adjust_creative=0f6jNwAAIYZYIkoLUh45Gg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=0f6jNwAAIYZYIkoLUh45Gg"}, {"alias": "nopa-san-francisco", "categories": [Array], "coordinates": [Object], "display_phone": "(415) 864-8643", "distance": 1559.1831881623302, "id": "ttarnopezxmp2ROB1N2PaA", "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/yrB1ghsnmlISCIgIP44jGQ/o.jpg", "is_closed": false, "location": [Object], "name": "Nopa", "phone": "+14158648643", "price": "$$$", "rating": 4, "review_count": 5160, "transactions": [Array], "url": "https://www.yelp.com/biz/nopa-san-francisco?adjust_creative=0f6jNwAAIYZYIkoLUh45Gg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=0f6jNwAAIYZYIkoLUh45Gg"}, {"alias": "marufuku-ramen-san-francisco-5", "categories": [Array], "coordinates": [Object], "display_phone": "(415) 872-9786", "distance": 2730.244177861569, "id": "HHtpR0RslupSQ99GIIwW5A", "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/ouK2VmW0SrI70jsJpTxJhw/o.jpg", "is_closed": false, "location": [Object], "name": "Marufuku Ramen", "phone": "+14158729786", "price": "$$", "rating": 4.5, "review_count": 3497, "transactions": [Array], "url": "https://www.yelp.com/biz/marufuku-ramen-san-francisco-5?adjust_creative=0f6jNwAAIYZYIkoLUh45Gg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=0f6jNwAAIYZYIkoLUh45Gg"}, {"alias": "the-snug-san-francisco", "categories": [Array], "coordinates": [Object], "display_phone": "", "distance": 3342.887795851584, "id": "_hOVIgjVRl_HzvLaa65KJg", "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/EfPlwiK6O5HRGrlfyC7f8A/o.jpg", "is_closed": false, "location": [Object], "name": "The Snug", "phone": "", "price": "$$", "rating": 4, "review_count": 284, "transactions": [Array], "url": "https://www.yelp.com/biz/the-snug-san-francisco?adjust_creative=0f6jNwAAIYZYIkoLUh45Gg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=0f6jNwAAIYZYIkoLUh45Gg"}, {"alias": "vico-c
// }
