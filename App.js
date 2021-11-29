import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from './src/theme/theme';
import Home from './src/screens/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
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
