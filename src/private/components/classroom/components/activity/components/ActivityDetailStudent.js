import React, { useState }from 'react';
import DatePicker from 'react-native-date-picker';
import
{
    View,
    ScrollView,
    Center,
    Stack,
    Button,
    Input,
    Box,
    Select,
    CheckIcon,
    Text,
} from 'native-base'

import style from '~styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const ActivityDetailStudent = ({ navigation }) => {
  const navigate = navigation.navigate;

  const onPressElement = (event) => {
    console.log('Pesionando elementox2.');
    navigate('ActivityView');
    // navigation.navigate('PublicRouter', { screen: 'Login' });
  }

  return (
        <ScrollView contentContainerStyle={{  flexGrow: 1,justifyContent: 'flex-start', paddingHorizontal:20,paddingVertical:20}}>
        <Text style={{color:style.color.primary, fontWeight: 'bold', fontSize:20, textAlign:'center'}} >Actividad: Reconociendo las Emociones</Text>
        <View mt={4}>
          <Icon name="star" size={25} color={style.color.amber} mx="auto" style={{textAlign:'center'}}/>
        </View>
        <Text mt={4} style={{textAlign:'left', fontSize: 16}} >Tipo de actividad: Selección simple</Text>
        <Text mt={4} style={{textAlign:'left', fontSize: 16}} >Contenido: La familia en inglés</Text>
        <Text mt={4} style={{textAlign:'left', fontSize: 16}} >Ponderación: 20 puntos</Text>
        <Text mt={4} style={{textAlign:'left', fontSize: 16}} >Fecha de inicio: 15/05/2022 08:30 AM</Text>
        <Text mt={4} style={{textAlign:'left', fontSize: 16}} >Fecha de inicio: 15/05/2022 06:00 PM</Text>
        <View mt={4}>
          <Icon name="star" size={25} color={style.color.amber} mx="auto" style={{textAlign:'left'}}/>
        </View>

        <View mt={4}>
          <Icon name="star" size={25} color={style.color.amber} mx="auto" style={{textAlign:'right'}}/>
        </View>


          <View style={{ flex: 1, justifyContent: 'center', width: '100%'}}>
                <Center>
                  <Stack space={4} w="100%" maxW="400px">
                    <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} rightIcon={<Icon name="play-circle" size={15} color={ style.color.secondary } />} onPress={(event) => onPressElement(event)}>Realizar actividad</Button>
                  </Stack>
                </Center>
          </View>
        </ScrollView>
  )
}

export default ActivityDetailStudent
