import React, {useState} from 'react';
import {Text, View, Dimensions} from 'react-native';

import Picker from '../../../../components/Picker';

const {height, width} = Dimensions.get('window');

const HEIGHTOPTIONS = {
  0: 'Feet    |    Inches',
  121: '4 feet',
  124: '4 feet 1 inches',
  127: '4 feet 2 inches',
  130: '4 feet 3 inches',
  132: '4 feet 4 inches',
  135: '4 feet 5 inches',
  137: '4 feet 6 inches',
  139: '4 feet 7 inches',
  142: '4 feet 8 inches',
  145: '4 feet 9 inches',
  147: '4 feet 10 inches',
  150: '4 feet 11 inches',
  152: '5 feet',
  155: '5 feet 1 inches',
  157: '5 feet 2 inches',
  160: '5 feet 3 inches',
  163: '5 feet 4 inches',
  165: '5 feet 5 inches',
  168: '5 feet 6 inches',
  170: '5 feet 7 inches',
  173: '5 feet 8 inches',
  175: '5 feet 9 inches',
  178: '5 feet 10 inches',
  180: '5 feet 11 inches',
  183: '6 feet ',
  185: '6 feet  1 inches',
  188: '6 feet  2 inches',
  190: '6 feet  3 inches',
  193: '6 feet  4 inches',
  196: '6 feet  5 inches',
  198: '6 feet  6 inches',
  200: '6 feet  7 inches',
  203: '6 feet  8 inches',
  206: '6 feet  9 inches',
  208: '6 feet  10 inches',
  211: '6 feet  11 inches',
  213: '7 feet  ',
};

const HeightSelector = ({onChange, selectedValue, onPress, error, touched}) => {
  return (
    <View>
      <Text style={{paddingHorizontal: 25, fontSize: 18, paddingBottom: 5}}>
        How Tall Are You?
      </Text>
      <View style={{paddingHorizontal: 25}}>
        <Picker
          options={HEIGHTOPTIONS}
          onChange={onChange}
          selectedValue={selectedValue}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default HeightSelector;
