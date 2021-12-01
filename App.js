import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from './src/theme/theme';
import Home from './src/screens/Home';
import RestaurantDetail from './src/screens/RestaurantDetail';
const App = () => {
  return (
    <View style={styles.container}>
      <Home />

      {/* <RestaurantDetail /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
