import React, { useEffect } from 'react';
import {
  View,
  Input,
  Stack,
  Center,
  Button,
  Image,
  ScrollView,
  Text,
} from 'native-base';
import style from '~styles';

const ActivityCompletion = ({ route, navigation }) => {
  const navigate = navigation.navigate;
  const { isCorrect, value } = route.params;
  const correctAnswerImage = require('./images/activityCompletion.png')
  const incorrectAnswerImage = require('./images/activityFail.png')

  const onPressElement = () => {
    navigate('ActivitiesList');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
        <Text style={{ color: style.color.primary, fontWeight: 'bold', fontSize: 21, textAlign: 'center', marginTop: 10 }} >Has finalizado la actividad</Text>
        <Text style={{ color: style.color.primary, fontWeight: 'bold', fontSize: 18, textAlign: 'center' }} >{isCorrect ? 'Has respondido correctamente, ¡felicidades!' : 'Has respondido incorrectamente.'}</Text>
        <Text style={{ color: style.color.tertiary, fontWeight: 'bold', fontSize: 18, textAlign: 'center' }} >{isCorrect ? '' : `Respuesta correcta: Halcón`}</Text>
        <Image
          justifyContent="center"
          alignItems="center"
          source={isCorrect ? correctAnswerImage : incorrectAnswerImage}
          alt="image"
          size="2xl"
          key="lg"
          resizeMode="cover"
          mx="auto"
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
        <Center>
          <Stack space={4} w="100%" maxW="400px">
            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} onPress={() => onPressElement()}>Aceptar</Button>
          </Stack>
        </Center>
      </View>
    </ScrollView>
  );
};

export default ActivityCompletion;
