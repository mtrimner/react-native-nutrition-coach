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
    backgroundColor: 'pink',
  },
});

interface CircleButtonProps {
  onPress: () => void;
  icon: string;
  style: TouchableOpacityProps['style'];
}

const CircleButton = ({onPress, icon, style}: CircleButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Icon name={icon} size={30} />
    </TouchableOpacity>
  );
};

export default CircleButton;
