import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// const RadioItems = [
//   {label: 'Male', value: 'male', selected: false, icon: '"male-outline"'},
//   {label: 'Female', value: 'female', selected: false, icon: 'female-outline'},
// ];

const RadioButton = ({label, selected, onPress, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{backgroundColor: selected ? '#ffffff' : null}}>
      <View
        style={{
          borderColor: 'white',
          borderWidth: 1,
          borderRadius: 10,
          height: 100,
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{position: 'absolute', top: 5}}>{label}</Text>
        <Icon name={icon} size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
