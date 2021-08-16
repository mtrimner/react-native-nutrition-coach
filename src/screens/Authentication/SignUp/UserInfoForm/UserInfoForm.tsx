import React, {useRef} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {FormikTouched, FormikErrors, FormikValues} from 'formik';

import HeightSelector from './HeightSelector';
import BirthdaySelector from './BirthdaySelector';
import GenderSelect from './GenderSelect';
import CircleButton from '../CircleButton';

const {height, width} = Dimensions.get('window');

const NEXT = 1;
const PREV = -1;

interface UserInfoFormProps {
  onChange: (name: string, item: number | string | null) => void;
  values: FormikValues;
  errors: FormikErrors<MyFormValues>;
  touched: FormikTouched<MyFormValues>;
  onPress: (direction: number, index: number) => void;
  onGenderSelect: () => void;
  index: number;
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
  onPress,
  onGenderSelect,
  index,
}: UserInfoFormProps) => {
  return (
    <View style={{flex: 1, width, backgroundColor: 'gray'}}>
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
      <View style={{marginTop: 20}}>
        <GenderSelect
          onGenderSelect={(item: string) => {
            onChange('gender', item);
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          width,
          marginTop: height * 0.75,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <CircleButton
          onPress={() => onPress(PREV, index)}
          icon="chevron-back"
          style={{position: 'absolute', left: 30}}
        />
        <CircleButton
          onPress={() => onPress(NEXT, index)}
          icon="chevron-forward"
          style={{position: 'absolute', right: 30}}
          disabled={
            !values.height ||
            !values.dob ||
            !values.gender ||
            errors.height ||
            errors.dob ||
            errors.gender
              ? true
              : false
          }
        />
      </View>
    </View>
  );
};

export default UserInfoForm;
