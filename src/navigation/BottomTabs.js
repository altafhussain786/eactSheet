import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <Icons icon="home" txt="home" />
      <Icons icon="search" txt="Browse" />
      <Icons icon="shopping-bag" txt="Grocery" />
      <Icons icon="receipt" txt="Order" />
      <Icons icon="user" txt="Account" />
    </View>
  );
};

const Icons = props => {
  return (
    <TouchableOpacity>
      <View style={styles.iconCont}>
        <FontAwesome5
          name={props.icon}
          style={styles.iconStyle}
          color="black"
          size={30}
        />
        <Text>{props.txt}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: 'center',
  },
  iconCont: {
    // height: 10,
  },
});
