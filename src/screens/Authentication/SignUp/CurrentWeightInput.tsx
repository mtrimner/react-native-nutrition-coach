import React, {useRef} from 'react';
import {View, Dimensions, Text} from 'react-native';
import TextInput from '../../../components/TextInput';

interface Props {
  onChange: () => void;
  errors?: string;
  value: number | null;
  key: string;
}

const {height, width} = Dimensions.get('window');
const CurrentWeightInput = ({onChange, errors, value, key}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        width,
        backgroundColor: 'green',
        paddingTop: height * 0.2,
      }}>
      <Text style={{paddingHorizontal: 25, fontSize: 18, paddingBottom: 5}}>
        What's your current weight?
      </Text>
      <View style={{paddingHorizontal: 25}}>
        <TextInput
          onChange={onChange}
          errors={errors}
          icon="weight-pound"
          placeholder="Enter weight"
          style={{fontSize: 20}}
        />
      </View>
    </View>
  );
};

export default CurrentWeightInput;
