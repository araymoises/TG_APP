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
import style from './../../styles';


const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: style.color.primary }}>
      <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: 'red', width: '100%', backgroundColor: style.color.primary, justifyContent: 'center' }}>
        <Text style={{ ...style.text.subtitle, color: style.color.secondary }}>Bienvenido,</Text>
        <Text style={{ ...style.text.sm, color: style.color.secondary }}>Loguéate para acceder</Text>
      </View>
      <View style={{ flex: 3, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        <Center>
          <Stack mt={2} space={4} w="100%" maxW="400px">
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
          </Stack>
          <Pressable onPress={() => console.log("I'm Pressed")}>
            <Text>Hola</Text>
          </Pressable>
        </Center>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20, width: '100%', backgroundColor: 'white' }}>
        <Text>Hola</Text>
      </View>
    </View>
  );
};

export default Login;
