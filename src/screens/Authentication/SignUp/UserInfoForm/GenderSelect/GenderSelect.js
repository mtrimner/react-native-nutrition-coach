import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import RadioButton from './RadioButton';

const {height, width} = Dimensions.get('window');

const RadioItems = [
  {label: 'Male', value: 'male', selected: false, icon: 'male-outline'},
  {label: 'Female', value: 'female', selected: false, icon: 'female-outline'},
];

const changeActiveButton = index => {
  RadioItems.map(item => (item.selected = false));
  RadioItems[index].selected = true;
};

const GenderSelect = () => {
  return (
    <View>
      <Text>Gender Select</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {RadioItems.map((item, index) => (
          <RadioButton
            key={index}
            label={item.label}
            selected={item.selected}
            icon={item.icon}
          />
        ))}
      </View>
    </View>
  );
};

export default GenderSelect;
