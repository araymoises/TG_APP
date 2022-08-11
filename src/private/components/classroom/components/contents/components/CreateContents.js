import React from 'react';
import {
  View,
  Input, 
  Stack, 
  Center,
  Button,
  TextArea,
  Image,
  ScrollView,

} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import style from '~styles';

const CreateContents = () => {
  const selected= require('./images/book.png')

  return (
    <ScrollView contentContainerStyle={{  flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ flex: 1, paddingHorizontal: 20,paddingVertical:20, justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>
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
        <Center>
          <Stack mt={2} space={4} w="100%" maxW="400px">
            <Input size="lg" variant="underlined" placeholder="Título" />
            <TextArea size="lg" variant="underlined" placeholder="Contenido"/>
            <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }}>Guardar</Button>
          </Stack>
        </Center>
      </View>
    </ScrollView>
  );
};

export default CreateContents;
