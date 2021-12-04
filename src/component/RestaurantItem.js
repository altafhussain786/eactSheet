import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export const localRestaurant = [
  {
    name: 'Chicken Biryani',
    image_url:
      'https://i0.wp.com/www.restaurantmenu.pk/wp-content/uploads/2020/02/food-centre.jpg?resize=800%2C613',
    rating: 4.5,
  },
  {
    name: 'Beachside Bar',
    image_url:
      'https://www.brandsynario.com/wp-content/uploads/2019/02/7-fast-food-joints.jpg',
    rating: 3.3,
  },
  {
    name: 'Beachside Bar',
    image_url:
      'https://www.gospark.pk/blog/wp-content/uploads/2019/09/Pizza-Fries.png',
    rating: 4,
  },
  {
    name: 'Beachside Bar',
    image_url:
      'https://lh3.googleusercontent.com/proxy/HxBVDD1M_ixFflFIl9d_TM7eoHEF8RDUvGjOBXAHniYfCaOkbchUxmH55F48_LivdPyXLocHZVEbWBFFUt9glWwB5EeeqTkSSI36iezJDUYGwBfneMq3vav82TjlGuZhzYeCXotvJruP-lrRFg',
    rating: 3,
  },
  {
    name: 'Beachside Bar',
    image_url:
      'https://i0.wp.com/www.restaurantmenu.pk/wp-content/uploads/2020/02/food-centre.jpg?resize=800%2C613',
    rating: 4.4,
  },
];

const RestaurantItem = props => {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
      {props.restData.map((item, index) => (
        <View key={index} style={styles.container}>
          <RestaurnantImage image={item.image_url} />
          <RestaurnantInfo name={item.name} rating={item.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
};

const RestaurnantImage = props => {
  const [color, setcolor] = useState('white');
  return (
    <>
      <Image style={styles.imgstyle} source={{uri: props.image}} />
      <TouchableOpacity
        onPress={() => setcolor('red')}
        style={styles.heartStyle}>
        <Entypo name="heart" size={35} color={color} />
      </TouchableOpacity>
    </>
  );
};

const RestaurnantInfo = props => {
  return (
    <>
      <View style={styles.infoStyle}>
        <View>
          <Text style={styles.tittle}>{props.name}</Text>
          <Text style={styles.timetxt}>35-45 .min</Text>
        </View>
        <View>
          <View style={styles.rattingContainer}>
            <Text style={styles.rattingtxt}>{props.rating}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  imgstyle: {width: '100%', height: 180},
  tittle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    padding: 3,
  },
  timetxt: {
    bottom: 5,
    left: 5,
  },
  rattingContainer: {
    backgroundColor: '#eee',
    borderRadius: 30,
    justifyContent: 'center',
    top: 15,
    padding: 5,
  },
  rattingtxt: {
    fontWeight: 'bold',
    color: 'black',
  },
  heartStyle: {
    position: 'absolute',
    right: 30,
    top: 10,
  },
  infoStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
