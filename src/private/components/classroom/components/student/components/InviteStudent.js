import React, { useState } from 'react';
import {
  View,
  Input,
  Stack,
  Center,
  Button,
  Image,
  ScrollView,
} from 'native-base';
import style from '~styles';
import { studentInvite } from './../../../../../../../api'
import { useSelector } from 'react-redux';

const InviteStudent = ({ navigation }) => {
  const navigate = navigation.navigate
  const [email, setEmail] = useState('');
  const selected = require('./images/invite.png')
  const classroomId = useSelector((state) => state.classroomId.value);

  const onPress = () => {
    console.log('email');
    console.log(email);
    studentInvite({
      email,
      classroom: classroomId
    }).then((res) => {
      console.log(res.data.content);
      navigate('ClassroomRouter', { screen: 'StudentsList' });
    }).catch((error) => {
      setEmail(null)
      console.log('Error:');
      console.log(error);
    })
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
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
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
        <Center>
          <Stack space={4} w="100%" maxW="400px">
            <Input value={email} size="lg" variant="underlined" placeholder="Email del alumno" onChangeText={(value) => setEmail(value)} />

            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} onPress={onPress}>Invitar</Button>
          </Stack>
        </Center>
      </View>
    </ScrollView>
  );
};

export default InviteStudent;
