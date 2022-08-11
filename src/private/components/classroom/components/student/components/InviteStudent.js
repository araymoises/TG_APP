import React from 'react';
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

const InviteStudent = () => {

  const selected= require('./images/invite.png')

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white'}}>
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
            <Input size="lg" variant="underlined" placeholder="Email del alumno" />

            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }}>Invitar</Button>
          </Stack>
        </Center>
      </View>
    </ScrollView>
  );
};

export default InviteStudent;
