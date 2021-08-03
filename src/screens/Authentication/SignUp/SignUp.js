import React from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import {useFormik} from 'formik';

import HeightSelector from './HeightSelector';
import BirthdaySelector from './BirthdaySelector';

const signupSlides = [{type: 'heightSelect'}, {type: 'birthdaySelect'}];

const {width} = Dimensions.get('window');
const SignUp = () => {
  const {handleChange, handleSubmit, values} = useFormik({
    initialValues: {height: 0, birthday: new Date()},
  });
  const renderItem = (type, index) => {
    if (type === 'heightSelect') {
      return (
        <HeightSelector
          key={index}
          onChange={handleChange('height')}
          selectedValue={values.height}
        />
      );
    } else if (type === 'birthdaySelect') {
      return <BirthdaySelector key={index} />;
    }
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal snapToInterval={width}>
        {signupSlides.map(({type}, index) => {
          return renderItem(type, index);
        })}
      </ScrollView>
    </View>
  );
};

export default SignUp;
