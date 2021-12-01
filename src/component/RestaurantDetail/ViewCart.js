import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ViewCart = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.innerContainer}>
          <Text style={styles.txt}>View Cart</Text>
          <Text style={styles.pricetxt}>$33.70</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 30,
    left: '5%',
    padding: 20,
    borderRadius: 20,
    paddingHorizontal: 90,
    paddingVertical: 5,
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 50,
  },
  txt: {
    fontSize: 30,
    color: 'white',
  },
  pricetxt: {
    fontSize: 15,
    color: 'white',
    left: '100%',
    top: 10,
  },
  innerContainer: {
    flexDirection: 'row',
  },
});
