import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <View>
          <Text style={styles.tittle}>Tandori Chicken</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>CheckBOx</Text>
            <Text>
              Amazing Pakistani dish{'\n'} with tenderionchicken{'\n'} off the
              sizeles
              <MaterialCommunityIcons name="fire" size={20} color="red" />
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/images/splash.png')}
            style={styles.listImg}
          />
        </View>
      </View>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  tittle: {
    fontWeight: '600',
    color: 'black',
    fontSize: 17,
  },
  listImg: {
    height: 120,
    width: 70,

    resizeMode: 'contain',
    borderRadius: 20,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
