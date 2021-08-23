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
}

const NewDietSchema = Yup.object().shape({
  goal: Yup.string().required('Required'),
});

const {width} = Dimensions.get('window');

const NewDietScreen = () => {
  const {handleChange, values, errors, touched, setFieldValue} = useFormik({
    validationSchema: NewDietSchema,
    initialValues: {goal: ''},
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

  console.log(values);

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
            options={field.options}
            onPress={(field, value) => {
              console.log(field, value);
              setFieldValue(field, value);
            }}
            errors={errors}
            touched={touched}
            values={values}
            prompt={field.prompt}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

export default NewDietScreen;
