import React, { useState, useEffect } from 'react';
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
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { getContents, getActivityTypes, getObjects } from 'api'

const CreateActivity = () => {
  const classroomId = useSelector((state) => state.classroomId.value);
  const isFocused = useIsFocused();

  const selected = require('./images/activity.png')

  let [content, setContent] = useState("");

  let [activity, setActivity] = useState("");
  const [activityTypes, setActivityTypes] = useState([]);
  const [contents, setContents] = useState([]);
  const [objects, setObjects] = useState([]);

  const [selectedObject, setSelectedObject] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedActivityType, setSelectedActivityType] = useState(null);

  const [openDateStart, setOpenDateStart] = useState(false);
  const [openDateEnd, setOpenDateEnd] = useState(false);

  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [anwser, setAnswer] = useState("");
  const [object, setObject] = useState([
    { name: 'Mujer', id: '6446a807367d8860d81212c9' },
    { name: 'Pájaro', id: '644b0ae13dc673308c532f71' },
    { name: 'Perro', id: '644b0b763dc673308c532f77' }
  ])

  const confirmDateStart = (value) => {
    console.log('confirmDateStart');
    console.log(value);
    setDateStart(value)
    setOpenDateStart(false)
  }

  const confirmDateEnd = (value) => {
    console.log('confirmDateEnd');
    console.log(value);
    setDateEnd(value)
    setOpenDateEnd(false)
  }

  useEffect(() => {
    setActivityTypes([])
    setContents([])
    setObjects([])
    setSelectedActivityType(null)
    setSelectedContent(null)
    setSelectedObject(null)

    getActivityTypes().then((res) => {
      console.log('Activity Types list response:');
      console.log(res.data.message);
      setActivityTypes(res.data.content)
    }).catch((error) => {
      setActivityTypes([])
      console.log('Error:');
      console.log(error);
    })

    getContents(classroomId).then((res) => {
      console.log('Contents list response:');
      console.log(res.data.message);
      setContents(res.data.content)
    }).catch((error) => {
      setContents([])
      console.log('Error:');
      console.log(error);
    })

    getObjects().then((res) => {
      console.log('Activity Types list response:');
      console.log(res.data.message);
      setObjects(res.data.content)
    }).catch((error) => {
      setObjects([])
      console.log('Error:');
      console.log(error);
    })
  }, [isFocused])

  useEffect(() => {
    console.log('selectedActivityType');
    console.log(selectedActivityType);
  }, [selectedActivityType])

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
          <Stack mt={2} space={4} w="100%" maxW="400px">
            <Input size="lg" variant="underlined" placeholder="Nombre de la actividad" />
            <Box>
              <Select selectedValue={selectedActivityType} minWidth="200" accessibilityLabel="Activity" placeholder="Tipo de actividad" _selectedItem={{
                bg: "info.600",
                color: '#404040',
                placeholderTextColor: '#404040',
                endIcon: <CheckIcon size="5" />,
              }}
                mt={1} onValueChange={value => setSelectedActivityType(value)}
                style={{ ...style.text.smSelect }}
              >
                {activityTypes.map((activityType, index) => {
                  return (
                    <Select.Item key={index} label={activityType.name} value={activityType} />
                  );
                })}
              </Select>
            </Box>
            <Box>
              <Select selectedValue={selectedContent} minWidth="200" accessibilityLabel="Contenido" placeholder="Contenido" _selectedItem={{
                bg: "info.600",
                color: '#404040',
                placeholderTextColor: '#404040',
                endIcon: <CheckIcon size="5" />,
              }}
                mt={1} onValueChange={value => setSelectedContent(value)}
                style={{ ...style.text.smSelect }}
              >
                {contents.map((content, index) => {
                  return (
                    <Select.Item key={index} label={content.name} value={content.id} />
                  );
                })}
              </Select>
            </Box>
            <Box>
              <Select selectedValue={selectedObject} minWidth="200" accessibilityLabel="Objeto" placeholder="Seleccione el objeto"
                _selectedItem={{
                  bg: "info.600",
                  color: '#404040',
                  placeholderTextColor: '#404040',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1} onValueChange={value => setSelectedObject(value)}
                style={{ ...style.text.smSelect }}
              >
                {objects.map((object, index) => {
                  return (
                    <Select.Item key={index} label={object.name} value={object.id} />
                  );
                })}

              </Select>
            </Box>
            <Input size="lg" variant="underlined" placeholder="Ponderación" />

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, paddingHorizontal: 20, height: 50, marginRight: 5, justifyContent: 'center', backgroundColor: 'white', borderRadius: 10 }}>
                <Button style={{ backgroundColor: style.color.primary, borderRadius: 10, width: 180 }} size={'sm'} colorScheme="blueGray" onPress={() => setOpenDateStart(true)}>
                  Seleccionar fecha de inicio
                </Button>
              </View>
              <View style={{ flex: 1, paddingHorizontal: 20, height: 50, marginRight: 5, justifyContent: 'center', backgroundColor: 'white', borderRadius: 10 }}>
                <Text style={{ color: style.color.primary, fontSize: 16, textAlign: 'center' }} >{dateStart.toISOString().split('T')[0].split('-').reverse().join('-')}</Text>
              </View>
            </View>
            <DatePicker modal open={openDateStart} date={dateStart} onConfirm={(value) => { confirmDateStart(value) }} onCancel={() => { setOpenDateStart(false) }} />

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, paddingHorizontal: 20, height: 50, marginRight: 5, justifyContent: 'center', backgroundColor: 'white', borderRadius: 10 }}>
                <Button style={{ backgroundColor: style.color.primary, borderRadius: 10, width: 180 }} size={'sm'} colorScheme="blueGray" onPress={() => setOpenDateEnd(true)}>
                  Seleccionar fecha tope
                </Button>
              </View>
              <View style={{ flex: 1, paddingHorizontal: 20, height: 50, marginRight: 5, justifyContent: 'center', backgroundColor: 'white', borderRadius: 10 }}>
                <Text style={{ color: style.color.primary, fontSize: 16, textAlign: 'center' }} >{dateEnd.toISOString().split('T')[0].split('-').reverse().join('-')}</Text>
              </View>
            </View>
            <DatePicker modal open={openDateEnd} date={dateEnd} onConfirm={(value) => { confirmDateEnd(value) }} onCancel={() => { setOpenDateEnd(false) }} />

            {
              selectedActivityType ? (
                selectedActivityType.code == 'SIMPLESELECTION' ? (
                  <>
                    <Input size="lg" variant="unstyled" placeholder="Seleccione las preguntas" />
                    <Input size="lg" variant="underlined" placeholder="Pregunta" />
                    <Input size="lg" variant="underlined" placeholder="Opción 1" />
                    <Input size="lg" variant="underlined" placeholder="Opción 2" />
                    <Input size="lg" variant="underlined" placeholder="Opción 3" />
                    <Input size="lg" variant="underlined" placeholder="Opción 4" />
                    <Box>
                      <Select selectedValue={anwser} minWidth="200" accessibilityLabel="Respuesta" placeholder="Seleccione la respuesta correcta" _selectedItem={{
                        bg: "info.600",
                        color: '#404040',
                        placeholderTextColor: '#404040',
                        endIcon: <CheckIcon size="5" />,
                      }}
                        mt={1} onValueChange={itemValue => setAnswer(itemValue)}
                        style={{ ...style.text.smSelect }}
                      >
                        <Select.Item label="Opción 1" value="1" />
                        <Select.Item label="Opción 2" value="2" />
                        <Select.Item label="Opción 3" value="3" />
                        <Select.Item label="Opción 4" value="4" />
                      </Select>
                    </Box>
                  </>
                ) :
                  selectedActivityType.code == 'MULTIPLESELECTION' ? (
                    <>
                      {/* Faltan los inputs */}
                    </>
                  ) :
                    selectedActivityType.code == 'TRUEFALSE' ? (
                      <>
                        {/* Faltan los inputs */}
                      </>
                    ) :
                      selectedActivityType.code == 'SORTWORDS' ? (
                        <>
                          {/* Faltan los inputs */}
                        </>
                      ) : <></>
              ) : <></>
            }

            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }}>Crear</Button>
          </Stack>
        </Center>
      </View>
    </ScrollView>
  );
};

export default CreateActivity;
