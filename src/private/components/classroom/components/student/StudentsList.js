import React, { useEffect, useState } from 'react';
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
import randomColor from '../../../../../services/colorNames';
import AlertError from '~private/components/AlertError';
import { useSelector } from 'react-redux';

import { getStudents } from 'api';

// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './../../../../redux/reducers/counterSlice';

const StudentsList = ({ navigation }) => {
  const navigate = navigation.navigate;
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  const classroomId = useSelector((state) => state.classroomId.value);
  const [students,setStudents] = useState([]);
  const [message,setMessage]= useState('');

  const onCreate = () => {
    console.log('Nuevo elemento.');
    navigate('PrivateRouter', { screen: 'StudentRouter' });
  }
  
  const onPressElement = (event) => {
    console.log('Pesionando elemento.');
    // dispatch(increment());
  }
  
  const loadStudents = () => {
    getStudents(classroomId)
      .then((res) => {
        setStudents(res.data.content);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          setMessage(error.response.data.message);
        }
        else {
          setMessage('Ha ocurrido un error interno');
        }

      });
  }

  useEffect(() => {
    loadStudents()
  }, [])



  return (
    <View style={{ flex: 1, marginLeft: 5, backgroundColor: 'white' }} >
      <ScrollView h="80" _contentContainerStyle={{
        pb: "4",
        minW: "100%",
        alignItems: 'center', justifyContent: 'flex-start'
      }}>
        {message ?
          <AlertError error={message} />
          : null
        }
         {students.map((student, item) => (

        <VStack mt={5} key={item} space={4} w="100%" maxW="400px"  style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
            <View style={{ flex: 1, marginLeft: 5, marginLeft: 5 }}>
              <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                {/* <Icon name="graduation-cap" size={40} color="#F6F6F6" /> */}
                <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>{student.firstname.charAt(0)} {student.lastname.charAt(0)}</Text>
              </View>
            </View>
            <View style={{ flex: 5, paddingLeft: 10 }}>
              <Text style={{ ...style.text.sm }}>{student.firstname} , {student.lastname}</Text>
            </View>
          </Pressable>
        </VStack>
         ))}
      </ScrollView>

      <Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="plus" size={15} color={ style.color.secondary } />} _text={{ color: style.color.secondary }} onPress={onCreate}>Nuevo Alumno</Button>
    </View>
  );
};

export default StudentsList;
