import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import RestaurantDetail from '../screens/RestaurantDetail';
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
