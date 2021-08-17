import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: width * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

interface ButtonProps {
  label?: string;
  onPress: () => void;
  style?: TouchableOpacityProps['style'];
}

const Button = ({label, onPress, style}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
