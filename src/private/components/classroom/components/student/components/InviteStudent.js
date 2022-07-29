import React from 'react';
import {
  View,
  Input, 
  Stack, 
  Center,
  Button,
} from 'native-base';
import style from '../../../../../../styles';

const InviteStudent = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
        <Center>
          <Stack mt={2} space={4} w="100%" maxW="400px">
            <Input size="lg" variant="underlined" placeholder="Email del alumno" />

            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }}>Invitar</Button>
          </Stack>
        </Center>
      </View>
    </View>
  );
};

export default InviteStudent;
