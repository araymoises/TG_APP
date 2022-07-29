import React from 'react';
import {
  View,
  Input, 
  Stack, 
  Center,
  Button,
} from 'native-base';
import style from './../../../../../../styles';

const CreateActivity = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
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
