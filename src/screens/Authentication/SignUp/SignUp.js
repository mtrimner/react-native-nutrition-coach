import React, {useRef} from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import {Formik, useFormikContext, useFormik} from 'formik';
import * as yup from 'yup';
import differenceInYears from 'date-fns/differenceInYears';

import HeightSelector from './HeightSelector';
import BirthdaySelector from './BirthdaySelector';
import GenderSelect from './GenderSelect';

const signupSlides = [
  {type: 'heightSelect'},
  {type: 'birthdaySelect'},
  {type: 'genderSelect'},
];

const SignUpSchema = yup.object().shape({
  height: yup
    .number()
    .min(120, 'Please select height')
    .required('Please select height'),
  dob: yup
    .date()
    .nullable()
    .test(
      'dob',
      'Must be over 16',
      value => differenceInYears(new Date(), new Date(value)) >= 16,
    ),
});

const {width} = Dimensions.get('window');
const SignUp = () => {
  const scroll = useRef();

  const {handleChange, values, errors, touched} = useFormik({
    validationSchema: SignUpSchema,
    initialValues: {height: 0, dob: new Date()},
  });

  const renderItem = (type, index) => {
    if (type === 'heightSelect') {
      return (
        <HeightSelector
          key={index}
          onChange={handleChange('height')}
          selectedValue={values.height}
          error={errors.height}
          touched={touched.email}
          onPress={() =>
            scroll.current.scrollTo({
              x: width * (index + 1),
              animated: true,
            })
          }
        />
      );
    } else if (type === 'birthdaySelect') {
      return (
        <BirthdaySelector
          key={index}
          value={values.dob}
          error={errors.dob}
          touched={touched.dob}
          onChange={handleChange('dob')}
        />
      );
    } else if (type === 'genderSelect') {
      return <GenderSelect />;
    }
  };
  console.log(values);
  return (
    <View style={{flex: 1}}>
      <ScrollView
        horizontal
        snapToInterval={width}
        ref={scroll}
        bounces={false}>
        {signupSlides.map(({type}, index) => {
          return renderItem(type, index, handleChange, values);
        })}
      </ScrollView>
    </View>
  );
};

export default SignUp;
