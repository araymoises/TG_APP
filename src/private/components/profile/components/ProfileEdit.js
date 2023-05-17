import React, { useState, useEffect } from 'react';
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
  Text
} from 'native-base';
import style from '~styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { getUserData, updateTeacher } from 'api';
import { updateStudent } from 'api';
import { updateTeacherById } from 'api';

import { setClassroomId } from '~redux/reducers/classroomId';
import {isValidObjField, isValidEmail, updateError} from '../../../../validations/Validations'


const ProfileEdit = ({ navigation }) => {

  const selected = require('./images/profileEdit.png')
  const navigate = navigation.navigate;
  const [showPassword, setShowPassword] = React.useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''

  })

  const { firstname, lastname, email, password, classroom } = userInfo;
  const [error, setError] = useState('');

  const togglePassword = () => setShowPassword(!showPassword);

  const handleOnChangeText = (value, fieldName) => { setUserInfo({ ...userInfo, [fieldName]: value }) }
  const isValidForm = () => {
    if (!isValidObjField(userInfo)) return updateError('Debe llenar todos los campos', setError)

    if (!firstname.trim() || firstname.length < 3) return updateError('El nombre debe ser mayor a 3 letras', setError)

    if (!lastname.trim() || lastname.length < 3) return updateError('El apellido debe ser mayor a 3 letras', setError)

    if (!isValidEmail(email)) return updateError('Email invalido', setError)

    if (!password.trim() || password.length < 8) return updateError('La contraseña debe tener más de 8 caracteres', setError)

    return true;
  }

  const onEditStudent = () => {
    console.log('entre a onEditStudent')
    if (isValidForm()) {
     
      updateStudent(userInfo,userId).then((res) => {
        if (res.data.success) {
          setUserInfo({ firstname: '', lastname: '', email: '', password: ''});
          navigate('PublicRouter', {
            screen: 'Login',
            params: { messageSuccess: `${res.data.message}` }
          });
        }
      }).catch(error => {
        if (error.response) {
          updateError(error.response.data.message, setError);
        }
        else {
          console.log(error);
          updateError('Ha ocurrido un error interno.', setError);
        }
      });
    }
  }

  const onEditTeacher = () => {
    console.log('entre a onEditTeacher')
    if (isValidForm()) {
     
      updateTeacherById(userInfo,userId).then((res) => {
        if (res.data.success) {
          setUserInfo({ firstname: '', lastname: '', email: '', password: ''});
          navigate('PublicRouter', {
            screen: 'Login',
            params: { messageSuccess: `${res.data.message}` }
          });
        }
      }).catch(error => {
        if (error.response) {
          updateError(error.response.data.message, setError);
        }
        else {
          console.log(error);
          updateError('Ha ocurrido un error interno.', setError);
        }
      });
    }
  }

  const getUser = async () => {
    const userData = await getUserData();
    console.log('userData');
    console.log(userData);
    setUser(userData);

    if (userData.teacher) {
      setIsTeacher(true);
      setUserInfo({
        ...userInfo,
        firstname: userData.teacher.firstname,
        lastname: userData.teacher.lastname,
        email: userData.teacher.email,
        password: ''
      })
      setUserId(userData.teacher._id)

    } else {
      setUserInfo({
        ...userInfo,
        firstname: userData.student.firstname,
        lastname: userData.student.lastname,
        email: userData.student.email,
        password: ''
      })
      setUserId(userData.student._id)

      
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    setUserInfo({ ...userInfo})
  }, [])

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
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

        <View style={{ flex: 4, paddingHorizontal: 20, paddingBottom: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
        {error ? <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>{error}</Text> : null}
          <Center>
            <Stack mt={2} space={4} w="100%" maxW="400px">
            <Input size="lg" variant="underlined" placeholder="Nombre" value={firstname} onChangeText={(value) => handleOnChangeText(value, 'firstname')} />
              <Input size="lg" variant="underlined" placeholder="Apellido" value={lastname} onChangeText={(value) => handleOnChangeText(value, 'lastname')} />
              <Input size="lg" variant="underlined" placeholder="Email" autoCapitalize='none' value={email} onChangeText={(value) => handleOnChangeText(value, 'email')} />
              <Box>
                <Input type={showPassword ? "text" : "password"} size="lg" variant="underlined"
                  InputRightElement={
                    <Button style={{ backgroundColor: 'white' }} size="sm" rounded="none" w="1/6" h="full" onPress={togglePassword}>
                      {showPassword ? <Icon name="eye-slash" size={20} color={style.color.primary} /> : <Icon name="eye" size={20} color={style.color.primary} />}
                    </Button>
                  }
                  placeholder="Contraseña"
                  value={password}
                  onChangeText={(value) => handleOnChangeText(value, 'password')}
                />
              </Box>
             
              {isTeacher && user && user.teacher ?
               <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} onPress={onEditTeacher}>Editar Docente</Button>
              :
              <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} onPress={onEditStudent}>Editar</Button>
            }
            </Stack>
          </Center>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileEdit;
