import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';

const RestaurnetDetail = [
  {
    image_url:
      'https://i0.wp.com/www.restaurantmenu.pk/wp-content/uploads/2020/02/food-centre.jpg?resize=800%2C613',
    name: 'Farmhouse Kitchen Thai',
    categories: 'Thai',
    FoodType: 'comfort Food',
    price: '$$',
    cardImg: '',
    rating: 4.5,
    startIcon: '',
    range: '(2912+)',
  },
];

const About = props => {
  return (
    <View style={styles.container}>
      <RestaurantImage />
      <RestaurantDetail />
    </View>
  );
};

const RestaurantImage = props => {
  return (
    <Image
      source={require('../../assets/images/bg1.jpg')}
      style={styles.pimg}
    />
  );
};
const RestaurantDetail = () => {
  return (
    <View>
      <Text style={styles.tittlestyle}>Farmhouse Kitchen Thai</Text>
      <View style={styles.shrtDescription}>
        <Text style={styles.txtdesc}>Thai . ComfortFood . $$ .</Text>

        <MaterialCommunityIcons
          style={styles.iconStyle}
          name="credit-card"
          size={20}
          color="black"
        />

        <Text
          style={[styles.txtdesc, {fontSize: 17, left: 5, marginRight: 10}]}>
          .4
        </Text>
        <MaterialCommunityIcons
          name="star"
          size={20}
          style={styles.iconStyle}
          color="yellow"
        />
        <Text style={[styles.txtdesc, {fontSize: 17, left: 5}]}>(2912+)</Text>
      </View>
    </View>
  );
};
export default About;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',

    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  pimg: {
    width: '100%',

    // resizeMode: 'contain',
  },
  tittlestyle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
    padding: 5,
  },
  shrtDescription: {
    flexDirection: 'row',
    padding: 5,
  },
  txtdesc: {
    fontWeight: '600',
    color: 'black',
    bottom: 5,
  },
  iconStyle: {
    bottom: 5,
    // left: 10,
  },
});
