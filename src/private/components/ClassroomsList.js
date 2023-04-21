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
} from 'native-base';
import style from '~styles';


import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {getClassrooms  } from "./../../../api";


const Classrooms = ({ navigation }) => {
  const navigate = navigation.navigate;
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0M2ZkZDRjY2M1ZmRmMDM5Y2U4YzM2OCIsIm5hbWUiOiJDcmlzbGVpdnlzIEdpbCIsInRlYWNoZXIiOnsiX2lkIjoiNjQzZmRkNGJjYzVmZGYwMzljZThjMzY3IiwiZmlyc3RuYW1lIjoiQ3Jpc2xlaXZ5cyIsImxhc3RuYW1lIjoiR2lsIiwiZW1haWwiOiJjcmlzbGVpdnlzbmdpbEBnbWFpbC5jb20iLCJwaG9uZSI6IjA0MjYyMjkxOTUxIiwiX192IjowLCJpZCI6IjY0M2ZkZDRiY2M1ZmRmMDM5Y2U4YzM2NyJ9LCJlbWFpbCI6ImNyaXNsZWl2eXNuZ2lsQGdtYWlsLmNvbSIsImNyZWF0ZWQiOiIyMDIzLTA0LTE5VDEyOjIzOjQwLjAxMloiLCJtb2RpZmllZCI6IjIwMjMtMDQtMTlUMTI6MjM6NDAuMDEyWiIsIl9fdiI6MCwiaWQiOiI2NDNmZGQ0Y2NjNWZkZjAzOWNlOGMzNjgifSwiaWF0IjoxNjgyMDg5MjczLCJleHAiOjE2ODIxNzU2NzN9.2ET9cbpPQknoybQOuFZmKjV_wvpb_UR3fzJhidcz6GA"

  const [classrooms, setClassrooms] = useState([]);
  const onCreate = () => {
    console.log('Nuevo aula');
    navigate('ClassroomAdminRouter', { screen: 'CreateClassroom' });
  }
  
  const onPressElement = (event) => {
    console.log('Pesionando elemento.');
    navigate('ClassroomRouter');
    // navigation.navigate('PublicRouter', { screen: 'Login' });
  }

  const loadClassrooms = async() =>{
    const res = await getClassrooms();
    setClassrooms(res.data.content);
  }

  useEffect(() => {
    loadClassrooms()
  }, [])
  
  return (
    <View style={{ flex: 1 }} >
      <ScrollView h="80" _contentContainerStyle={{
        pb: "4",
        mb: "4",
        minW: "100%",
        alignItems: 'center', 
        justifyContent: 'flex-start'
      }}>
         {classrooms.map((classroom, item) => (
          <VStack mt={5} key={item} space={4} w="100%" maxW="400px" style={{ backgroundColor: '#F6F6F6', height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
          
              <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <View style={{ backgroundColor: style.color.primary, height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                    {/* <Icon name="graduation-cap" size={40} color="#F6F6F6" /> */}
                    <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>{classroom.name}</Text>
                  </View>
                </View>
                <View style={{ flex: 5, paddingLeft: 10 }}>
                  <Text mt={2} style={{ ...style.text.md, fontWeight: 'bold' }}>{classroom.description}</Text>
                  <Text mt={2} style={{ ...style.text.sm }}>Cantidad de alumnos: 11</Text>
                  <Text mt={2} style={{ ...style.text.sm }}>Progreso: 42%</Text>
                </View>
              </Pressable>
          
          </VStack>
       ))}

      </ScrollView>
   
      <Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="plus" size={15} color={ style.color.secondary } />} _text={{ color: style.color.secondary }} onPress={onCreate}>Nueva Aula</Button>
    </View>
  );
};

export default Classrooms;
