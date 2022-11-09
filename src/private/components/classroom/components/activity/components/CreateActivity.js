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

const CreateActivity = () => {

  const selected= require('./images/activity.png')

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
            <Input size="lg" variant="underlined" placeholder="Nombre de la actividad" />
            <Box>
                  <Select selectedValue={activity}  minWidth="200" accessibilityLabel="Activity" placeholder="Tipo de actividad" _selectedItem={{
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
            <Box>
                  <Select selectedValue={object}  minWidth="200" accessibilityLabel="Objeto" placeholder="Seleccione el objeto" _selectedItem={{
                  bg: "info.600",
                  color: '#404040',
                  placeholderTextColor: '#404040',
                  endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1} onValueChange={itemValue => setObject(itemValue)}
                  style={{...style.text.smSelect}}
                >
                     {object.map((item) => {
                        return (
                          <Select.Item key={item.key} label={item.name} value={item.key}/>
                        );
                })}


         
                  </Select>
            </Box>
            <Input size="lg" variant="underlined" placeholder="Ponderación" />

            <Input size="lg" variant="unstyled" placeholder="Seleccione la fecha de inicio" />
            <DatePicker date={dateStart} onDateChange={setDateStart} locale={'es'}/>

            <Input size="lg" variant="unstyled" placeholder="Seleccione la fecha de finalización" />
            <DatePicker date={dateEnd} onDateChange={setDateEnd} locale={'es'}/>

           
            <Input size="lg" variant="unstyled" placeholder="Seleccione las preguntas" />
            <Input size="lg" variant="underlined" placeholder="Pregunta" />
            <Input size="lg" variant="underlined" placeholder="Opción 1" />
            <Input size="lg" variant="underlined" placeholder="Opción 2" />
            <Input size="lg" variant="underlined" placeholder="Opción 3" />
            <Input size="lg" variant="underlined" placeholder="Opción 4" />
            <Box>
                  <Select selectedValue={anwser}  minWidth="200" accessibilityLabel="Respuesta" placeholder="Seleecione la respuesta correcta" _selectedItem={{
                  bg: "info.600",
                  color: '#404040',
                  placeholderTextColor: '#404040',
                  endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1} onValueChange={itemValue => setAnswer(itemValue)}
                  style={{...style.text.smSelect}}
                >
                    <Select.Item label="Opción 1" value="1" />
                    <Select.Item label="Opción 2" value="2" />
                    <Select.Item label="Opción 3" value="3" />
                    <Select.Item label="Opción 4" value="4" />
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
