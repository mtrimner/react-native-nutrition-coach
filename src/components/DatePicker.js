import React, {useState} from 'react';
import {View, Text, Platform, Pressable, Modal} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({onChange, value, display}) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(value);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    onChange(String(currentDate));
  };
  const onCancelPress = () => {
    setShow(false);
  };

  const onDonePress = () => {
    setShow(false);
  };

  const renderDatePicker = (
    <DateTimePicker value={date} onChange={onDateChange} display="spinner" />
  );

  return (
    <Pressable onPress={() => setShow(true)}>
      <View
        style={{
          height: 50,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 22}}>
          {new Date(value).toLocaleDateString()}
        </Text>
        {Platform.OS === 'android' && show && renderDatePicker}
        {Platform.OS === 'ios' && (
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
                    <View style={{marginTop: 20}}>{renderDatePicker}</View>
                    <Pressable onPress={onCancelPress}>
                      <Text>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={onDonePress}>
                      <Text>Done</Text>
                    </Pressable>
                  </View>
                </Pressable>
              </Pressable>
            </View>
          </Modal>
        )}
      </View>
    </Pressable>
  );
};

export default DatePicker;
