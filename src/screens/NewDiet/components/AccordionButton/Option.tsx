import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
}

interface OptionProps {
  item: OptionItem;
  isLast: boolean;
}

const Option = ({item, isLast}: OptionProps) => {
  return (
    <View style={styles.container}>
      <Text>{item.label}</Text>
    </View>
  );
};

export default Option;
