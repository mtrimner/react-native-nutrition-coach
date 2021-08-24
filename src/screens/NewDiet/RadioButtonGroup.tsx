import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {FormikValues} from 'formik';

import RadioButton from './components/RadioButton';

export interface RadioButtonGroupProps {
  options: {label: string; value: string; selected: boolean; icon: string}[];
  onPress: (value: string) => void;
  values: FormikValues;
  fieldName: string;
  fieldQuestion: string;
}

const {width} = Dimensions.get('window');

const RadioButtonGroup = ({
  options,
  onPress,
  values,
  fieldName,
  fieldQuestion,
}: RadioButtonGroupProps) => {
  // console.log(options);
  return (
    <View style={{width: width}}>
      <Text>{fieldQuestion}</Text>
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
              buttonValue={option.value}
              onPress={() => onPress(option.value)}
              selected={option.value === values[fieldName] ? true : false}
              icon={option.icon}
            />
          </View>
        );
      })}
    </View>
  );
};

export default RadioButtonGroup;
