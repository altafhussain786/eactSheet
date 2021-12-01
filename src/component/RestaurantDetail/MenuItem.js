import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Checkbox} from 'react-native-paper';

const RestaurnetDetail = [
  {
    image_url: require('../../assets/images/splash.png'),
    name: 'Farmhouse Kitchen Thai',
    categories: 'Thai',
    FoodType: 'comfort Food',
    price: '$$19.20',
    cardImg: '',
    rating: 4.5,
    startIcon: '',
    range: '(2912+)',
  },
  {
    name: 'Chicken Biryani',
    image_url: require('../../assets/images/splash.png'),
    categories: 'Thai',
    FoodType: 'comfort Food',
    price: '$$19.20',
    cardImg: '',
    rating: 4.5,
    startIcon: '',
    range: '(2912+)',
  },
  {
    name: 'Beachside Bar',
    image_url: require('../../assets/images/splash.png'),
    categories: 'Thai',
    FoodType: 'comfort Food',
    price: '$$19.20',
    cardImg: '',
    rating: 4.5,
    startIcon: '',
    range: '(2912+)',
  },
  {
    name: 'Beachside Bar',
    image_url: require('../../assets/images/splash.png'),
    categories: 'Thai',
    FoodType: 'comfort Food',
    price: '$$19.20',
    cardImg: '',
    rating: 4.5,
    startIcon: '',
    range: '(2912+)',
  },
  {
    name: 'Beachside Bar',
    image_url: require('../../assets/images/splash.png'),
    categories: 'Thai',
    FoodType: 'comfort Food',
    price: '$$19.20',
    cardImg: '',
    rating: 4.5,
    startIcon: '',
    range: '(2912+)',
  },
  {
    name: 'Beachside Bar',
    image_url: require('../../assets/images/splash.png'),
    categories: 'Thai',
    FoodType: 'comfort Food',
    price: '$19.20',
    cardImg: '',
    rating: 4.5,
    startIcon: '',
    range: '(2912+)',
  },
];

const MenuItem = () => {
  const [checked, setChecked] = React.useState(false);
  const checkBox = () => {
    setChecked(!checked);
  };
  return (
    <View style={styles.container}>
      {RestaurnetDetail.map((data, index) => (
        <View key={index} style={styles.product}>
          <View>
            <Text style={styles.tittle}>{data.name}</Text>
            <View style={{flexDirection: 'row', right: 10, marginTop: 10}}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                color="green"
                onPress={checkBox}
              />
              <Text style={{color: 'black', fontWeight: '900'}}>
                Amazing Pakistani dish{'\n'} with tenderionchicken{'\n'} off the
                sizeles
                <MaterialCommunityIcons name="fire" size={20} color="red" />
              </Text>
            </View>
            <Text
              style={{left: 25, color: 'black', fontWeight: '400', top: 10}}>
              {data.price}
            </Text>
          </View>

          <View>
            <Image source={data.image_url} style={styles.listImg} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 20,
    marginBottom: 10,
  },
  tittle: {
    fontWeight: 'bold',
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
    marginBottom: 10,
    justifyContent: 'space-between',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});
