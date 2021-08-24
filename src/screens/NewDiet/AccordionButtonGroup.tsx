import React from 'react';
import {StyleSheetProperties, Text, View, Dimensions} from 'react-native';
import {FormikValues} from 'formik';

import AccordionButton, {
  AccordionButtonProps,
} from './components/AccordionButton/AccordionButton';

// const accordionButton: AccordionButtonProps = {
//   title: 'Intensity',
//   options: [
//     {label: 'Hard', value: 'hard'},
//     {label: 'Medium', value: 'medium'},
//   ],
// };

interface AccordionButtonGroupProps {
  options: {
    title: string;
    value: string;
    options: {label: string; value: string; icon?: string}[] | null;
  }[];
  values: FormikValues;
  fieldName: string;
  fieldQuestion: string;
  onPress: (value: string) => void;
  setFieldValue: (field: string, value: string) => void;
  control: string;
  subFieldName: string;
}
const {width} = Dimensions.get('window');
const AccordionButtonGroup = ({
  options,
  values,
  fieldName,
  fieldQuestion,
  onPress,
  setFieldValue,
  control,
  subFieldName,
}: AccordionButtonGroupProps) => {
  return (
    <View style={{flex: 1, width: width}}>
      <Text>{fieldQuestion}</Text>
      {options.map((option, index) => (
        <AccordionButton
          key={index}
          option={option}
          onPress={value => onPress(value)}
          setFieldValue={setFieldValue}
          control={control}
          subFieldName={subFieldName}
          selected={option.value === values[fieldName] ? true : false}
          values={values}
        />
      ))}
    </View>
  );
};

export default AccordionButtonGroup;
