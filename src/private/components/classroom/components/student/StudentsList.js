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
import style from '~styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import randomColor from '../../../../../services/colorNames';

// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './../../../../redux/reducers/counterSlice';

const StudentsList = ({ navigation }) => {
  const navigate = navigation.navigate;
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  const onCreate = () => {
    console.log('Nuevo elemento.');
    navigate('PrivateRouter', { screen: 'StudentRouter' });
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
                <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>M A</Text>
              </View>
            </View>
            <View style={{ flex: 5, paddingLeft: 10 }}>
              <Text style={{ ...style.text.sm }}>Aray Miranda, Moisés Alejandro</Text>
            </View>
          </Pressable>
        </VStack>
        <VStack mt={5} space={4} w="100%" maxW="400px"  style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>C G</Text>
              </View>
            </View>
            <View style={{ flex: 5, paddingLeft: 10 }}>
              <Text style={{ ...style.text.sm }}>Gil Páez, Crisleivys Nohemí</Text>
            </View>
          </Pressable>
        </VStack>
        <VStack mt={5} space={4} w="100%" maxW="400px"  style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>J G</Text>
              </View>
            </View>
            <View style={{ flex: 5, paddingLeft: 10 }}>
              <Text style={{ ...style.text.sm }}>Gómez Lugo, Juan José</Text>
            </View>
          </Pressable>
        </VStack>
        <VStack mt={5} space={4} w="100%" maxW="400px"  style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>M H</Text>
              </View>
            </View>
            <View style={{ flex: 5, paddingLeft: 10 }}>
              <Text style={{ ...style.text.sm }}>Hernández Cabeza, Maria Carmen</Text>
            </View>
          </Pressable>
        </VStack>
        <VStack mt={5} space={4} w="100%" maxW="400px"  style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>P L</Text>
              </View>
            </View>
            <View style={{ flex: 5, paddingLeft: 10 }}>
              <Text style={{ ...style.text.sm }}>Lárez Méndez, Pablo Javier</Text>
            </View>
          </Pressable>
        </VStack>
        <VStack mt={5} space={4} w="100%" maxW="400px"  style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>J C</Text>
              </View>
            </View>
            <View style={{ flex: 5, paddingLeft: 10 }}>
              <Text style={{ ...style.text.sm }}>Castillo Villarroel, Johudsy Maria</Text>
            </View>
          </Pressable>
        </VStack>
        <VStack mt={5} space={4} w="100%" maxW="400px"  style={{ height: 80, width: '95%', borderRadius: 10, elevation: 5, backgroundColor: '#F6F6F6' }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>A L</Text>
              </View>
            </View>
            <View style={{ flex: 5, paddingLeft: 10 }}>
              <Text style={{ ...style.text.sm }}>Luces Mujica, Ana Rosa</Text>
            </View>
          </Pressable>
        </VStack>
      </ScrollView>

      <Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="plus" size={15} color={ style.color.secondary } />} _text={{ color: style.color.secondary }} onPress={onCreate}>Nuevo Alumno</Button>
    </View>
  );
};

export default StudentsList;
