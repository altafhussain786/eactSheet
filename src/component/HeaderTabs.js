import React, {useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const HeaderTabs = () => {
  const [activeTab, setactiveTab] = useState('Delivery'); //box color
  const [tcolor, settColor] = useState('black'); //textColor
  return (
    <View style={styles.container}>
      <View style={styles.contianerItem}>
        <HeaderButton
          text="Delivery"
          btnColor="black"
          txtColor="white"
          activeTab={activeTab}
          setactiveTab={setactiveTab}
        />
        <HeaderButton
          text="Pickup"
          btnColor="white"
          txtColor="black"
          activeTab={activeTab}
          setactiveTab={setactiveTab}
        />
      </View>
    </View>
  );
};

const HeaderButton = props => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.btn,
          {backgroundColor: props.activeTab == props.text ? 'black' : 'white'},
        ]}
        onPress={() => props.setactiveTab(props.text)}>
        <Text
          style={[
            styles.btnTitle,
            {color: props.activeTab == props.text ? 'white' : 'black'},
          ]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  contianerItem: {
    flexDirection: 'row',
    padding: 10,
  },
  btn: {
    alignItems: 'center',
    borderRadius: 10,
    margin: 4,
    paddingHorizontal: 18,
    paddingVertical: 10,
    // backgroundColor: 'black',
  },
  btnTitle: {
    // color: 'white',

    fontWeight: 'bold',
  },
});
