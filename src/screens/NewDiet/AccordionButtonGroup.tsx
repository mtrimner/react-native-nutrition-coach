import React from 'react';
import {StyleSheetProperties, Text, View, Dimensions} from 'react-native';

import AccordionButton, {
  AccordionButton as AccordionButtonProps,
} from './components/AccordionButton/AccordionButton';

const accordionButton: AccordionButtonProps = {
  title: 'Intensity',
  options: [
    {label: 'Hard', value: 'hard'},
    {label: 'Medium', value: 'medium'},
  ],
};
const {width} = Dimensions.get('window');
const AccordionButtonGroup = () => {
  return (
    <View style={{flex: 1, width: width}}>
      <AccordionButton options={accordionButton} />
    </View>
  );
};

export default AccordionButtonGroup;
