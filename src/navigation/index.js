import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SignUpScreen from '../screens/Authentication/SignUp/SignUpScreen';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <SignUpScreen />
    </NavigationContainer>
  );
};

export default RootNavigator;
