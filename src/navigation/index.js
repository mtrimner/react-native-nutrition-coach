import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SignUpScreen from '../screens/Authentication/SignUp/SignUpScreen';
import NewDietScreen from '../screens/NewDiet/NewDietScreen';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <NewDietScreen />
    </NavigationContainer>
  );
};

export default RootNavigator;
