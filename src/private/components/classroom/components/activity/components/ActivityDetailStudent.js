import React,{useEffect,useState}from 'react';
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
    Text,
    Modal
} from 'native-base'

import style from '~styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getUserData  } from "../../../../../../../api";

const ActivityDetailStudent = ({ navigation }) => {
  const navigate = navigation.navigate;
  const [isTeacher,setIsTeacher] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const onPressElement = (event) => {
    console.log('Pesionando elementox2.');
    navigate('ActivityView');
    // navigation.navigate('PublicRouter', { screen: 'Login' });
  }

  const onEdit = () => {
    console.log('Nueva aula');
    navigate('ActivityRouter', { screen: 'ActivityDetailTeacher' });
  }
  const getUser = async()=>{
    const user =  await getUserData();
    if(user.teacher)
    {
      setIsTeacher(true);
    }

  }
  useEffect(() => {
    getUser()
  }, [])

  const onDelete = ()=>{


  }

  return (
        <ScrollView contentContainerStyle={{  flexGrow: 1,justifyContent: 'flex-start', paddingHorizontal:20,paddingVertical:20}}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 3}}>
            <Text style={{color:style.color.primary, fontWeight: 'bold', fontSize:20, textAlign:'left'}} >Actividad: Reconociendo las Emociones</Text>
          </View>
          {isTeacher &&
          (
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button style={{ backgroundColor:style.color.red, borderRadius: 20}} leftIcon={<Icon name="trash" size={18} color={ style.color.white } />} _text={{ color: style.color.secondary }} onPress={() => setShowModal(true)}></Button>
          </View>
          )
          }
        </View>
        <View mt={4}>
          <Icon name="star" size={25} color={style.color.amber} mx="auto" style={{textAlign:'center'}}/>
        </View>
        <Text mt={4} style={{textAlign:'left', fontSize: 16}} >Tipo de actividad: Selección simple</Text>
        <Text mt={4} style={{textAlign:'left', fontSize: 16}} >Contenido: La familia en inglés</Text>
        <Text mt={4} style={{textAlign:'left', fontSize: 16}} >Ponderación: 20 puntos</Text>
        <Text mt={4} style={{textAlign:'left', fontSize: 16}} >Fecha de inicio: 15/05/2022 08:30 AM</Text>
        <Text mt={4} style={{textAlign:'left', fontSize: 16}} >Fecha de inicio: 15/05/2022 06:00 PM</Text>
        <View mt={4}>
          <Icon name="star" size={25} color={style.color.amber} mx="auto" style={{textAlign:'left'}}/>
        </View>

        <View mt={4}>
          <Icon name="star" size={25} color={style.color.amber} mx="auto" style={{textAlign:'right'}}/>
        </View>

        {!isTeacher &&
        (
          <View style={{ flex: 1, justifyContent: 'center', width: '100%'}}>
                <Center>
                  <Stack space={4} w="100%" maxW="400px">
                    <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} rightIcon={<Icon name="play-circle" size={15} color={ style.color.secondary } />} onPress={(event) => onPressElement(event)}>Realizar actividad</Button>
                  </Stack>
                </Center>
          </View>
        )
        }
         {isTeacher &&
        (<Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="edit" size={15} color={ style.color.secondary } />} _text={{ color: style.color.secondary }} onPress={onEdit}>Editar Actividad</Button>
        )
      }

      <Center>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                  <Modal.Body>
                  <Text style={{ ...style.text.sm,lineHeight: 20}}>¿Está seguro que desea eliminar la actividad?</Text>
                  </Modal.Body>
                  <Modal.Footer borderTopWidth={0}>
                    <Button.Group space={2}>
                      <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                      setShowModal(false);
                    }}>
                        Cancelar
                      </Button>
                      <Button onPress={() => {
                      setShowModal(false);}}
                      style={{ backgroundColor:style.color.red}} leftIcon={<Icon name="trash" size={18} color={ style.color.white } />} _text={{ color: style.color.secondary }}
                      >
                      Eliminar
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
        </Center>
        </ScrollView>
  )
}

export default ActivityDetailStudent
