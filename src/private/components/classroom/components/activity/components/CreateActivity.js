import React from 'react';
import {
  View,
  Input, 
  Stack, 
  Center,
  Button,
  Image,
} from 'native-base';
import style from '~styles';

const CreateActivity = () => {


  const selected= require('./images/activity.png')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
            <Image
                justifyContent="center"
                alignItems="center"
                source={selected}
                alt="image"
                size="2xl"
                key="lg"
                resizeMode="cover"
                mx="auto"
            />
        
        <Center>
          <Stack mt={2} space={4} w="100%" maxW="400px">
            <Input size="lg" variant="underlined" placeholder="Nombre de la actividad" />
            <Input size="lg" variant="underlined" placeholder="Tipo de actividad" />
            <Input size="lg" variant="underlined" placeholder="Ponderación" />

            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }}>Crear</Button>
          </Stack>
        </Center>
      </View>
    </View>
  );
};

export default CreateActivity;
