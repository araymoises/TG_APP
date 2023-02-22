import React, { useState } from 'react';
import {
  View,
  Input, 
  Stack, 
  Center,
  Button,
  TextArea,
  Image,
  ScrollView,
  Box,
  Select,
  CheckIcon,

} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import style from '~styles';

const CreateContents = () => {
  const selected= require('./images/book.png')
  let [classroom, setClassroom] = useState("");

  return (
    <ScrollView contentContainerStyle={{  flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ flex: 1, paddingHorizontal: 20,paddingVertical:20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
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
          <Box>
                  <Select selectedValue={classroom}  minWidth="200" accessibilityLabel="Classroom" placeholder="Aula" _selectedItem={{
                  bg: "info.600",
                  color: '#404040',
                  placeholderTextColor: '#404040',
                  endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1} onValueChange={itemValue => setContent(itemValue)}
                  style={{...style.text.smSelect}}
                >
                    <Select.Item label="Selección múltiple" value="1" />
                    <Select.Item label="Selección simple" value="2" />
                    <Select.Item label="Ordene la palabra" value="3" />
                    <Select.Item label="Verdadero y falso" value="4" />
                  </Select>
            </Box>
            <Input size="lg" variant="underlined" placeholder="Título" />
            <TextArea size="lg" variant="underlined" placeholder="Contenido"/>
            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }}>Guardar</Button>
          </Stack>
        </Center>
      </View>
    </ScrollView>
  );
};

export default CreateContents;
