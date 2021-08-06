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
      <Text style={{paddingHorizontal: 25, fontSize: 18, paddingBottom: 5}}>
        When were you born?
      </Text>
      <View style={{paddingHorizontal: 25}}>
        <DatePicker value={value} onChange={onChange} />
      </View>
    </View>
  );
};

export default BirthdaySelector;
