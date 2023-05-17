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
import { getUserData, getStudentById, unlinkStudent } from "../../../../../../../api";

const ContentDetail = ({ navigation, route }) => {
  const id = route.params?.id || '';
  const navigate = navigation.navigate;
  const [isTeacher, setIsTeacher] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [student, setStudent] = useState(null);

  const onActivity = () => {
    console.log('Nuevo contenido.');
    //navigate('ContentsRouter', { screen: 'ContentEdit' });
    navigate('ActivityView');
  }

  const getUser = async () => {
    const user = await getUserData();
    if (user.teacher) {
      setIsTeacher(true);
    }
  }

  useEffect(() => {
    setStudent(null)
    getUser()
    getStudentById(id).then((res) => {
      console.log('Student detail response:');
      console.log(res.data);
      setStudent(res.data.content)
    }).catch((error) => {
      setStudent(null)
      console.log('Error:');
      console.log(error);
    })
  }, [id])

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
    setShowModal(false);
    if (student) {
      unlinkStudent(student.id).then((res) => {
        console.log(res.data.content);
        navigate('ClassroomRouter', { screen: 'StudentsList' });
      }).catch((error) => {
        console.log('Error:');
        console.log(error.response);
      })
    }
  }

  return (
    <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 20, paddingBottom: 100 }}>
        {
          student ? (
            <>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 3 }}>
                  <Text marginTop={5} style={{ ...style.text.title, color: style.color.primary, fontWeight: 'bold' }}>{student.firstname + ' ' + student.lastname}</Text>
                </View>
                {
                  isTeacher ?
                    (
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Button style={{ backgroundColor: style.color.red, borderRadius: 20 }} leftIcon={<Icon name="trash" size={18} color={style.color.white} />} _text={{ color: style.color.secondary }} onPress={() => setShowModal(true)}></Button>
                      </View>
                    ) : <View></View>
                }
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Text marginBottom={5} marginTop={5} style={{ ...style.text.md, color: style.color.primary, fontWeight: 'bold' }}>Correo: {student.email}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Text marginTop={5} style={{ ...style.text.subtitle, color: style.color.tertiary, fontWeight: 'bold' }}>Actividades finalizadas:</Text>
                </View>
              </View>

              {
                student.qualifications.length ? (
                  student.qualifications.map((qualification,  item) =>
                    qualification.activity ? (
                      <View key={ item} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                          <Text marginLeft={5} marginTop={5} style={{ ...style.text.md, color: style.color.primary, fontWeight: '500' }}>{qualification.activity.name + ': ' + qualification.qualification + ' puntos.'}</Text>
                        </View>
                      </View>
                    ) : <View></View>
                  )
                ) : <Text marginLeft={5} style={{ ...style.text.sm, lineHeight: 20 }}>No ha realizado ninguna actividad.</Text>
              }

              <Center>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                  <Modal.Content maxWidth="400px">
                    <Modal.Body>
                      <Text style={{ ...style.text.sm, lineHeight: 20 }}>¿Está seguro que desea eliminar el alumno del aula?</Text>
                    </Modal.Body>
                    <Modal.Footer borderTopWidth={0}>
                      <Button.Group space={2}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                          setShowModal(false);
                        }}>
                          Cancelar
                        </Button>
                        <Button onPress={() => {
                          onDelete()
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
            </>

          )
            : <Text style={{ ...style.text.sm, lineHeight: 20 }}>Cargando datos del alumno...</Text>

        }
      </ScrollView>

    </View >





  );
};

export default ContentDetail;
