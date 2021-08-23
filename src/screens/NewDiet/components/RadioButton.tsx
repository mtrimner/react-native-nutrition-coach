import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface RadioButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  icon: string;
  info?: string;
  buttonValue: string;
}

const {height, width} = Dimensions.get('window');

const RadioButton = ({
  label,
  selected,
  onPress,
  icon,
  info,
  buttonValue,
}: RadioButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          borderColor: 'white',
          borderWidth: 1,
          borderRadius: 10,
          height: 100,
          width: width * 0.8,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: selected ? '#ffffff' : 'pink',
        }}>
        <Text style={{position: 'absolute', top: 5}}>{label}</Text>
        <Icon name={icon} size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
