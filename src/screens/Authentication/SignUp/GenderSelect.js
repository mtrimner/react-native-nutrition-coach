import React from 'react';
import {View, Text, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const GenderSelect = () => {
  return (
    <View
      style={{
        backgroundColor: 'orange',
        width,
        flex: 1,
        paddingTop: height * 0.2,
      }}>
      <Text>Gender Select</Text>
    </View>
  );
};

export default GenderSelect;
