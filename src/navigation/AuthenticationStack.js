import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const AuthenticationStack = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={WELCOME} component={Welcome} />
      <AuthStack.Screen
        name={REGISTER}
        component={Register}
        options={{
          headerTransparent: true,
          headerTitle: false,
          headerTintColor: '#FFFFFF',
        }}
      />
      <AuthStack.Screen
        name={LOGIN}
        component={Login}
        options={{
          headerTransparent: true,
          headerTitle: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthenticationStack;
