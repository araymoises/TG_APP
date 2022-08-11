import React, { useState }from 'react';
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
} from 'native-base';
import style from '~styles';

const CreateActivity = () => {

  const selected= require('./images/activity.png')
  
  let [content, setContent] = useState("");

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
            <Input size="lg" variant="underlined" placeholder="Nombre de la actividad" />
            <Input size="lg" variant="underlined" placeholder="Tipo de actividad" />
            <Input size="lg" variant="underlined" placeholder="Ponderación" />
            <Box>
                  <Select selectedValue={content}  minWidth="200" accessibilityLabel="Contenido" placeholder="Contenido" _selectedItem={{
                  bg: "info.600",
                  color: '#404040',
                  placeholderTextColor: '#404040',
                  endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1} onValueChange={itemValue => setContent(itemValue)}
                  style={{...style.text.smSelect}}
                >
                    <Select.Item label="La Lectura" value="1" />
                    <Select.Item label="La materia y la energía" value="2" />
                    <Select.Item label="El ordenador" value="3" />
                    <Select.Item label="Tipos de deporte" value="4" />
                    <Select.Item label="Dibujo artístico y el color" value="5" />
                    <Select.Item label="Historia de Venezuela" value="6" />
                    <Select.Item label="La familia en inglés" value="7" />
                    <Select.Item label="Números y operaciones" value="8" />
                    <Select.Item label="Música tradicional" value="9" />
                    <Select.Item label="Tipología climática" value="10" />
                  </Select>
            </Box>

            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }}>Crear</Button>
          </Stack>
        </Center>
      </View>
    </ScrollView>
  );
};

export default CreateActivity;
