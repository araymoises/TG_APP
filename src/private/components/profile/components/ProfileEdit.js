import React, { useState }from 'react';
import {
  View,
  Input, 
  Stack, 
  Center,
  Button,
  Image,
  ScrollView,
  Box,
  Select,
  CheckIcon,
} from 'native-base';
import style from '~styles';

const ProfileEdit = ({ navigation}) => {

  const selected= require('./images/profileEdit.png')
  
  let [content, setContent] = useState("");
  const navigate = navigation.navigate;
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const onSignup= () => {
    console.log('Ir al register');
    navigate('PublicRouter', { screen: 'Signup' });
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical:20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
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
        
        <View style={{ flex: 4, paddingHorizontal: 20, paddingBottom:20, justifyContent: 'center', width: '100%', backgroundColor: 'white'}}>
          <Center>
            <Stack mt={2} space={4} w="100%" maxW="400px">
              <Input size="lg" variant="underlined" placeholder="Nombre" />
              <Input size="lg" variant="underlined" placeholder="Apellido" />
              <Input size="lg" variant="underlined" placeholder="Email" />
              <Box>
                <Input type={showPassword ? "text" : "password"} size="lg" variant="underlined" 
                  InputRightElement={
                    <Button style={{ backgroundColor: style.color.primary }} size="sm" rounded="none" w="1/6" h="full" onPress={togglePassword}>
                      {showPassword ? "Ocultar" : "Mostrar"}
                    </Button>
                  } 
                  placeholder="Contraseña" />
              </Box>
            <Button style={{ ...style.button.primary}} _text={{ color: style.color.secondary }} onPress={onSignup}>Editar</Button>
            </Stack>
          </Center>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileEdit;
