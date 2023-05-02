import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Input,
  Stack,
  Center,
  Button,
  FormControl,
  Pressable,
  ScrollView,
  Modal,
  Box,
  Select,
  CheckIcon,
  Text,
} from 'native-base';

// import { RichEditor } from 'react-native-pell-rich-editor'
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import style from '~styles';

import { saveContent } from './../.././../../../../../api'

const CreateContents = ({ navigation, route }) => {
  const navigate = navigation.navigate;
  const [showModalNewSection, setShowModalNewSection] = useState(false);
  const [showModalCancelCreation, setShowModalCancelCreation] = useState(false);
  const [showModalSaveContent, setShowModalSaveContent] = useState(false);
  const [showModaldeleteSection, setShowModaldeleteSection] = useState(false);
  const [contentName, setContentName] = useState(route.params.contentName || '');
  const [sectionText, setSectionText] = useState('');
  const [sectionType, setSectionType] = useState('');
  const [sections, setSections] = useState([]);
  const [sectionToDelete, setSectionToDelete] = useState(null);
  const classroomId = useSelector((state) => state.classroomId.value);

  useEffect(() => {
    setContentName(route.params.contentName)
  }, [route.params.contentName])

  const newSection = () => {
    setSectionText('')
    setSectionType('')
    setShowModalNewSection(true)
  }

  const createSection = () => {
    let _sections = JSON.parse(JSON.stringify(sections))
    _sections.push({
      sectionType,
      sectionText
    })
    setSections(_sections)
    setShowModalNewSection(false)
  }

  const saveNewContent = () => {
    setShowModalSaveContent(false)

    const newContent = {
      "name": contentName,
      "description": JSON.stringify(sections),
      "classroom": classroomId
    }
    console.log('newContent');
    console.log(newContent);

    saveContent(newContent)
      .then((res) => res.data.content)
      .then((content) => {
        console.log('content');
        console.log(content);
        navigate('ContentsRouter', { screen: 'ContentsList' });
      }).catch((error) => {

      })

    setSections([])
  }

  const cancelContentCreation = () => {
    setShowModalCancelCreation(false)
    setSections([])
    navigate('ContentsRouter', { screen: 'ContentsList' });
  }

  const deleteSectionOne = (index) => {
    setSectionToDelete(index)
    setShowModaldeleteSection(true)
  }

  const deleteSectionTwo = () => {
    let _sections = JSON.parse(JSON.stringify(sections))

    _sections.splice(sectionToDelete, 1);
    setSections(_sections)
    setShowModaldeleteSection(false)
  }

  const sectionTextStyle = (sectionType) => {
    if (sectionType == 'title') {
      return {
        color: '#202123',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center'
      }
    }
    else if (sectionType == 'subtitle') {
      return {
        color: '#202123',
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'left'
      }
    }
    else if (sectionType == 'paragraph') {
      return {
        color: '#343541',
        fontWeight: 'normal',
        fontSize: 16,
        textAlign: 'left'
      }
    }
  }

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20, width: '100%', backgroundColor: 'white' }}>
          <Center>
            <Stack mt={2} space={4} w="100%" maxW="400px">
              {
                sections.map((section, index) => {
                  return (<Pressable key={index} onLongPress={() => deleteSectionOne(index)}>
                    <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
                      <Text style={sectionTextStyle(section.sectionType)} >{section.sectionText}</Text>
                    </View>
                  </Pressable>)
                })
              }
              <Pressable onPress={() => newSection()}>
                <View style={{ flex: 1, paddingHorizontal: 20, height: 100, justifyContent: 'center', width: '100%', backgroundColor: 'white', borderRadius: 10, borderStyle: 'dashed', borderWidth: 3, borderColor: '#babfc4' }}>
                  <Text style={{ color: style.color.tertiary, fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 10 }} >{sections.length ? 'Agregar nueva sección' : '¡Toca aquí para agregar tu primera sección del contenido!'}</Text>
                  <Text style={{ color: style.color.tertiary, fontWeight: 'bold', fontSize: 25, textAlign: 'center', marginTop: 10 }} >+</Text>
                </View>
              </Pressable>
              <View style={{ flexDirection: 'row' }}>
                {
                  sections.length ?
                    (<>
                      <Pressable style={{ flex: 1 }} onPress={() => setShowModalCancelCreation(true)}>
                        <View style={{ flex: 1, paddingHorizontal: 20, height: 50, marginRight: 5, justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, borderStyle: 'dotted', borderWidth: 3, borderColor: '#babfc4' }}>
                          <Text style={{ color: style.color.red, fontWeight: 'bold', fontSize: 16, textAlign: 'center' }} >Cancelar Contenido</Text>
                        </View>
                      </Pressable>
                      <Pressable style={{ flex: 1 }} onPress={() => setShowModalSaveContent(true)}>
                        <View style={{ flex: 1, paddingHorizontal: 20, height: 50, marginLeft: 5, justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, borderStyle: 'dotted', borderWidth: 3, borderColor: '#babfc4' }}>
                          <Text style={{ color: style.color.tertiary, fontWeight: 'bold', fontSize: 16, textAlign: 'center' }} >Finalizar Contenido</Text>
                        </View>
                      </Pressable>
                    </>) : (<View></View>)
                }
              </View>
            </Stack>
          </Center>
        </View>
      </ScrollView>


      {/* New section modal */}
      <Center>
        <Modal isOpen={showModalNewSection} onClose={() => setShowModalNewSection(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.Body>
              <Text style={{ ...style.text.sm, lineHeight: 20 }}>Creación de sección de contenido</Text>
              <Text style={{ ...style.text.sm, lineHeight: 20 }}>----------------</Text>
              <FormControl>
                <FormControl.Label>Tipo de sección</FormControl.Label>
                <Box>
                  <Select selectedValue={sectionType} minWidth="200" accessibilityLabel="SectionType" placeholder="Tipo de sección" _selectedItem={{
                    bg: "info.600",
                    color: '#404040',
                    placeholderTextColor: '#404040',
                    endIcon: <CheckIcon size="5" />,
                  }}
                    mt={1} onValueChange={(value) => setSectionType(value)}
                    style={{ ...style.text.smSelect }}
                  >
                    <Select.Item label="Título" value="title" />
                    <Select.Item label="Subtítulo" value="subtitle" />
                    <Select.Item label="Párrafo" value="paragraph" />
                  </Select>
                </Box>
              </FormControl>
              <FormControl>
                <FormControl.Label>Texto</FormControl.Label>
                <Input value={sectionText} onChangeText={(value) => setSectionText(JSON.parse(JSON.stringify(value)))} />
              </FormControl>
            </Modal.Body>
            <Modal.Footer borderTopWidth={0}>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                  setShowModalNewSection(false);
                }}>
                  Cancelar
                </Button>
                <Button onPress={() => createSection()} style={{ backgroundColor: style.color.primary }} leftIcon={<Icon name="trash" size={18} color={style.color.white} />} _text={{ color: style.color.secondary }}>
                  Crear
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>

      {/* Cancel creation modal */}
      <Center>
        <Modal isOpen={showModalCancelCreation} onClose={() => setShowModalCancelCreation(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.Body>
              <Text style={{ ...style.text.md, lineHeight: 20, fontWeight: 'bold' }}>¿Desea cancelar la creación de este contenido?</Text>
              <Text style={{ ...style.text.sm, lineHeight: 20 }}>Advertencia: Se perderá todo lo que ha agregado en este contenido.</Text>
            </Modal.Body>
            <Modal.Footer borderTopWidth={0}>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => setShowModalCancelCreation(false)}>
                  No
                </Button>
                <Button onPress={() => cancelContentCreation()} style={{ backgroundColor: style.color.red }} leftIcon={<Icon name="trash" size={18} color={style.color.white} />} _text={{ color: style.color.secondary }}>
                  Sí
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>

      {/* Save content modal */}
      <Center>
        <Modal isOpen={showModalSaveContent} onClose={() => setShowModalSaveContent(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.Body>
              <Text style={{ ...style.text.md, lineHeight: 20, fontWeight: 'bold' }}>¿Desea guardar el contenido?</Text>
            </Modal.Body>
            <Modal.Footer borderTopWidth={0}>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => setShowModalSaveContent(false)}>
                  Cancelar
                </Button>
                <Button onPress={() => saveNewContent()} style={{ backgroundColor: style.color.primary }} leftIcon={<Icon name="trash" size={18} color={style.color.white} />} _text={{ color: style.color.secondary }}>
                  Guardar
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>

      {/* Delete section modal */}
      <Center>
        <Modal isOpen={showModaldeleteSection} onClose={() => setShowModaldeleteSection(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.Body>
              <Text style={{ ...style.text.md, lineHeight: 20, fontWeight: 'bold' }}>¿Desea eliminar esta sección?</Text>
            </Modal.Body>
            <Modal.Footer borderTopWidth={0}>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => setShowModaldeleteSection(false)}>
                  No
                </Button>
                <Button onPress={() => deleteSectionTwo()} style={{ backgroundColor: style.color.red }} leftIcon={<Icon name="trash" size={18} color={style.color.white} />} _text={{ color: style.color.secondary }}>
                  Sí
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </>
  );
};

export default CreateContents;
