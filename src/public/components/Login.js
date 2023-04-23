import React,{useState} from 'react';
import {
  Text,
  View,
  Input, 
  Stack, 
  Center,
  Button,
  Box,
  Pressable,
  Image,
  ScrollView,
  Alert,
  VStack,
  HStack,
  IconButton,
  CloseIcon
} from 'native-base';
import style from '~styles';
  
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation, route}) => {
  const { message } = route.params || { message: '' };
  console.log(message);
  const navigate = navigation.navigate;
  const selected= require('./images/login.png')
  const [showPassword, setShowPassword] = React.useState(false);
  const [userInfo, setUserInfo] = useState({
    email:'',
    password:''

  })


  const togglePassword = () => setShowPassword(!showPassword);
  
  const onLogin = () => {
    console.log('Ir al home');
    navigate('PrivateRouter', { screen: 'Home' });
  }

  const onSignup= () => {
    console.log('Ir al register');
    navigate('PublicRouter', { screen: 'Signup' });
  }

  const onForgotPassword = () =>{ 

    navigate('PublicRouter', { screen: 'ForgotPassword' });
  }



  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: style.color.primary }}>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical:20, backgroundColor: 'red', width: '100%', backgroundColor: style.color.primary, justifyContent: 'center' }}>
        <Text style={{ ...style.text.subtitle, color: style.color.secondary }}>¡Hola!</Text>
        <Text style={{ ...style.text.sm, color: style.color.secondary }}>Loguéate para acceder.</Text>
      </View>
      <View style={{ flex: 3, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
          <Image
            source={selected}
            alt="login"
            size="2xl"
            key="lg"
            resizeMode="cover"
            mx="auto"
            my="auto"
            />
      </View>
      <View style={{ flex: 3, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white'}}>
        {message ?        
            <Alert maxW="400" status="success" colorScheme="success">
              <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                  <HStack flexShrink={1} space={2} alignItems="center">
                    <Alert.Icon />
                    <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                      {message}
                    </Text>
                  </HStack>
                </HStack>
                <Box pl="6" _text={{
                color: "coolGray.600"
              }}>
                  Por favor inicie sesión.
                </Box>
              </VStack>
            </Alert>
          :null
          }
        <Center>
          <Stack space={4} w="100%" maxW="400px">
            <Input size="lg" variant="underlined" placeholder="Email" autoCapitalize='none'/>
            <Box>
              <Input type={showPassword ? "text" : "password"} size="lg" variant="underlined" 
                InputRightElement={
                  <Button style={{ backgroundColor: 'white' }} size="sm" rounded="none" w="1/6" h="full" onPress={togglePassword}>
                    {showPassword ? <Icon name="eye-slash" size={20} color={style.color.primary}/> : <Icon name="eye" size={20} color={style.color.primary}/>}
                  </Button>
                } 
                placeholder="Contraseña"/>
            </Box>
          <Pressable onPress={(event) => onForgotPassword(event)}>
            <Text style={{ ...style.text.xs, textAlign: 'right', color: style.color.primary, fontWeight: 'bold' }}>¿Olvidaste tu contraseña?</Text>
          </Pressable>
          <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} onPress={onLogin}>Acceder</Button>
          </Stack>
        </Center>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20, width: '100%', backgroundColor: 'white', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Text style={{ ...style.text.xs , paddingTop:20, paddingBottom:10}} onPress={onSignup}>¿Aún no tienes una cuenta? <Text style={{ ...style.text.sm, color: style.color.primary, fontWeight: 'bold' }}>Regístrate aquí</Text></Text>
      </View>
    </ScrollView>
  );
};

export default Login;
