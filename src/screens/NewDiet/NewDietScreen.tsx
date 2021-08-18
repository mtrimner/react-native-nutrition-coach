import React from 'react';
import {Text, View} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import NewDietFormControl from './NewDietFormControl';

const formFields = [
  {
    control: 'field1',
    options: [
      {
        label: 'Lose Bodyfat',
        value: 'lose',
        selected: false,
        icon: 'male-outline',
      },
      {
        label: 'Maintain',
        value: 'maintain',
        selected: false,
        icon: 'male-outline',
      },
      {
        label: 'Build Muscle',
        value: 'gain',
        selected: false,
        icon: 'male-outline',
      },
    ],
  },
  {
    control: 'field2',
    options: [
      {
        label: 'Test',
        value: 'lose',
        selected: false,
        icon: 'male-outline',
      },
      {
        label: 'Test',
        value: 'maintain',
        selected: false,
        icon: 'male-outline',
      },
      {
        label: 'Test',
        value: 'gain',
        selected: false,
        icon: 'male-outline',
      },
    ],
  },
];

const NewDietSchema = Yup.object().shape({
  goal: Yup.string().required('Required'),
});

const NewDietScreen = () => {
  const {handleChange, values, errors, touched, setFieldValue} = useFormik({
    validationSchema: NewDietSchema,
    initialValues: {goal: ''},
    onSubmit: values => console.log('values'),
  });
  console.log(formFields[0].options);
  console.log('test scren');
  return (
    <View style={{backgroundColor: 'orange', flex: 1}}>
      {formFields.map((field, index) => {
        return (
          <NewDietFormControl
            key={index}
            control={field.control}
            options={field.options}
            onPress={() => console.log('Press')}
          />
        );
      })}
    </View>
  );
};

export default NewDietScreen;
