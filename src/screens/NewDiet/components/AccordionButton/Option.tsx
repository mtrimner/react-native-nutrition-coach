import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#f4f4f6',
    height: 54,
  },
});
export interface OptionItem {
  label: string;
  value: string;
  icon?: string;
}

interface OptionProps {
  item: OptionItem;
  isLast: boolean;
  onPress: (value: string) => void;
  selected: boolean;
}

const Option = ({item, isLast, onPress, selected}: OptionProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: selected ? 'blue' : 'grey'}]}
      onPress={() => onPress(item.value)}>
      <Text>{item.label}</Text>
      <Text>Alert</Text>
    </TouchableOpacity>
  );
};

export default Option;
