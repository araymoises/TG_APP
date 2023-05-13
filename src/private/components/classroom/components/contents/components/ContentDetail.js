import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  Center,
  ScrollView,
  AspectRatio,
  Button,
  Modal
} from 'native-base';
import style from '~styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getUserData, getContentById } from "../../../../../../../api";

const ContentDetail = ({ navigation, route }) => {
  const id = route.params?.id || '';
  const navigate = navigation.navigate;
  const [isTeacher, setIsTeacher] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(null);

  const onActivity = () => {
    console.log('Nuevo contenido.');
    //navigate('ContentsRouter', { screen: 'ContentEdit' });
    navigate('ActivityView');
  }
  const onEdit = () => {
    console.log('Editar contenido.');
    navigate('ContentsRouter', { screen: 'ContentEdit' });
  }

  const getUser = async () => {
    const user = await getUserData();
    if (user.teacher) {
      setIsTeacher(true);
    }
  }

  useEffect(() => {
    setContent(null)
    getUser()
    getContentById(id).then((res) => {
      console.log('Content detail response:');
      let _content = res.data.content
      _content.description = JSON.parse(_content.description)

      console.log(' _content.description');
      console.log(_content.description[0]);
      console.log(res.data.message);
      console.log(res.data);
      setContent(_content)
    }).catch((error) => {
      setContent(null)
      console.log('Error:');
      console.log(error);
    })
  }, [])

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

  const onDelete = () => {


  }

  return (
    <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 20 }}>
        {
          content ? (
            <>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 3 }}>
                  <Text marginBottom={5} marginTop={5} style={{ ...style.text.title, color: style.color.primary, fontWeight: 'bold' }}>{content.name}</Text>
                </View>
                {isTeacher &&
                  (
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                      <Button style={{ backgroundColor: style.color.red, borderRadius: 20 }} leftIcon={<Icon name="trash" size={18} color={style.color.white} />} _text={{ color: style.color.secondary }} onPress={() => setShowModal(true)}></Button>
                    </View>
                  )
                }
              </View>
              {
                content.description.map((section, index) => {
                  return (<Pressable key={index}>
                    <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
                      <Text style={sectionTextStyle(section.sectionType)} >{section.sectionText}</Text>
                    </View>
                  </Pressable>)
                })
              }
              <View style={{ paddingVertical: 10 }}>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image source={{
                    uri: "https://www.foroabierto.org/wp-content/uploads/2020/11/Fomento-de-la-Lectura.jpg"
                  }} alt="image" />
                </AspectRatio>
              </View>
              <View style={{ paddingVertical: 10 }}>
                <Text style={{ ...style.text.title, fontSize: 16, textAlign: 'justify', marginBottom: 8 }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
              </View>
              <View style={{ paddingVertical: 10 }}>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image source={{
                    uri: "https://i0.wp.com/www.orientacionandujar.es/wp-content/uploads/2017/04/tarjetas-para-fomentar-la-lectura-a-todo-color-6.jpg?resize=1024%2C709&ssl=1"
                  }} alt="image" />
                </AspectRatio>
              </View>
              <View style={{ paddingVertical: 10 }}>
                <Text style={{ ...style.text.title, fontSize: 16, textAlign: 'justify', marginBottom: 8 }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                <Text style={{ ...style.text.title, fontSize: 16, textAlign: 'justify', marginBottom: 8 }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Text>
                <Text style={{ ...style.text.title, fontSize: 16, textAlign: 'justify', marginBottom: 8 }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
              </View>

              <Center>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                  <Modal.Content maxWidth="400px">
                    <Modal.Body>
                      <Text style={{ ...style.text.sm, lineHeight: 20 }}>¿Está seguro que desea eliminar el contenido?</Text>
                    </Modal.Body>
                    <Modal.Footer borderTopWidth={0}>
                      <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                          setShowModal(false);
                        }}>
                          Cancelar
                        </Button>
                        <Button onPress={() => {
                          setShowModal(false);
                        }}
                          style={{ backgroundColor: style.color.red }} leftIcon={<Icon name="trash" size={18} color={style.color.white} />} _text={{ color: style.color.secondary }}
                        >
                          Eliminar
                        </Button>
                      </Button.Group>
                    </Modal.Footer>
                  </Modal.Content>
                </Modal>
              </Center>
              {!isTeacher ?
                (
                  <Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} rightIcon={<Icon name="play" size={15} color={style.color.secondary} />} _text={{ color: style.color.secondary }} onPress={onActivity}>Realizar actividad</Button>
                ) : <View></View>
              }

              {isTeacher ?
                (
                  <Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="edit" size={15} color={style.color.secondary} />} _text={{ color: style.color.secondary }} onPress={onEdit}>Editar Contenido</Button>
                ) : <View></View>
              }
            </>

          ) : <Text style={{ ...style.text.sm, lineHeight: 20 }}>Cargando contenido...</Text>
        }
      </ScrollView>

    </View>





  );
};

export default ContentDetail;
