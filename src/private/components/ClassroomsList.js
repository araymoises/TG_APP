import React from 'react';
import {
  Text,
  View,
  Input, 
  Stack, 
  Center,
  Button,
  Box,
  Pressable,
} from 'native-base';
import style from '../../styles';

const Classrooms = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Stack mt={5} space={4} w="100%" maxW="400px"  style={{ backgroundColor: '#F6F6F6', height: 80, width: '95%', borderRadius: 5 }}>
          <Pressable style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={() => console.log("I'm Pressed")}>
            <View style={{ backgroundColor: 'green', height: '100%', width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
              <Text>iconcito</Text>
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ ...style.text.subtitle, fontWeight: 'bold' }}> Mariano Picón Salas</Text>
              <Text style={{ ...style.text.sm }}> Cantidad de alumnos: 32</Text>
              <Text style={{ ...style.text.sm }}> Progreso: 42%</Text>
            </View>
          </Pressable>
        </Stack>
    </View>
  );
};

export default Classrooms;
