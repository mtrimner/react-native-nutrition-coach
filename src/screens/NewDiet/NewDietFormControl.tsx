import React from 'react';
import {Text, View} from 'react-native';
import {FormikTouched, FormikErrors, FormikValues} from 'formik';
import {MyFormValues} from './NewDietScreen';

import RadioButtonGroup from './RadioButtonGroup';
import AccordionButtonGroup from './AccordionButtonGroup';

interface NewDietFormControlProps {
  control: string;
  options: {label: string; value: string; selected: boolean; icon: string}[];
  onPress: (field: string, value: string) => void;
  errors: FormikErrors<MyFormValues>;
  touched: FormikTouched<MyFormValues>;
  values: FormikValues;
  prompt: string;
}

const NewDietFormControl = ({
  control,
  options,
  onPress,
  errors,
  touched,
  values,
  prompt,
}: NewDietFormControlProps) => {
  switch (control) {
    case 'goal':
      return (
        <RadioButtonGroup
          options={options}
          onPress={value => onPress(control, value)}
          values={values}
          fieldName={control}
          prompt={prompt}
        />
      );

    case 'field2':
      return <AccordionButtonGroup />;

    case 'field3':
      'field3';
    default:
      return null;
  }
};

export default NewDietFormControl;
