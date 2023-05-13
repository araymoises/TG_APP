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
} from 'native-base';
import style from '~styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getUserData } from 'api';

const ProfileEdit = ({ navigation }) => {

  const selected = require('./images/profileEdit.png')

  let [content, setContent] = useState("");
  const navigate = navigation.navigate;
  const [showPassword, setShowPassword] = React.useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [user, setUser] = useState(null);
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')

  const togglePassword = () => setShowPassword(!showPassword);

  const onSignup = () => {
    console.log('Ir al register');
    navigate('PublicRouter', { screen: 'Signup' });
  }

  const onChangeFirstname = (value) => {
    setFirstname(value)
  }

  const onChangeLastname = (value) => {
    setLastname(value)
  }

  const onChangeEmail = (value) => {
    setEmail(value)
  }

  const getUser = async () => {
    const userData = await getUserData();
    console.log('userData');
    console.log(userData);
    setUser(userData);

    if (userData.teacher) {
      setIsTeacher(true);
      setFirstname(userData.teacher.firstname)
      setLastname(userData.teacher.lastname)
      setEmail(userData.teacher.email)
    } else {
      setFirstname(userData.student.firstname)
      setLastname(userData.student.lastname)
      setEmail(userData.student.email)
    }
  }

  useEffect(() => {
    getUser()
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
          <Center>
            <Stack mt={2} space={4} w="100%" maxW="400px">
              <Input size="lg" variant="underlined" placeholder="Nombre" value={firstname} onChangeText={(value) => onChangeFirstname(value)} />
              <Input size="lg" variant="underlined" placeholder="Apellido" value={lastname} onChangeText={(value) => onChangeLastname(value)} />
              <Input size="lg" variant="underlined" placeholder="Email" value={email} onChangeText={(value) => onChangeEmail(value)} />
              {/* <Box>
                <Input type={showPassword ? "text" : "password"} size="lg" variant="underlined"
                  InputRightElement={
                    <Button style={{ backgroundColor: 'white' }} size="sm" rounded="none" w="1/6" h="full" onPress={togglePassword}>
                      {showPassword ? <Icon name="eye-slash" size={20} color={style.color.primary} /> : <Icon name="eye" size={20} color={style.color.primary} />}
                    </Button>
                  }
                  placeholder="Contraseña" />
              </Box> */}
              <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} onPress={onSignup}>Editar</Button>
            </Stack>
          </Center>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileEdit;
