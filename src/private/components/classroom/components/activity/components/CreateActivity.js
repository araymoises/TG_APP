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
  Radio,
  Checkbox,
  Switch,
  VStack,
} from 'native-base';
import style from '~styles';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { getContents, getActivityTypes, getObjects, saveActivity, saveAnswers } from 'api'

const CreateActivity = ({ navigation }) => {
  const classroomId = useSelector((state) => state.classroomId.value);
  const isFocused = useIsFocused();
  const navigate = navigation.navigate;

  const selected = require('./images/activity.png')

  let [content, setContent] = useState("");

  let [activity, setActivity] = useState("");
  const [activityTypes, setActivityTypes] = useState([]);
  const [contents, setContents] = useState([]);
  const [objects, setObjects] = useState([]);

  const [activityName, setActivityName] = useState('');
  const [maxQualification, setMaxQualification] = useState('');

  const [selectedObject, setSelectedObject] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedActivityType, setSelectedActivityType] = useState(null);
  const [selectedActivityId, setSelectedActivityId] = useState(null);

  const [openDateStart, setOpenDateStart] = useState(false);
  const [openDateEnd, setOpenDateEnd] = useState(false);
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());


  // Simple Selection
  const [simpleSelectionQuestion, setSimpleSelectionQuestion] = useState('');

  const [simpleSelectionFirstAnswerValue, setSimpleSelectionFirstAnswerValue] = useState(null);
  const [simpleSelectionSecondAnswerValue, setSimpleSelectionSecondAnswerValue] = useState(null);
  const [simpleSelectionThirdAnswerValue, setSimpleSelectionThirdAnswerValue] = useState(null);
  const [simpleSelectionFourthAnswerValue, setSimpleSelectionFourthAnswerValue] = useState(null);

  const [simpleSelectionAnswerBool, setSimpleSelectionAnswerBool] = useState('');


  // Multiple Selection
  const [multipleSelectionQuestion, setMultipleSelectionQuestion] = useState('');

  const [multipleSelectionFirstAnswerValue, setMultipleSelectionFirstAnswerValue] = useState(null);
  const [multipleSelectionSecondAnswerValue, setMultipleSelectionSecondAnswerValue] = useState(null);
  const [multipleSelectionThirdAnswerValue, setMultipleSelectionThirdAnswerValue] = useState(null);
  const [multipleSelectionFourthAnswerValue, setMultipleSelectionFourthAnswerValue] = useState(null);

  const [multipleSelectionAnswerBool, setMultipleSelectionAnswerBool] = useState([]);


  // True/False
  const [trueFalseQuestion, setTrueFalseQuestion] = useState('');
  const [trueFalseValue, setTrueFalseValue] = useState(false);


  // Sort Word
  const [sortWord, setSortWord] = useState('');


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

  const setActivityTypeFunction = (value) => {
    setSelectedActivityType(value)
    activityTypes.map((at) => {
      if (at.name == value) {
        setSelectedActivityId(at.id)
      }
    })
  }

  const onCreate = () => {
    let activity = {}
    let answers = []

    if (selectedActivityType == 'Selección simple') {
      activity = {
        content: selectedContent,
        activityType: selectedActivityId,
        object: selectedObject,
        name: activityName,
        question: simpleSelectionQuestion,
        max_qualification: maxQualification,
        startDate: dateStart.toISOString().split('T')[0],
        finishDate: dateEnd.toISOString().split('T')[0]
      }

      answers = [
        {
          title: simpleSelectionFirstAnswerValue,
          isCorrect: 'false',
          activity: ''
        },
        {
          title: simpleSelectionSecondAnswerValue,
          isCorrect: 'false',
          activity: ''
        },
        {
          title: simpleSelectionThirdAnswerValue,
          isCorrect: 'false',
          activity: ''
        },
        {
          title: simpleSelectionFourthAnswerValue,
          isCorrect: 'false',
          activity: ''
        }
      ]

      answers[simpleSelectionAnswerBool].isCorrect = 'true'

      console.log('activity')
      console.log(activity)
      console.log('answers')
      console.log(answers)
    } else if (selectedActivityType == 'Selección múltiple') {
      activity = {
        content: selectedContent,
        activityType: selectedActivityId,
        object: selectedObject,
        name: activityName,
        question: multipleSelectionQuestion,
        max_qualification: maxQualification,
        startDate: dateStart.toISOString().split('T')[0],
        finishDate: dateEnd.toISOString().split('T')[0]
      }

      answers = [
        {
          title: multipleSelectionFirstAnswerValue,
          isCorrect: 'false',
          activity: ''
        },
        {
          title: multipleSelectionSecondAnswerValue,
          isCorrect: 'false',
          activity: ''
        },
        {
          title: multipleSelectionThirdAnswerValue,
          isCorrect: 'false',
          activity: ''
        },
        {
          title: multipleSelectionFourthAnswerValue,
          isCorrect: 'false',
          activity: ''
        }
      ]

      multipleSelectionAnswerBool.map((value) => answers[value].isCorrect = 'true')

      console.log('activity')
      console.log(activity)
      console.log('answers')
      console.log(answers)
    } else if (selectedActivityType == 'Verdadero y falso') {
      activity = {
        content: selectedContent,
        activityType: selectedActivityId,
        object: selectedObject,
        name: activityName,
        question: trueFalseQuestion,
        max_qualification: maxQualification,
        startDate: dateStart.toISOString().split('T')[0],
        finishDate: dateEnd.toISOString().split('T')[0]
      }

      answers = [
        {
          title: 'Verdadero',
          isCorrect: 'false',
          activity: ''
        },
        {
          title: 'Falso',
          isCorrect: 'false',
          activity: ''
        }
      ]
      if (trueFalseValue) {
        answers[0].isCorrect = 'true'
      } else {
        answers[0].isCorrect = 'false'
      }

      console.log('activity')
      console.log(activity)
      console.log('answers')
      console.log(answers)
    } else if (selectedActivityType == 'Ordene la palabra') {
      activity = {
        content: selectedContent,
        activityType: selectedActivityId,
        object: selectedObject,
        name: activityName,
        question: sortWord,
        max_qualification: maxQualification,
        startDate: dateStart.toISOString().split('T')[0],
        finishDate: dateEnd.toISOString().split('T')[0]
      }

      console.log(activity)
    }

    saveActivity(activity).then((res) => {
      console.log('res.data.content saveActivity');
      console.log(res.data.content);
      let _answers = answers.map((answer) => {
        return {
          ...answer,
          activity: res.data.content.id
        }
      })

      console.log('ANSWERS FINAL');
      console.log(_answers);
      saveAnswers(_answers).then((res) => {
        console.log('res.data.content saveAnswers');
        console.log(res.data.content);
        navigate('ClassroomRouter', { screen: 'ActivitiesList' });

      }).catch((error) => {
        setActivityTypes([])
        setContents([])
        setObjects([])
        setSelectedActivityType(null)
        setSelectedContent(null)
        setSelectedObject(null)

        setActivityName('')
        setMaxQualification('')
        setDateStart(new Date())
        setDateEnd(new Date())

        setSimpleSelectionQuestion('')
        setSimpleSelectionFirstAnswerValue(null)
        setSimpleSelectionSecondAnswerValue(null)
        setSimpleSelectionThirdAnswerValue(null)
        setSimpleSelectionFourthAnswerValue(null)
        setSimpleSelectionAnswerBool('')

        setMultipleSelectionQuestion('')
        setMultipleSelectionFirstAnswerValue(null)
        setMultipleSelectionSecondAnswerValue(null)
        setMultipleSelectionThirdAnswerValue(null)
        setMultipleSelectionFourthAnswerValue(null)
        setMultipleSelectionAnswerBool([])

        setTrueFalseQuestion('')
        setTrueFalseValue(false)

        setSortWord('')

        console.log('Error:');
        console.log(error);
      })
    }).catch((error) => {
      setActivityTypes([])
      setContents([])
      setObjects([])
      setSelectedActivityType(null)
      setSelectedContent(null)
      setSelectedObject(null)

      setActivityName('')
      setMaxQualification('')
      setDateStart(new Date())
      setDateEnd(new Date())

      setSimpleSelectionQuestion('')
      setSimpleSelectionFirstAnswerValue(null)
      setSimpleSelectionSecondAnswerValue(null)
      setSimpleSelectionThirdAnswerValue(null)
      setSimpleSelectionFourthAnswerValue(null)
      setSimpleSelectionAnswerBool('')

      setMultipleSelectionQuestion('')
      setMultipleSelectionFirstAnswerValue(null)
      setMultipleSelectionSecondAnswerValue(null)
      setMultipleSelectionThirdAnswerValue(null)
      setMultipleSelectionFourthAnswerValue(null)
      setMultipleSelectionAnswerBool([])

      setTrueFalseQuestion('')
      setTrueFalseValue(false)

      setSortWord('')

      console.log('Error:');
      console.log(error);
    })
  }

  useEffect(() => {
    setActivityTypes([])
    setContents([])
    setObjects([])
    setSelectedActivityType(null)
    setSelectedContent(null)
    setSelectedObject(null)

    setActivityName('')
    setMaxQualification('')
    setDateStart(new Date())
    setDateEnd(new Date())

    setSimpleSelectionQuestion('')
    setSimpleSelectionFirstAnswerValue(null)
    setSimpleSelectionSecondAnswerValue(null)
    setSimpleSelectionThirdAnswerValue(null)
    setSimpleSelectionFourthAnswerValue(null)
    setSimpleSelectionAnswerBool('')

    setMultipleSelectionQuestion('')
    setMultipleSelectionFirstAnswerValue(null)
    setMultipleSelectionSecondAnswerValue(null)
    setMultipleSelectionThirdAnswerValue(null)
    setMultipleSelectionFourthAnswerValue(null)
    setMultipleSelectionAnswerBool([])

    setTrueFalseQuestion('')
    setTrueFalseValue(false)

    setSortWord('')

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

  useEffect(() => {
    console.log('multipleSelectionAnswerBool');
    console.log(multipleSelectionAnswerBool);
  }, [multipleSelectionAnswerBool])

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
            <Input size="lg" variant="underlined" placeholder="Nombre de la actividad" value={activityName} onChangeText={(value) => setActivityName(value)} />
            <Box>
              <Select selectedValue={selectedActivityType} minWidth="200" accessibilityLabel="Activity" placeholder="Tipo de actividad" _selectedItem={{
                bg: "info.600",
                color: '#404040',
                placeholderTextColor: '#404040',
                endIcon: <CheckIcon size="5" />,
              }}
                mt={1} onValueChange={value => setActivityTypeFunction(value)}
                style={{ ...style.text.smSelect }}
              >
                {activityTypes.map((activityType, index) => {
                  return (
                    <Select.Item key={activityType.id} label={activityType.name} value={activityType.name} />
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
                {contents && contents.length ? contents.map((content, index) => {
                  return (
                    <Select.Item key={content.id} label={content.name} value={content.id} />
                  );
                }) :
                  <Select.Item key={'No hay contenido'} label={'No hay contenido'} value={'No hay contenido'} />
                }
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
                    <Select.Item key={object.id} label={object.name} value={object.id} />
                  );
                })}

              </Select>
            </Box>
            <Input size="lg" variant="underlined" placeholder="Ponderación" value={maxQualification} onChangeText={(value) => setMaxQualification(value)} />
            <Text style={{ color: style.color.primary, fontSize: 20, textAlign: 'center', marginLeft: 10, marginTop: 5 }} >{selectedActivityType}</Text>

            {
              selectedActivityType ? (
                selectedActivityType == 'Selección simple' ? (
                  <View>
                    <Input size="lg" variant="underlined" placeholder="Ingrese la pregunta" value={simpleSelectionQuestion} onChangeText={(value) => setSimpleSelectionQuestion(value)} />
                    <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={simpleSelectionAnswerBool} onChange={value => {
                      setSimpleSelectionAnswerBool(value);
                    }}>
                      <Radio key={'simpleanswer0'} value={'0'} my={1}>
                        <Input size="lg" variant="unstyled" placeholder="Respuesta #1" value={simpleSelectionFirstAnswerValue} onChangeText={(value) => setSimpleSelectionFirstAnswerValue(value)} />
                      </Radio>
                      <Radio key={'simpleanswer1'} value={'1'} my={1}>
                        <Input size="lg" variant="unstyled" placeholder="Respuesta #2" value={simpleSelectionSecondAnswerValue} onChangeText={(value) => setSimpleSelectionSecondAnswerValue(value)} />
                      </Radio>
                      <Radio key={'simpleanswer2'} value={'2'} my={1}>
                        <Input size="lg" variant="unstyled" placeholder="Respuesta #3" value={simpleSelectionThirdAnswerValue} onChangeText={(value) => setSimpleSelectionThirdAnswerValue(value)} />
                      </Radio>
                      <Radio key={'simpleanswer3'} value={'3'} my={1}>
                        <Input size="lg" variant="unstyled" placeholder="Respuesta #4" value={simpleSelectionFourthAnswerValue} onChangeText={(value) => setSimpleSelectionFourthAnswerValue(value)} />
                      </Radio>
                    </Radio.Group>
                  </View>
                ) :
                  selectedActivityType == 'Selección múltiple' ? (
                    <View>
                      <Input size="lg" variant="underlined" placeholder="Ingrese la pregunta" value={multipleSelectionQuestion} onChangeText={(value) => setMultipleSelectionQuestion(value)} />
                      <Checkbox.Group value={multipleSelectionAnswerBool} onChange={(value) => setMultipleSelectionAnswerBool(value)} accessibilityLabel="">
                        <Checkbox key={'multipleanswer0'} value={'0'} my={2}>
                          <Input size="lg" variant="unstyled" placeholder="Respuesta #1" value={multipleSelectionFirstAnswerValue} onChangeText={(value) => setMultipleSelectionFirstAnswerValue(value)} />
                        </Checkbox>
                        <Checkbox key={'multipleanswer1'} value={'1'} my={2}>
                          <Input size="lg" variant="unstyled" placeholder="Respuesta #2" value={multipleSelectionSecondAnswerValue} onChangeText={(value) => setMultipleSelectionSecondAnswerValue(value)} />
                        </Checkbox>
                        <Checkbox key={'multipleanswer2'} value={'2'} my={2}>
                          <Input size="lg" variant="unstyled" placeholder="Respuesta #3" value={multipleSelectionThirdAnswerValue} onChangeText={(value) => setMultipleSelectionThirdAnswerValue(value)} />
                        </Checkbox>
                        <Checkbox key={'multipleanswer3'} value={'3'} my={2}>
                          <Input size="lg" variant="unstyled" placeholder="Respuesta #4" value={multipleSelectionFourthAnswerValue} onChangeText={(value) => setMultipleSelectionFourthAnswerValue(value)} />
                        </Checkbox>
                      </Checkbox.Group>
                    </View>
                  ) :
                    selectedActivityType == 'Verdadero y falso' ? (
                      <View>
                        <Input size="lg" variant="underlined" placeholder="Ingrese la pregunta" value={trueFalseQuestion} onChangeText={(value) => setTrueFalseQuestion(value)} />
                        <VStack space={4} alignItems="flex-start" flexDirection={'row'}>
                          <Switch size="lg" value={trueFalseValue} onChange={value => setTrueFalseValue(value.nativeEvent.value)} />
                          <Text style={{ color: style.color.primary, fontSize: 20, textAlign: 'center', marginLeft: 10, marginTop: 5 }} >{trueFalseValue ? 'Verdadero' : 'Falso'}</Text>
                        </VStack>
                      </View>
                    ) :
                      selectedActivityType == 'Ordene la palabra' ? (
                        <View>
                          <Input size="lg" variant="underlined" placeholder="Ingrese la palabra" value={sortWord} onChangeText={(value) => setSortWord(value)} />
                        </View>
                      ) : <View></View>
              ) : <View></View>
            }

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

            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} onPress={(event) => onCreate()}>Crear Actividad</Button>
          </Stack>
        </Center>
      </View>
    </ScrollView>
  );
};

export default CreateActivity;
