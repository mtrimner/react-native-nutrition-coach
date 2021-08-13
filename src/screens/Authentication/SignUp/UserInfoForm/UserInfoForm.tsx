import React, {useRef} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {FormikTouched, FormikErrors, FormikValues} from 'formik';

import HeightSelector from './HeightSelector';
import BirthdaySelector from './BirthdaySelector';
import GenderSelect from './GenderSelect';

const {height, width} = Dimensions.get('window');

interface UserInfoFormProps {
  onChange: (name: string, item: number | string | null) => void;
  values: FormikValues;
  errors: FormikErrors<MyFormValues>;
  touched: FormikTouched<MyFormValues>;
}

interface MyFormValues {
  height: number;
  dob: Date;
  gender: string | null;
  currentWeight: number;
}

const UserInfoForm = ({
  onChange,
  values,
  errors,
  touched,
}: UserInfoFormProps) => {
  return (
    <View style={{flex: 1, width, backgroundColor: 'pink'}}>
      <View style={{marginTop: 50}}>
        <HeightSelector
          // key={index}
          onChange={(item: number) => onChange('height', item)}
          selectedValue={values.height}
          error={errors.height}
          touched={touched.height}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View style={{marginTop: 20}}>
        <BirthdaySelector
          // key={index}
          value={values.dob}
          error={errors.dob}
          touched={touched.dob}
          onChange={(item: string) => onChange('dob', item)}
        />
      </View>
      <GenderSelect />
    </View>
  );
};

export default UserInfoForm;
