import React, { useState }from 'react';
import DatePicker from 'react-native-date-picker';
import
{
    View,
    ScrollView,
    Center,
    Stack,
    Button,
    Input,
    Box,
    Select,
    CheckIcon,
} from 'native-base'

import style from '~styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const ActivityDetailTeacher = () => {
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
    { name: 'Cara sonriente', key:11},

  ])



  return (
        <ScrollView contentContainerStyle={{  flexGrow: 1,justifyContent: 'flex-start', paddingHorizontal:20,paddingVertical:20, backgroundColor: 'white'}}>
            <View style={{ flex: 1, justifyContent: 'center', width: '100%'}}>
                <Center>
                  <Stack space={4} w="100%" maxW="400px">
                    <Input size="lg" variant="underlined" placeholder="Nombre de la actividad" value="Reconociendo las Emociones"/>
                    <Box>
                          <Select selectedValue="2"  minWidth="200" accessibilityLabel="Activity" placeholder="Tipo de actividad" _selectedItem={{
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
                          <Select selectedValue="7"  minWidth="200" accessibilityLabel="Contenido" placeholder="Contenido" _selectedItem={{
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
                            <Select.Item label="La familia" value="7" />
                            <Select.Item label="Números y operaciones" value="8" />
                            <Select.Item label="Música tradicional" value="9" />
                            <Select.Item label="Tipología climática" value="10" />
                          </Select>
                    </Box>
                    <Box>
                          <Select selectedValue="11"  minWidth="200" accessibilityLabel="Objeto" placeholder="Seleccione el objeto" _selectedItem={{
                          bg: "info.600",
                          color: '#404040',
                          placeholderTextColor: '#404040',
                          endIcon: <CheckIcon size="5" />,
                          }}
                          mt={1} onValueChange={itemValue => setContent(itemValue)}
                          style={{...style.text.smSelect}}
                        >
                            <Select.Item label="Accesorio de iluminación" value="1" />
                            <Select.Item label="Agenda" value="2" />
                            <Select.Item label="Águila" value="3" />
                            <Select.Item label="Araña" value="4" />
                            <Select.Item label="Árbol de navidad" value="5" />
                            <Select.Item label="Armadillo" value="6" />
                            <Select.Item label="Audífonos " value="7" />
                            <Select.Item label="Avión Militar" value="8" />
                            <Select.Item label="Bombillo" value="9" />
                            <Select.Item label="Borrador" value="10" />
                            <Select.Item label="Cara sonriente" value="11" />
                          </Select>
                    </Box>
  
                    <Input size="lg" variant="underlined" placeholder="Ponderación" value="20"/>

                    <Input size="lg" variant="unstyled" placeholder="Seleccione la fecha de inicio" />
                    <DatePicker date={dateStart} onDateChange={setDateStart} locale={'es'}/>

                    <Input size="lg" variant="unstyled" placeholder="Seleccione la fecha de finalización" />
                    <DatePicker date={dateEnd} onDateChange={setDateEnd} locale={'es'}/>

                  
                    <Input size="lg" variant="unstyled" placeholder="Seleccione las preguntas" />
                    <Input size="lg" variant="underlined" placeholder="Pregunta" value="¿Qué emoción es esta?"/>
                    <Input size="lg" variant="underlined" placeholder="Opción 1" value="Tristeza"/>
                    <Input size="lg" variant="underlined" placeholder="Opción 2" value="Felicidad"/>
                    <Input size="lg" variant="underlined" placeholder="Opción 3" value="Enojo"/>
                    <Input size="lg" variant="underlined" placeholder="Opción 4" value="Miedo"/>
                    <Box>
                          <Select selectedValue="2"  minWidth="200" accessibilityLabel="Respuesta" placeholder="Seleecione la respuesta correcta" _selectedItem={{
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
                    <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} leftIcon={<Icon name="edit" size={15} color={ style.color.secondary } />}>Editar</Button>
                  </Stack>
                </Center>
              </View>

        </ScrollView>
  )
}

export default ActivityDetailTeacher
