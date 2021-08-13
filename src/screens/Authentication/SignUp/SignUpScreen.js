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

const signupSlides = [{type: 'userInfoForm'}, {type: 'showMessage'}];

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

  const onPress = () => {
    scroll.current.scrollTo({
      x: width * (index + 1),
      animated: true,
    });
  };

  const {handleChange, values, errors, touched, setFieldValue} = useFormik({
    validationSchema: SignUpSchema,
    initialValues: {height: 0, dob: new Date(), currentWeight: null},
  });

  const renderItem = (type, index) => {
    if (type === 'userInfoForm') {
      return (
        <UserInfoForm
          key={index}
          values={values}
          errors={errors}
          touched={touched}
          onChange={(field, value) => setFieldValue(field, value)}
        />
      );
    } else if (type === 'showMessage') {
      return <View style={{width, backgroundColor: 'grey', flex: 1}}></View>;
    }
  };

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
