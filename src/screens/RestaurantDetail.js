import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import About from '../component/RestaurantDetail/About';
import MenuItem from '../component/RestaurantDetail/MenuItem';

const RestaurantDetail = () => {
  return (
    <>
      <StatusBar backgroundColor={'black'} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#eeee'}}>
        <About />
        <ScrollView>
          <MenuItem />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
  container: {},
});
