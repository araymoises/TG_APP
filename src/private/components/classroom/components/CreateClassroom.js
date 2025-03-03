import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import {
  View,
  Input,
  Stack,
  Center,
  Button,
  Image,
  ScrollView,
  Box,
  Select,
  CheckIcon,
  Text,
} from 'native-base';
import style from '~styles';
import { saveClassrooms } from "./../../../../../api";
import { isValidObjField, updateError } from "../../../../validations/Validations";

const CreateClassroom = ({ navigation }) => {
  const selected = require('./images/classroom.png')
  const navigate = navigation.navigate;
  const [classroom, setClassroom] = useState({
    name: '',
    description: ''

  })

  const { name, description } = classroom;
  const [error, setError] = useState('');

  const handleOnChangeText = (value, fieldName) => { setClassroom({ ...classroom, [fieldName]: value }) }
  const isValidForm = () => {
    if (!isValidObjField(classroom)) return updateError('Debe llenar todos los campos', setError)
    if (!name.trim() || name.length > 3) return updateError('El nombre debe tener menos de 3 letras', setError)
    if (!description.trim() || description.length < 8) return updateError('La descripción debe tener más de 8 letras', setError)

    return true;
  }

  const onSaveClassroom = () => {
    console.log('entre a onSaveClassroom')
    if (isValidForm()) {
      saveClassrooms(classroom)
        .then((res) => {
          console.log('Res:')
          console.log(res.data.message)
          setClassroom({ name: '', description: '' });
          navigate('ClassroomAdminRouter', {
            screen: 'ClassroomsList',
            params: { messageSuccess: `${res.data.message}` }
          });
        })
        .catch((error) => {
          if (error.response) {
            updateError(error.response.data.message, setError);
          }
          else {
            console.log(error)
            updateError('Ha ocurrido un error interno', setError);
          }
        });


    }

  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
        <Image
          justifyContent="center"
          alignItems="center"
          source={selected}
          alt="image"
          size="2xl"
          key="lg"
          resizeMode="cover"
          mx="auto"
        />

        <Center>
          {error ? <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>{error}</Text> : null}
          <Stack mt={2} space={4} w="100%" maxW="400px">
            <Input size="lg" variant="underlined" placeholder="1 A"
              value={name}
              onChangeText={(value) => handleOnChangeText(value, 'name')}
            />
            <Input size="lg" variant="underlined" placeholder="Nombre de la escuela"
              value={description}
              onChangeText={(value) => handleOnChangeText(value, 'description')}
            />
            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} onPress={onSaveClassroom}>Crear</Button>
          </Stack>
        </Center>
      </View>
    </ScrollView>
  );
};

export default CreateClassroom;
