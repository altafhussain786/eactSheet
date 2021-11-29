import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';

const items = [
  {
    imageUrl: require('../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    imageUrl: require('../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    imageUrl: require('../assets/images/bread.png'),
    text: 'Bakery items',
  },
  {
    imageUrl: require('../assets/images/fast-food.png'),
    text: 'Fast Food',
  },
  {
    imageUrl: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
  {
    imageUrl: require('../assets/images/coffee.png'),
    text: 'Coffee',
  },
  {
    imageUrl: require('../assets/images/deals.png'),
    text: 'Deals',
  },
];

const Categories = () => {
  return (
    <View style={styles.conitainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Loop */}
        {items.map((item, index) => (
          <View style={styles.product}>
            <Image
              source={item.imageUrl}
              style={{height: 40, width: 50, resizeMode: 'contain'}}
            />
            <Text style={styles.textStyle}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  conitainer: {
    marginTop: 7,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'black',
  },
  product: {
    alignItems: 'center',
    marginRight: 30,
  },
});
