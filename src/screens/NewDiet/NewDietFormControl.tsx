import React from 'react';
import {Text, View} from 'react-native';
import {FormikTouched, FormikErrors, FormikValues} from 'formik';
import {MyFormValues} from './NewDietScreen';

import RadioButtonGroup from './RadioButtonGroup';
import AccordionButtonGroup from './AccordionButtonGroup';
import {exerciseSelect, goal} from './constants/formFields';

interface NewDietFormControlProps {
  control: string;
  onPress: (field: string, value: string) => void;
  errors: FormikErrors<MyFormValues>;
  touched: FormikTouched<MyFormValues>;
  values: FormikValues;
  fieldQuestion: string;
  // title?: string;
  setFieldValue: (field: string, value: any) => void;
}

const NewDietFormControl = ({
  control,
  onPress,
  errors,
  touched,
  values,
  fieldQuestion,
  setFieldValue,
}: NewDietFormControlProps) => {
  switch (control) {
    case 'goal':
      return (
        <RadioButtonGroup
          options={goal.options}
          onPress={value => onPress(control, value)}
          values={values}
          fieldName={control}
          fieldQuestion={fieldQuestion}
        />
      );

    case 'exercise':
      return (
        <AccordionButtonGroup
          options={exerciseSelect}
          values={values}
          fieldName={control}
          subFieldName="exerciseIntensity"
          fieldQuestion={fieldQuestion}
          onPress={value => onPress(control, value)}
          setFieldValue={setFieldValue}
          control={control}
        />
      );

    case 'field3':
      'field3';
    default:
      return null;
  }
};

export default NewDietFormControl;
