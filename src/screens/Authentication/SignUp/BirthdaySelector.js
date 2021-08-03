import React from 'react';
import {Text, View, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const BirthdaySelector = () => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        width,
        flex: 1,
        paddingTop: height * 0.2,
      }}>
      <Text>Birthday</Text>
    </View>
  );
};

export default BirthdaySelector;
