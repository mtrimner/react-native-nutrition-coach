import React, {useRef} from 'react';
import {Text, View, ScrollView, Dimensions} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useDerivedValue,
} from 'react-native-reanimated';

import NewDietFormControl from './NewDietFormControl';
import {formFields} from './constants/formFields';

export interface MyFormValues {
  goal: string;
  exercise: string;
  exerciseIntensity: string;
}

const NewDietSchema = Yup.object().shape({
  goal: Yup.string().required('Required'),
  exercise: Yup.string().required('Required'),
  exerciseIntensity: Yup.string().when('exercise', {
    is: (value: string) => value !== 'none',
    then: Yup.string().required('Select exercise intensity'),
    otherwise: Yup.string(),
  }),
});

const {width} = Dimensions.get('window');

const NewDietScreen = () => {
  const {handleChange, values, errors, touched, setFieldValue} = useFormik({
    validationSchema: NewDietSchema,
    initialValues: {goal: '', exercise: '', exerciseIntensity: 'none'},
    onSubmit: values => console.log('values'),
  });

  const scroll = useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset}) => {
      x.value = contentOffset.x;
    },
  });
  const currentIndex = useDerivedValue(() => x.value / width);
  return (
    <Animated.ScrollView
      horizontal
      snapToInterval={width}
      ref={scroll}
      scrollEnabled={true}
      onScroll={onScroll}
      scrollEventThrottle={50}
      bounces={false}>
      {formFields.map((field, index) => {
        return (
          <NewDietFormControl
            key={index}
            control={field.control}
            onPress={(field, value) => {
              setFieldValue(field, value);
            }}
            errors={errors}
            touched={touched}
            values={values}
            fieldQuestion={field.fieldQuestion}
            setFieldValue={setFieldValue}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

export default NewDietScreen;
