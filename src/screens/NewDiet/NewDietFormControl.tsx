import React from 'react';
import {Text, View} from 'react-native';

import RadioButtonGroup from './RadioButtonGroup';

interface NewDietFormControlProps {
  control: string;
  options: {label: string; value: string; selected: boolean; icon: string}[];
  onPress: () => void;
}

const NewDietFormControl = ({
  control,
  options,
  onPress,
}: NewDietFormControlProps) => {
  switch (control) {
    case 'field1':
      return <RadioButtonGroup options={options} onPress={onPress} />;

    case 'field2':
      return <Text>field2</Text>;

    case 'field3':
      'field3';
    default:
      return null;
  }
};

export default NewDietFormControl;
