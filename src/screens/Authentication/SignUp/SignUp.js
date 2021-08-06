import React from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import {Formik} from 'formik';

import HeightSelector from './HeightSelector';
import BirthdaySelector from './BirthdaySelector';

const signupSlides = [{type: 'heightSelect'}, {type: 'birthdaySelect'}];

const {width} = Dimensions.get('window');
const SignUp = () => {
  //   const {handleChange, handleSubmit, values} = useFormik({
  //     initialValues: {height: 0, dob: new Date()},
  //   });

  const renderItem = (type, index, handleChange, values) => {
    if (type === 'heightSelect') {
      return (
        <HeightSelector
          key={index}
          onChange={handleChange('height')}
          selectedValue={values.height}
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

  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal snapToInterval={width}>
        <Formik initialValues={{height: 0, dob: new Date()}}>
          {({handleChange, values}) =>
            signupSlides.map(({type}, index) => {
              return renderItem(type, index, handleChange, values);
            })
          }
        </Formik>
      </ScrollView>
    </View>
  );
};

export default SignUp;
