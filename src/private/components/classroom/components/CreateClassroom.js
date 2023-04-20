import React, { useState }from 'react';
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

const CreateClassroom = () => {

  const selected= require('./images/classroom.png')

  let [content, setContent] = useState("");

  let [activity, setActivity] = useState("");
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [anwser, setAnswer] = useState("");
  const [object, setObject] = useState([
    { name: 'Accesorio de iluminación', key:1},
    { name: 'Agenda', key:2},
    { name: 'Águila', key:3},
    { name: 'Araña', key:4},
    { name: 'Árbol de navidad', key:5},
    { name: 'Armadillo', key:6},
    { name: 'Audífonos', key:7},      
    { name: 'Avión Militar', key:8},
    { name: 'Bombillo', key:9},
    { name: 'Borrador', key:10},

  ])

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical:20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
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
          <Stack mt={2} space={4} w="100%" maxW="400px">
            <Input size="lg" variant="underlined" placeholder="Nombre del Aula" />
            <Input size="lg" variant="underlined" placeholder="Descripción del Aula" />
            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }}>Crear</Button>
          </Stack>
        </Center>
      </View>
    </ScrollView>
  );
};

export default CreateClassroom;
