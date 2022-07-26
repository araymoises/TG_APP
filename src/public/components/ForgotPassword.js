import React from 'react';
import {
  Text,
  View,
  Input, 
  Stack, 
  Center,
  Button,
  Image,
} from 'native-base';
import style from './../../styles';


const ForgotPassword = () => {
    const selected= require('./images/resetP2.png')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: style.color.primary }}>
      <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: 'red', width: '100%', backgroundColor: style.color.primary, justifyContent: 'center' }}>
        <Text style={{ ...style.text.subtitle, color: style.color.secondary }}>Recuperar contraseña</Text>
      </View>
      <View style={{ flex: 3, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        <Center>
          <Stack mt={2} space={4} w="100%" maxW="400px">
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
            <Input size="lg" variant="underlined" placeholder="Email" />
          <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }}>Enviar</Button>
          </Stack>
        </Center>
      </View>
    </View>
  );
};

export default ForgotPassword;
