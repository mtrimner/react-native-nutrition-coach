import React, {useState} from 'react';
import {View, Text, Platform, Pressable, Modal, StyleSheet} from 'react-native';
import {Picker as RnPicker} from '@react-native-picker/picker';

const Picker = ({selectedValue, options, onChange, onPress}) => {
  const [show, setShow] = useState(false);

  const onCancelPress = () => {
    setShow(false);
  };

  const onDonePress = () => {
    setShow(false);
    onPress();
  };

  const renderPicker = (
    <RnPicker selectedValue={selectedValue} onValueChange={onChange}>
      {Object.entries(options).map(([key, value]) => (
        <RnPicker.Item label={value} value={key} key={key} />
      ))}
    </RnPicker>
  );

  const getImperialHeight = selectedValue ? options[selectedValue] : '';

  return (
    <>
      {Platform.OS === 'android' && renderPicker}
      {Platform.OS === 'ios' && (
        <Pressable onPress={() => setShow(true)}>
          <View
            style={{
              height: 50,
              backgroundColor: '#ffffff',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22}}>{options[selectedValue]}</Text>

            <Modal
              transparent={true}
              animationType="slide"
              visible={show}
              supportedOrientations={['portrait']}
              onRequestClose={() => setShow(false)}>
              <View style={{flex: 1}}>
                <Pressable
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                  }}
                  onPress={() => setShow(false)}>
                  <Pressable style={{flex: 1}}>
                    <View
                      style={{
                        backgroundColor: '#ffffff',
                        height: 256,
                        overFlow: 'hidden',
                      }}>
                      <View style={{marginTop: 20}}>{renderPicker}</View>
                      <Pressable
                        onPress={onCancelPress}
                        style={[styles.btn, {left: 0}]}>
                        <Text>Cancel</Text>
                      </Pressable>
                      <Pressable
                        onPress={onDonePress}
                        style={[styles.btn, {right: 0}]}>
                        <Text>Done</Text>
                      </Pressable>
                    </View>
                  </Pressable>
                </Pressable>
              </View>
            </Modal>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default Picker;

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
