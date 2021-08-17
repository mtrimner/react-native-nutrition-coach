import React, {useRef} from 'react';
import {View, Text, Dimensions, TextInput as RNTextInput} from 'react-native';
import {FormikTouched, FormikErrors, FormikValues} from 'formik';

import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import OAuthButtons from '../components/OAuthButtons';

interface RegistrationFormProps {
  onChange: (name: string, value: string) => void;
  values: FormikValues;
  errors: FormikErrors<MyFormValues>;
  touched: FormikTouched<MyFormValues>;
  index: number;
}

interface MyFormValues {
  firstName: string;
  email: string;
  password: string;
}

const {width} = Dimensions.get('window');

const RegistrationForm = ({
  onChange,
  errors,
  touched,
  values,
}: RegistrationFormProps) => {
  const email = useRef<RNTextInput>(null);
  const password = useRef<RNTextInput>(null);

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
          returnKeyType="next"
          errors={errors.firstName}
          touched={touched.firstName}
          onSubmitEditing={() => email.current?.focus()}
        />
      </View>

      <View style={{paddingHorizontal: 20}}>
        <TextInput
          style={{
            borderBottomWidth: 2,
            backgroundColor: 'transparent',
            borderRadius: 0,
          }}
          ref={email}
          placeholder="Email"
          textStyle={{fontSize: 20, height: 20}}
          onChangeText={(value: string) => onChange('email', value)}
          autoCompleteType="email"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          errors={errors.email}
          touched={touched.email}
          onSubmitEditing={() => password.current?.focus()}
        />
      </View>

      <View style={{paddingHorizontal: 20}}>
        <TextInput
          style={{
            borderBottomWidth: 2,
            backgroundColor: 'transparent',
            borderRadius: 0,
          }}
          ref={password}
          placeholder="Password"
          textStyle={{fontSize: 20, height: 40}}
          onChangeText={(value: string) => onChange('password', value)}
          autoCompleteType="password"
          autoCapitalize="none"
          secureTextEntry
          returnKeyType="done"
          errors={errors.password}
          touched={touched.password}
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Button onPress={() => console.log('Button Press')} />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <OAuthButtons onPress={() => console.log('Press')} />
      </View>
    </View>
  );
};

export default RegistrationForm;
