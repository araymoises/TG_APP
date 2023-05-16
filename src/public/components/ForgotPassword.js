import React from 'react';
import {
  Text,
  View,
  Input,
  Stack,
  Center,
  Button,
  Image,
  ScrollView,
} from 'native-base';
import style from '~styles';


const ForgotPassword = ({ navigation }) => {
  const selected = require('./images/resetP2.png')
  const navigate = navigation.navigate;

  const onResetPassword = () => {
    navigate('PublicRouter', { screen: 'ResetPassword' });
  }

  return (

    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: style.color.primary }}>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20, width: '100%', backgroundColor: style.color.primary, justifyContent: 'center' }}>
        <Text style={{ ...style.text.subtitle, color: style.color.secondary }}>Olvide mi contraseña</Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
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
            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} onPress={onResetPassword}>Enviar</Button>
          </Stack>
        </Center>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
