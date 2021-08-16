import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {FormikTouched, FormikErrors, FormikValues} from 'formik';

import TextInput from '../../../components/TextInput';

interface RegistrationFormProps {
  onChange: (name: string, value: string) => void;
  values: FormikValues;
  errors: FormikErrors<MyFormValues>;
  touched: FormikTouched<MyFormValues>;
  index: number;
}

interface MyFormValues {
  name: string;
  email: string;
  password: string;
}

const {width} = Dimensions.get('window');

const RegistrationForm = ({onChange}: RegistrationFormProps) => {
  return (
    <View style={{flex: 1, width, backgroundColor: 'gray'}}>
      <Text>Registration Form</Text>
      <View style={{paddingHorizontal: 20}}>
        <TextInput
          style={{
            borderBottomWidth: 2,
            backgroundColor: 'transparent',
            borderRadius: 0,
          }}
          placeholder="First name"
          textStyle={{fontSize: 20, height: 40}}
          onChangeText={(value: string) => onChange('firstName', value)}
          autoCompleteType="off"
        />
      </View>

      <View style={{paddingHorizontal: 20}}>
        <TextInput
          style={{
            borderBottomWidth: 2,
            backgroundColor: 'transparent',
            borderRadius: 0,
          }}
          placeholder="Email"
          textStyle={{fontSize: 20, height: 20}}
          onChangeText={(value: string) => onChange('email', value)}
          autoCompleteType="email"
          autoCapitalize="none"
        />
      </View>

      <View style={{paddingHorizontal: 20}}>
        <TextInput
          style={{
            borderBottomWidth: 2,
            backgroundColor: 'transparent',
            borderRadius: 0,
          }}
          placeholder="Password"
          textStyle={{fontSize: 20, height: 40}}
          onChangeText={(value: string) => onChange('email', value)}
          autoCompleteType="off"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default RegistrationForm;
