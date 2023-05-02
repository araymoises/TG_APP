import React,{useEffect,useState} from 'react';
import {
  Text,
  View,
  Input, 
  Stack, 
  VStack,
  Center,
  Button,
  Box,
  ScrollView,
  Pressable,
  Alert,
  HStack,
  IconButton,
  CloseIcon,
  Image,
} from 'native-base';
import style from '~styles';


import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {getClassrooms  } from "./../../../api";
import {getUserData  } from "./../../../api";
import { updateError  } from "../validations/Validations";
import AlertError from './AlertError';
import AlertSuccess from './AlertSuccess';

const Classrooms = ({ navigation,route }) => {
  const navigate = navigation.navigate;
  const [classrooms, setClassrooms] = useState([]);
  const [message,setMessage]= useState('');
  const [messageSuccess,setMessageSuccess] = useState('');
  const [isTeacher,setIsTeacher] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  
  const onCreate = () => {
    navigate('ClassroomAdminRouter', { screen: 'CreateClassroom' });
  }
  
  const onPressElement = (classroom) => {
    navigate('ClassroomRouter',{ screen: 'ClassroomDetail', params: { id: classroom._id}});
  }

  const loadClassrooms = () => {
    getClassrooms()
      .then((res) => {
        setClassrooms(res.data.content);
      })
      .catch((error) => {
        console.log(error);
        if(error.response){
          setMessage(error.response.data.message);
        }
        else{
          setMessage('Ha ocurrido un error interno');
        }
        
      });
  }

  useEffect(() => {
    loadClassrooms()
  }, [classrooms])

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

  useEffect(() => {
    console.log('useEffect called:'+route.params?.messageSuccess);
    if (route.params?.messageSuccess) {
      setMessageSuccess(route.params.messageSuccess)
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setMessageSuccess('');
      }, 3000);
    }
  }, [route.params?.messageSuccess]);
  
  return (
    <View style={{ flex: 1 }} >
      <ScrollView h="80" _contentContainerStyle={{
        pb: "4",
        mb: "4",
        minW: "100%",
        alignItems: 'center', 
        justifyContent: 'flex-start'
      }}>
        {message ?
          <AlertError error={message}/>
        :null
        }
         {showAlert &&
          <AlertSuccess success={messageSuccess}
        />}

         {classrooms.map((classroom, item) => (
          <VStack mt={5} key={item} space={4} w="100%" maxW="400px" style={{ backgroundColor: '#F6F6F6', height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
          
              <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={() => onPressElement(classroom)}>
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <View style={{ backgroundColor: style.color.primary, height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                    <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>{classroom.name}</Text>
                  </View>
                </View>
                <View style={{ flex: 5, paddingLeft: 10 }}>
                  <Text mt={2} style={{ ...style.text.md, fontWeight: 'bold' }}>{classroom.description}</Text>
                  <Text mt={2} style={{ ...style.text.sm }}>Cantidad de alumnos: {classroom.studentsQuantity}</Text>
                  <Text mt={2} style={{ ...style.text.sm }}>Progreso: 42%</Text>
                </View>
              </Pressable>
          
          </VStack>
       ))}

      </ScrollView>
      {isTeacher &&
        (<Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="plus" size={15} color={ style.color.secondary } />} _text={{ color: style.color.secondary }} onPress={onCreate}>Nueva Aula</Button>)
          
      }
    </View>
  );
};

export default Classrooms;
