import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import CircleButton from './CircleButton';

interface MessageProps {
  children: string;
  onPress: (direction: number, index: number) => void;
  index: number;
}
const {height, width} = Dimensions.get('window');

const NEXT = 1;
const PREV = -1;

const Message = ({children, onPress, index}: MessageProps) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        width,
        flex: 1,
      }}>
      <View style={{marginTop: height * 0.2, backgroundColor: 'pink'}}>
        <Text>{children}</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          width,
          marginTop: height * 0.75,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <CircleButton
          onPress={() => onPress(PREV, index)}
          icon="chevron-back"
          style={{position: 'absolute', left: 30}}
        />
        <CircleButton
          onPress={() => onPress(NEXT, index)}
          icon="chevron-forward"
          style={{position: 'absolute', right: 30}}
        />
      </View>
    </View>
  );
};

export default Message;
