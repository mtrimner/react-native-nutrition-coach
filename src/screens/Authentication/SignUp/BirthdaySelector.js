import React from 'react';
import {Text, View, Dimensions} from 'react-native';

import DatePicker from '../../../components/DatePicker';

const {height, width} = Dimensions.get('window');

const BirthdaySelector = ({value, onChange}) => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        width,
        flex: 1,
        paddingTop: height * 0.2,
      }}>
      <Text>Birthday</Text>
      <DatePicker value={value} onChange={onChange} />
    </View>
  );
};

export default BirthdaySelector;
