import React, {useRef} from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import differenceInYears from 'date-fns/differenceInYears';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useDerivedValue,
} from 'react-native-reanimated';

import UserInfoForm from './UserInfoForm/UserInfoForm';
import Dot from './Dot';
import Message from './Message';
import RegistrationForm from './RegistrationForm';

const signupSlides = [
  {type: 'showMessage1'},
  {type: 'userInfoForm'},
  {type: 'showMessage2'},
  {type: 'registrationForm'},
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
  gender: yup.string().required('Please select gender'),
  firstName: yup.string().required('Name required with signing up with email'),
  email: yup.string().email('Invalid email').required('Email required'),
  password: yup
    .string()
    .min(6, 'Must be at least 6 characters')
    .required('Please create a password'),
  currentWeight: yup
    .number()
    .when('units', {
      is: 'imperial',
      then: yup
        .number()
        .min(90, 'Weight must be over 90 lbs for accurate recommendations')
        .max(350, 'Weight must be under 350 lbs for accurate recommendations'),
    })
    .when('units', {
      is: 'metric',
      then: yup
        .number()
        .min(40, 'Weight must be over 40 kgs for accurate recommendations')
        .max(160, 'Weight must be under 350 lbs for accurate recommendations'),
    }),
});

const {width} = Dimensions.get('window');

const SignUp = () => {
  const scroll = useRef();
  const x = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset}) => {
      x.value = contentOffset.x;
    },
  });

  const currentIndex = useDerivedValue(() => x.value / width);

  const onPress = (number, index) => {
    scroll.current.scrollTo({
      x: width * (index + number),
      animated: true,
    });
  };

  const {handleChange, values, errors, touched, setFieldValue} = useFormik({
    validationSchema: SignUpSchema,
    initialValues: {height: 0, dob: new Date(), gender: ''},
  });

  const renderItem = (type, index) => {
    if (type === 'userInfoForm') {
      return (
        <UserInfoForm
          key={index}
          values={values}
          errors={errors}
          touched={touched}
          onChange={(field, value) => {
            setFieldValue(field, value);
          }}
          onPress={onPress}
          index={index}
        />
      );
    } else if (type === 'showMessage1') {
      return (
        <Message onPress={onPress} key={index} index={index}>
          Let us know a little bit about you
        </Message>
      );
    } else if (type === 'showMessage2') {
      return (
        <Message onPress={onPress} key={index} index={index}>
          Great! Let's create your account so you can start creating your
          nutrition plan
        </Message>
      );
    } else if (type === 'registrationForm') {
      return (
        <RegistrationForm
          onChange={(field, value) => {
            setFieldValue(field, value);
          }}
          errors={errors}
          touched={touched}
          values={values}
        />
      );
    }
  };
  console.log(values);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {signupSlides.map((_, index) => {
          return <Dot key={index} index={index} currentIndex={currentIndex} />;
        })}
      </View>

      <Animated.ScrollView
        horizontal
        snapToInterval={width}
        ref={scroll}
        scrollEnabled={false}
        onScroll={onScroll}
        scrollEventThrottle={50}
        bounces={false}>
        {signupSlides.map(({type}, index) => {
          return renderItem(type, index, handleChange, values);
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default SignUp;
