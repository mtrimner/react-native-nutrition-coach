import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('window');

const SIZE = width / 6;
const styles = StyleSheet.create({
  container: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface CircleButtonProps {
  onPress: () => void;
  icon: string;
  style: TouchableOpacityProps['style'];
  disabled?: boolean;
}

const CircleButton = ({
  onPress,
  icon,
  style,
  disabled,
  ...props
}: CircleButtonProps) => {
  const color = disabled ? 'pink' : 'green';
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}, style]}
      disabled={disabled}
      {...props}>
      <Icon name={icon} size={30} color="#ffffff" />
    </TouchableOpacity>
  );
};

export default CircleButton;
