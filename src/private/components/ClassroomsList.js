import React from 'react';
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
import style from '../../styles';

import Icon from 'react-native-vector-icons/FontAwesome';

const Classrooms = () => {
  const onCreate = () => {
    console.log('Nuevo elemento.');
  }
  
  const onPressElement = (event) => {
    console.log('Pesionando elemento.');
  }

  return (
    <View style={{ flex: 1 }} >
      <ScrollView h="80" _contentContainerStyle={{
        mb: "4",
        minW: "100%",
        alignItems: 'center', justifyContent: 'flex-start'
      }}>
        <VStack mt={5} space={4} w="100%" maxW="400px"  style={{ backgroundColor: '#F6F6F6', height: 80, width: '95%', borderRadius: 5 }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
            <View style={{ backgroundColor: style.color.primary, height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
              {/* <Icon name="graduation-cap" size={40} color="#F6F6F6" /> */}
              <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>1º A</Text>
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ ...style.text.subtitle, fontWeight: 'bold' }}>Mariano Picón Salas</Text>
              <Text style={{ ...style.text.sm }}>Cantidad de alumnos: 32</Text>
              <Text style={{ ...style.text.sm }}>Progreso: 42%</Text>
            </View>
          </Pressable>
        </VStack>
        <VStack mt={5} space={4} w="100%" maxW="400px"  style={{ backgroundColor: '#F6F6F6', height: 80, width: '95%', borderRadius: 5 }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
          <View style={{ backgroundColor: style.color.primary, height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
              {/* <Icon name="graduation-cap" size={40} color="#F6F6F6" /> */}
              <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>3º C</Text>
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ ...style.text.subtitle, fontWeight: 'bold' }}>Joaquina Sánchez</Text>
              <Text style={{ ...style.text.sm }}>Cantidad de alumnos: 26</Text>
              <Text style={{ ...style.text.sm }}>Progreso: 35%</Text>
            </View>
          </Pressable>
        </VStack>
      </ScrollView>

      <Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20 }} leftIcon={<Icon name="plus" size={15} color={ style.color.secondary } />} _text={{ color: style.color.secondary }} onPress={onCreate}>Nueva Aula</Button>
    </View>
  );
};

export default Classrooms;
