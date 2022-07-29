import React, { useEffect } from 'react';
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
import style from '../../../../../styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import randomColor from '../../../../../services/colorNames';

// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './../../../../redux/reducers/counterSlice';

const ActivitiesList = ({ navigation }) => {
  const navigate = navigation.navigate;
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  const onCreate = () => {
    console.log('Nuevo elemento.');
    navigate('PrivateRouter', { screen: 'ActivityRouter' });
  }
  
  const onPressElement = (event) => {
    console.log('Pesionando elemento.');
    // dispatch(increment());
  }

  return (
    <View style={{ flex: 1, marginLeft: 5, backgroundColor: 'white' }} >
      <ScrollView h="80" _contentContainerStyle={{
        pb: "4",
        minW: "100%",
        alignItems: 'center', justifyContent: 'flex-start'
      }}>
        <VStack mt={5} space={4} w="100%" maxW="400px"  style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
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
        <VStack mt={5} space={4} w="100%" maxW="400px"  style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
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
        <VStack mt={5} space={4} w="100%" maxW="400px"  style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
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

      <Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="plus" size={15} color={ style.color.secondary } />} _text={{ color: style.color.secondary }} onPress={onCreate}>Nueva Actividad</Button>
    </View>
  );
};

export default ActivitiesList;
