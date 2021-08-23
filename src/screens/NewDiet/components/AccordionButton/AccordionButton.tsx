import React from 'react';
import {Text, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedRef,
  measure,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
  runOnUI,
} from 'react-native-reanimated';
import HeightSelector from '../../../Authentication/SignUp/UserInfoForm/HeightSelector';

import Option, {OptionItem} from './Option';

export interface AccordionButton {
  title: string;
  options: OptionItem[];
}

interface OptionProps {
  options: AccordionButton;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  items: {
    overflow: 'hidden',
  },
});
const AccordionButton = ({options}: OptionProps) => {
  const aref = useAnimatedRef<View>();
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withSpring(1) : withTiming(0),
  );
  const height = useSharedValue(0);
  const headerStyle = useAnimatedStyle(() => ({
    borderBottomLeftRadius: progress.value === 0 ? 8 : 0,
    borderBottomRightRadius: progress.value === 0 ? 8 : 0,
  }));
  const style = useAnimatedStyle(() => ({
    height: height.value * progress.value + 1,
    opacity: progress.value === 0 ? 0 : 1,
  }));

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          if (height.value === 0) {
            runOnUI(() => {
              'worklet';
              height.value = measure(aref).height;
            })();
          }
          open.value = !open.value;
        }}>
        <Animated.View style={[styles.container, headerStyle]}>
          <Text>button label</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.items, style]}>
        <View
          ref={aref}
          onLayout={({
            nativeEvent: {
              layout: {height: h},
            },
          }) => console.log({h})}>
          {options.options.map((item, key) => (
            <Option
              key={key}
              isLast={key === options.options.length - 1}
              item={item}
            />
          ))}
        </View>
      </Animated.View>
    </>
  );
};

export default AccordionButton;
