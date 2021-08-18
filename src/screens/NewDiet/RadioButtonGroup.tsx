import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import RadioButton from './components/RadioButton';

export interface RadioButtonGroupProps {
  options: {label: string; value: string; selected: boolean; icon: string}[];
  onPress: () => void;
}

const {width} = Dimensions.get('window');

const RadioButtonGroup = ({options, onPress}: RadioButtonGroupProps) => {
  // console.log(options);
  return (
    <View style={{width: width}}>
      {options.map((option, index) => {
        return (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}>
            <RadioButton
              key={index}
              label={option.label}
              onPress={onPress}
              selected={option.selected}
              icon={option.icon}
            />
          </View>
        );
      })}
    </View>
  );
};

export default RadioButtonGroup;
