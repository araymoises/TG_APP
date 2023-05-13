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

import { getUserData, getActivities } from "../../../../../../api";
import { useSelector } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './../../../../redux/reducers/counterSlice';

const ActivitiesList = ({ navigation }) => {
  const navigate = navigation.navigate;
  const [isTeacher, setIsTeacher] = useState(false);
  const [activities, setActivities] = useState(null);
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
    }
  }

  useEffect(() => {
    setActivities(null)
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
  }, [classroomId])

  return (
    <View style={{ flex: 1, marginLeft: 5, backgroundColor: 'white' }} >
      <ScrollView h="80" _contentContainerStyle={{
        pb: "4",
        minW: "100%",
        alignItems: 'center', justifyContent: 'flex-start'
      }}>
        {
          activities && activities.length ? (
            activities.map((activity) =>
              <VStack key={activity.id} mt={5} space={4} w="100%" maxW="400px" style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
                <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(activity.id)}>
                  <View style={{ flex: 1, marginLeft: 5, marginLeft: 5 }}>
                    <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                      {/* <Icon name="graduation-cap" size={40} color="#F6F6F6" /> */}
                      <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>12/32</Text>
                    </View>
                  </View>
                  <View style={{ flex: 5, paddingLeft: 10 }}>
                    <Text style={{ ...style.text.sm }}>{activity.name}</Text>
                  </View>
                </Pressable>
              </VStack>
            )
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
