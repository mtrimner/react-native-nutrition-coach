import React from 'react';
import {View} from 'react-native';

interface NewDietFormControlProps {
  control: string;
}

const NewDietFormControl = ({control, ...props}: NewDietFormControlProps) => {
  switch (control) {
    case 'field1':
      'field1';
    case 'field2':
      'field2';
    case 'field3':
      'field3';
    default:
      return null;
  }
};

export default NewDietFormControl;
