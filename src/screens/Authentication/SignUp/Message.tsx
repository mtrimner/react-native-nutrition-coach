import React from 'react';
import {View, Text, Dimensions} from 'react-native';

interface MessageProps {
  message: string;
}

const {height, width} = Dimensions.get('window');

const Message = ({message}: MessageProps) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        width,
        flex: 1,
        paddingTop: height * 0.2,
      }}>
      <Text>{message}</Text>
    </View>
  );
};

export default Message;
