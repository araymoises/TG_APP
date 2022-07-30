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
import style from '~styles';


const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: style.color.primary }}>
      <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: 'red', width: '100%', backgroundColor: style.color.primary, justifyContent: 'center' }}>
        <Text style={{ ...style.text.subtitle, color: style.color.secondary }}>¡Hola!</Text>
        <Text style={{ ...style.text.sm, color: style.color.secondary }}>Loguéate para acceder.</Text>
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
          <Pressable onPress={() => console.log("I'm Pressed")}>
            <Text style={{ ...style.text.xs, textAlign: 'right', color: style.color.primary, fontWeight: 'bold' }}>¿Olvidaste tu contraseña?</Text>
          </Pressable>
          <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }}>Acceder</Button>
          </Stack>
        </Center>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20, width: '100%', backgroundColor: 'white', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Text style={{ ...style.text.xs }}>¿Aún no tienes una cuenta? <Text style={{ ...style.text.sm, color: style.color.primary, fontWeight: 'bold' }}>Regístrate aquí</Text></Text>
      </View>
    </View>
  );
};

export default Login;
