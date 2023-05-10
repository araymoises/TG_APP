import React,{useState,useEffect} from 'react';
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
import { login } from "../../../api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {isValidObjField,isValidEmail,updateError } from "../../validations/Validations";
import AlertSuccess from '~private/components/AlertSuccessLogin';


const Login = ({ navigation, route}) => {
  const navigate = navigation.navigate;
  const selected= require('./images/login.png');

  const messageSuccess = route.params?.messageSuccess || ''
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email:'',
    password:''

  })

  const {email,password} = userInfo;
  const [error, setError] = useState('');


  const togglePassword = () => setShowPassword(!showPassword);
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage successfully cleared!');
    } catch (error) {
      console.log('Error clearing AsyncStorage!', error);
    }
  }
  const onSignup= () => {
    console.log('Ir al register');
    navigate('PublicRouter', { screen: 'Signup' });
  }

  const onForgotPassword = () =>{ 

    navigate('PublicRouter', { screen: 'ForgotPassword' });
  }
  useEffect(() => {
    clearAsyncStorage();
  }, [])
  

  const handleOnChangeText = (value, fieldName)=>{setUserInfo({...userInfo, [fieldName]:value})}
  const isValidForm = () =>{
    if(!isValidObjField(userInfo)) return updateError('Debe llenar todos los campos', setError)
    if(!isValidEmail(email)) return updateError('Email invalido', setError)

    if(!password.trim() || password.length < 8) return updateError('La contraseña debe tener más de 8 caracteres', setError)

    return true;
  }

  const onLogin = async () =>
  {
    if(isValidForm())
    {
      login(userInfo)
      .then(async (res) => {
        //console.log(res.data)
        if(res.data.success)
        {
          const token=res.data.content.token;
          await AsyncStorage.setItem('token',token);
          await AsyncStorage.setItem('userData', JSON.stringify(res.data.content.user));
          setUserInfo({email:'',password:''});
          navigate('PrivateRouter', { screen: 'Home' });
  
        }
      })
      .catch((error) => {
        if(error.response){
          updateError(error.response.data.message, setError);
        }
        else{
          console.log(error)
          updateError('Ha ocurrido un error interno', setError);
        }
        
      });

    }

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
      <View style={{ flex: 3, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white'}} id="alert-register">
        {messageSuccess ?        
            <AlertSuccess success={messageSuccess}/>
          :null
          }
        <Center>
        {error ? <Text style={{color:'red', fontSize:18, textAlign:'center'}}>{error}</Text>:null}
          <Stack space={4} w="100%" maxW="400px">
            <Input size="lg" variant="underlined" placeholder="Email" autoCapitalize='none' value={email} onChangeText={ (value) => handleOnChangeText(value, 'email') }/>
            <Box>
              <Input type={showPassword ? "text" : "password"} size="lg" variant="underlined" 
                InputRightElement={
                  <Button style={{ backgroundColor: 'white' }} size="sm" rounded="none" w="1/6" h="full" onPress={togglePassword}>
                    {showPassword ? <Icon name="eye-slash" size={20} color={style.color.primary}/> : <Icon name="eye" size={20} color={style.color.primary}/>}
                  </Button>
                } 
                placeholder="Contraseña"
                value={password}
                onChangeText={ (value) => handleOnChangeText(value, 'password') }
                />
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
