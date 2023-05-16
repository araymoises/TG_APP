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

import { getUserData, getActivities, getStudentById, getStudents } from "../../../../../../api";
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './../../../../redux/reducers/counterSlice';

const ActivitiesList = ({ navigation }) => {
  const navigate = navigation.navigate;
  const isFocused = useIsFocused();
  const [isTeacher, setIsTeacher] = useState(false);
  const [activities, setActivities] = useState(null);
  const [studentsQuantity, setStudentsQuantity] = useState(0);
  const [qualifications, setQualifications] = useState([]);
  //const classroomId = useSelector((state) => state.classroomId.value);
  const classroomId = useSelector((state) => state.classroomId.value);

  const onCreate = () => {
    console.log('Nueva aula');
    navigate('ActivityRouter', { screen: 'CreateActivity' });
  }

  const onPressElement = (id) => {
    navigate('ActivityRouter', { screen: 'ActivityDetailStudent', params: { id } });
  }

  const getUser = async () => {
    const user = await getUserData();
    if (user && user.teacher) {
      setIsTeacher(true);
    } else {
      getStudentById(user.student.id).then((res) => {
        console.log('holuwis');
        setQualifications(res.data.content.qualifications.map(qualification => qualification.activity.id))
      }).catch((error) => {
        setQualifications([])
        console.log('Error:');
        console.log(error);
      })
    }
  }

  useEffect(() => {
    setStudentsQuantity(0)
    setActivities(null)
    setQualifications([])
    getUser()
    getActivities(classroomId).then((res) => {
      console.log('Activities list response:');
      console.log(res.data.message);
      setActivities(res.data.content)
    }).catch((error) => {
      setActivities(null)
      console.log('Error:');
      console.log(error);
    })

    getStudents(classroomId).then((res) => {
      console.log('Students quantity response:');
      console.log(res.data.message);
      setStudentsQuantity(res.data.content ? res.data.content.length : 0)
    }).catch((error) => {
      setStudentsQuantity(0)
      console.log('Error:');
      console.log(error);
    })
  }, [isFocused])

  useEffect(() => {
    console.log('qualifications');
    console.log(qualifications);
  }, [qualifications])

  return (
    <View style={{ flex: 1, marginLeft: 5, backgroundColor: 'white' }} >
      <ScrollView h="80" _contentContainerStyle={{
        pb: "4",
        minW: "100%",
        alignItems: 'center', justifyContent: 'flex-start'
      }}>
        {
          activities && activities.length ? (
            activities.map((activity) => {
              let isDoneActivity = false
              const isAtTime = new Date(activity.startDate).toISOString() < new Date().toISOString() && new Date().toISOString() < new Date(activity.finishDate).toISOString()
              if (!isTeacher) {
                isDoneActivity = qualifications.includes(activity.id)
              }
              return (
                <VStack key={activity.id} mt={5} space={4} w="100%" maxW="400px" style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
                  <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center', opacity: isTeacher ? 1 : (isAtTime && !isDoneActivity ? 1 : 0.2) }} onPress={(event) => onPressElement(activity.id)} disabled={isTeacher ? false : (isAtTime && !isDoneActivity ? false : true)}>
                    <View style={{ flex: 1, marginLeft: 5, marginLeft: 5 }}>
                      <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                        {/* <Icon name="graduation-cap" size={40} color="#F6F6F6" /> */}
                        <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>{activity.qualifications.length + '/' + studentsQuantity}</Text>
                      </View>
                    </View>
                    <View style={{ flex: 5, paddingLeft: 10 }}>
                      <Text style={{ ...style.text.sm }}>{activity.name}</Text>
                    </View>
                  </Pressable>
                </VStack>
              )
            })
          ) : <Text style={{ ...style.text.title, color: style.color.primary, fontWeight: 'bold', fontSize: 20 }}>No hay actividades.</Text>
        }
      </ScrollView>
      {isTeacher &&
        (<Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="plus" size={15} color={style.color.secondary} />} _text={{ color: style.color.secondary }} onPress={onCreate}>Nueva Actividad</Button>
        )
      }
    </View>
  );
};

export default ActivitiesList;
