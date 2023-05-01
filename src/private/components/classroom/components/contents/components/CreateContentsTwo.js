import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Input,
  Stack,
  Center,
  Button,
  TextArea,
  Image,
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

import Icon from 'react-native-vector-icons/FontAwesome';
import style from '~styles';

const CreateContents = () => {
  const [showModal, setShowModal] = useState(false);
  const [sectionText, setSectionText] = useState('');
  const [sectionType, setSectionType] = useState('');
  const [sections, setSections] = useState([]);
  // const richText = useRef(0);

  useEffect(() => {
    console.log('sections');
    console.log(sections);
  }, [sections])

  const newSection = () => {
    setSectionText('')
    setSectionType('')
    setShowModal(true)
  }

  createSection = () => {
    let _sections = JSON.parse(JSON.stringify(sections))
    _sections.push({
      sectionType,
      sectionText
    })
    setSections(_sections)
    setShowModal(false)
  }

  sectionTextStyle = (sectionType) => {
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
                  return (<Pressable>
                    <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
                      <Text style={sectionTextStyle(section.sectionType)} >{section.sectionText}</Text>
                    </View>
                  </Pressable>)
                })
              }
              <Pressable onPress={() => newSection()}>
                <View style={{ flex: 1, paddingHorizontal: 20, height: 100, justifyContent: 'center', width: '100%', backgroundColor: 'white', borderRadius: 10, borderStyle: 'dashed', borderWidth: 3, borderColor: '#babfc4' }}>
                  <Text style={{ color: style.color.tertiary, fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 10 }} >¡Toca aquí para agregar tu primera sección del contenido!</Text>
                  <Text style={{ color: style.color.tertiary, fontWeight: 'bold', fontSize: 25, textAlign: 'center', marginTop: 10 }} >+</Text>
                  {/*
                    <RichEditor
                      ref={richText}
                      onChange={() => {}}
                      placeholder="Texto"
                      androidHardwareAccelerationDisabled={true}
                      initialHeight={250}
                    />
                    */}
                </View>
              </Pressable>
            </Stack>
          </Center>
        </View>
      </ScrollView>
      <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
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
                  setShowModal(false);
                }}>
                  Cancelar
                </Button>
                <Button onPress={() => createSection()}
                  style={{ backgroundColor: style.color.primary }} leftIcon={<Icon name="trash" size={18} color={style.color.white} />} _text={{ color: style.color.secondary }}
                >
                  Crear
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
