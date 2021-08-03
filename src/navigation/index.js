import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../screens/Authentication/SignUp/SignUp';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <SignUp />
    </NavigationContainer>
  );
};

export default RootNavigator;
