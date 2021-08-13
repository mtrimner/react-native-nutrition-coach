import React, {forwardRef} from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TextInputProps extends RNTextInputProps {
  icon?: string;
  touched?: boolean;
  errors?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({icon, touched, errors, ...props}, ref) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <View style={{flex: 1, paddingLeft: 10}}>
          <RNTextInput
            underlineColorAndroid="transparent"
            ref={ref}
            {...props}
          />
        </View>
        {icon && (
          <View style={{paddingRight: 10}}>
            <Icon name={icon} size={35} />
          </View>
        )}
      </View>
    );
  },
);

export default TextInput;
