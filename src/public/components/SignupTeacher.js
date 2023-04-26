import React,{useState}  from 'react';
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
} from 'native-base';
import style from '~styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupTeacher } from "../../../api";
import {isValidObjField,isValidEmail,updateError } from "../../validations/Validations";

const SignupTeacher = ({ navigation}) => {
  const selected= require('./images/register.png')
  const navigate = navigation.navigate;
  const [showPassword, setShowPassword] = React.useState(false);
  const [teacherInfo, setTeacherInfo] = useState({
    firstname:'',
		lastname:'',
    email:'',
    password:''

  })

  const {firstname,lastname,email,password} = teacherInfo;
  const [error, setError] = useState('');
  const togglePassword = () => setShowPassword(!showPassword);

 const handleOnChangeText = (value, fieldName)=>{setTeacherInfo({...teacherInfo, [fieldName]:value})}
  const isValidForm = () =>{
    //que solo acepte si todos los campos tienen valores
    if(!isValidObjField(teacherInfo)) return updateError('Debe llenar todos los campos', setError)

    if(!firstname.trim() || firstname.length < 3) return updateError('El nombre debe ser mayor a 3 letras', setError)

    if(!lastname.trim() || lastname.length < 3) return updateError('El apellido debe ser mayor a 3 letras', setError)

    if(!isValidEmail(email)) return updateError('Email invalido', setError)

    if(!password.trim() || password.length < 8) return updateError('La contraseña debe tener más de 8 caracteres', setError)

    return true;
  }
  const onSignup = () => {
    if(isValidForm()) {
        signupTeacher(teacherInfo).then((res) => {
          if(res.data.success)
          {
            setTeacherInfo({firstname:'',lastname:'',email:'',password:''});
            navigate('PublicRouter', { 
              screen: 'Login',
              params: { messageSuccess: `${res.data.message}` }
            });
          }
        }).catch(error => {
          if(error.response)
          {
            updateError(error.response.data.message, setError);
          }
          else{
            console.log(error);
            updateError('Ha ocurrido un error interno.', setError);
          }
        });
    
    }
  };


  return (
    <View>
        
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: style.color.primary }}>
        <View style={{ flex: 1, paddingHorizontal: 20,  paddingVertical:20, backgroundColor: 'red', width: '100%', backgroundColor: style.color.primary, justifyContent: 'center' }}>
          <Text style={{ ...style.text.subtitle, color: style.color.secondary, marginBottom:10 }}>Registro de Docentes</Text>
          <Text style={{ ...style.text.sm, color: style.color.secondary }}>Por favor, rellena los campos para registrarte.</Text>
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
        <View style={{ flex: 4, paddingHorizontal: 20, paddingBottom:20, justifyContent: 'center', width: '100%', backgroundColor: 'white'}}>
          {error ? <Text style={{color:'red', fontSize:18, textAlign:'center'}}>{error}</Text>:null}
          <Center>
            <Stack mt={2} space={4} w="100%" maxW="400px">
              <Input size="lg" variant="underlined" placeholder="Nombre"  value={firstname} onChangeText={ (value) => handleOnChangeText(value, 'firstname') }/>
              <Input size="lg" variant="underlined" placeholder="Apellido"  value={lastname} onChangeText={ (value) => handleOnChangeText(value, 'lastname') }/>
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
            <Button style={{ ...style.button.primary}} _text={{ color: style.color.secondary }} onPress={onSignup}>Registrarse</Button>
            </Stack>
          </Center>
        </View>
      </ScrollView>
    
    </View>
  );
};

export default SignupTeacher;
