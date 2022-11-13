import React from 'react'
import
{
    View,
    ScrollView,
    Text,
    Center,
    Stack,
    Button,
    Input,
    TextArea,
} from 'native-base'

import style from '~styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContentEdit = () => {
  return (
        <ScrollView contentContainerStyle={{  flexGrow: 1,justifyContent: 'flex-start', paddingHorizontal:20,paddingVertical:20, backgroundColor: 'white'}}>
            <View style={{ flex: 1, justifyContent: 'center', width: '100%'}}>
                <Center>
                  <Stack space={4} w="100%" maxW="400px">
                    <Input size="lg" variant="underlined" placeholder="Título" />
                    <TextArea size="lg" variant="underlined" placeholder="Contenido"/>
                    <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} leftIcon={<Icon name="edit" size={15} color={ style.color.secondary } />}>Editar</Button>
                  </Stack>
                </Center>
              </View>

        </ScrollView>
  )
}

export default ContentEdit
