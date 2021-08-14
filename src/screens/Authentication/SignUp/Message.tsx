import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import CircleButton from './CircleButton';

interface MessageProps {
  children: string;
  onNewPress: (direction: number) => void;
}
const {height, width} = Dimensions.get('window');

const Message = ({children, onNewPress}: MessageProps) => {
  const handleOnPress = (direction: number) => {
    onNewPress(direction);
  };
  return (
    <View
      style={{
        backgroundColor: 'red',
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
          onPress={() => handleOnPress(-1)}
          icon="chevron-back"
          style={{position: 'absolute', left: 30}}
        />
        <CircleButton
          onPress={() => handleOnPress(1)}
          icon="chevron-forward"
          style={{position: 'absolute', right: 30}}
        />
      </View>
    </View>
  );
};

export default Message;
