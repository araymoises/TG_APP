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

import { getUserData } from "../../../../../../api";

// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './../../../../redux/reducers/counterSlice';

const ActivitiesList = ({ navigation }) => {
  const navigate = navigation.navigate;
  const [isTeacher, setIsTeacher] = useState(false);
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  const onCreate = () => {
    console.log('Nueva aula');
    navigate('ActivityRouter', { screen: 'CreateActivity' });
  }

  const onPressElement = (event) => {
    console.log('Va a la vista de finalizacion de actividad.');
    // navigate('ActivityRouter', { screen: 'ActivityCompletion' });
    // dispatch(increment());

    navigate('ActivityRouter', { screen: 'ActivityDetailStudent', params: { id: '6448594955e98d7e1471ea0c' } });
  }

  const getUser = async () => {
    const user = await getUserData();
    if (user.teacher) {
      setIsTeacher(true);
    }

  }
  useEffect(() => {
    getUser()
  }, [])


  return (
    <View style={{ flex: 1, marginLeft: 5, backgroundColor: 'white' }} >
      <ScrollView h="80" _contentContainerStyle={{
        pb: "4",
        minW: "100%",
        alignItems: 'center', justifyContent: 'flex-start'
      }}>
        <VStack mt={5} space={4} w="100%" maxW="400px" style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
            <View style={{ flex: 1, marginLeft: 5, marginLeft: 5 }}>
              <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                {/* <Icon name="graduation-cap" size={40} color="#F6F6F6" /> */}
                <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>12/32</Text>
              </View>
            </View>
            <View style={{ flex: 5, paddingLeft: 10 }}>
              <Text style={{ ...style.text.sm }}>Actividad #1</Text>
            </View>
          </Pressable>
        </VStack>
        <VStack mt={5} space={4} w="100%" maxW="400px" style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>04/32</Text>
              </View>
            </View>
            <View style={{ flex: 5, paddingLeft: 10 }}>
              <Text style={{ ...style.text.sm }}>Actividad #2</Text>
            </View>
          </Pressable>
        </VStack>
        <VStack mt={5} space={4} w="100%" maxW="400px" style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>00/32</Text>
              </View>
            </View>
            <View style={{ flex: 5, paddingLeft: 10 }}>
              <Text style={{ ...style.text.sm }}>Actividad #3</Text>
            </View>
          </Pressable>
        </VStack>
      </ScrollView>
      {isTeacher &&
        (<Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="plus" size={15} color={style.color.secondary} />} _text={{ color: style.color.secondary }} onPress={onCreate}>Nueva Actividad</Button>
        )
      }
    </View>
  );
};

export default ActivitiesList;
