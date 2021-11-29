import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import HeaderTabs from '../component/HeaderTabs';
import SearchBar from '../component/SearchBar';
import Categories from '../component/Categories';
import RestaurantItem from '../component/RestaurantItem';
const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eeee'}}>
      <View style={styles.headrStyle}>
        <HeaderTabs />
      </View>
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItem />
        <RestaurantItem />
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
