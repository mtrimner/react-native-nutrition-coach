import React, {useRef} from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import {Formik, useFormikContext, useFormik} from 'formik';

import HeightSelector from './HeightSelector';
import BirthdaySelector from './BirthdaySelector';

const signupSlides = [{type: 'heightSelect'}, {type: 'birthdaySelect'}];

const {width} = Dimensions.get('window');
const SignUp = () => {
  const scroll = useRef();

  const {handleChange, values, touched} = useFormik({
    initialValues: {height: 0, dob: new Date()},
  });

  const renderItem = (type, index) => {
    if (type === 'heightSelect') {
      return (
        <HeightSelector
          key={index}
          onChange={handleChange('height')}
          selectedValue={values.height}
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
          onChange={handleChange('dob')}
        />
      );
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
