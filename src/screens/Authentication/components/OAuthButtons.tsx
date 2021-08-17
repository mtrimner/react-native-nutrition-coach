import React from 'react';
import {View} from 'react-native';
import Button from '../../../components/Button';

interface OAuthButtonProps {
  onPress: () => void;
}

const OAuthButtons = ({onPress}: OAuthButtonProps) => {
  return (
    <View>
      <Button
        onPress={() => console.log('Login with Apple')}
        label="Signup with Apple"
      />
      <Button
        onPress={() => console.log('Login with Google')}
        label="Signup with Google"
      />
      <Button
        onPress={() => console.log('Login with Facebook')}
        label="Signup with Facebook"
      />
    </View>
  );
};

export default OAuthButtons;
