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
import {FormikValues} from 'formik';

import Option from './Option';

export interface AccordionButtonProps {
  option: {
    title: string;
    value: string;
    options: {label: string; value: string; icon?: string}[] | null;
  };
  onPress: (value: string) => void;
  setFieldValue: (field: string, value: string) => void;
  control: string;
  subFieldName: string;
  selected: boolean;
  values: FormikValues;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  items: {
    overflow: 'hidden',
    marginHorizontal: 20,
    backgroundColor: 'red',
  },
});
const AccordionButton = ({
  option,
  onPress,
  setFieldValue,
  control,
  subFieldName,
  selected,
  values,
}: AccordionButtonProps) => {
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
          if (option.options !== null) {
            if (height.value === 0) {
              runOnUI(() => {
                'worklet';
                height.value = measure(aref).height;
              })();
            }
            open.value = !open.value;
          } else {
            setFieldValue(control, option.value);
          }
        }}>
        <Animated.View
          style={[
            styles.container,
            headerStyle,
            {backgroundColor: selected ? '#ffffff' : 'orange'},
          ]}>
          <Text>{option.title}</Text>
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
          {option.options !== null
            ? option.options.map((item, key) => (
                <Option
                  key={key}
                  isLast={
                    option.options !== null && key === option.options.length - 1
                  }
                  item={item}
                  onPress={value => {
                    setFieldValue(control, option.value);
                    setFieldValue(subFieldName, value);
                  }}
                  selected={item.value === values[subFieldName] ? true : false}
                />
              ))
            : null}
        </View>
      </Animated.View>
    </>
  );
};

export default AccordionButton;
