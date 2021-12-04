import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        
        styles={{
          textInput: {
            borderRadius: 10,
            backgroundColor: '#eeeeee',
            marginTop: 7,
            fontWeight: '700',
            color: 'black',
          },
          textInputContainer: {
            backgroundColor: '#eeee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
            marginBottom: 20,
          },
        }}
        renderLeftButton={() => (
          <View style={styles.leftIcon}>
            <Ionicons name="location-sharp" color="black" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rightIcon}>
            <AntDesign
              name="clockcircle"
              color="black"
              size={11}
              style={{right: 2}}
            />
            <Text>search</Text>
          </View>
        )}
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'YOUR API KEY',
          language: 'en',
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  txtInput: {
    justifyContent: 'center',
    // textAlign: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#eeeeee',
  },
  leftIcon: {
    marginLeft: 10,
  },
  rightIcon: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,
    right: 10,
    alignItems: 'center',
  },
});
