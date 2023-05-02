import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  VStack,
  Pressable,
  Stack,
  Button,
  Right
} from 'native-base';
import style from '~styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getUserData } from "../../../../../../api";

const ContentsList = ({ navigation, route }) => {

  const navigate = navigation.navigate;
  const selected = require('./components/images/contents.png')
  const [isTeacher, setIsTeacher] = useState(false);
  const [content, setContent] = useState([
    { name: 'La lectura', icon: 'language', key: 1 },
    { name: 'La materia y la energía', icon: 'tree', key: 2 },
    { name: 'El ordenador', icon: 'desktop', key: 3 },
    { name: 'Tipos de deporte', icon: 'soccer-ball-o', key: 4 },
    { name: 'Dibujo artístico y el color', icon: 'paint-brush', key: 5 },
    { name: 'Historia de Venezuela', icon: 'file-text', key: 6 },
    { name: 'La familia en inglés', icon: 'comments-o', key: 7 },
    { name: 'Números y operaciones', icon: 'superscript', key: 8 },
    { name: 'Música tradicional', icon: 'music', key: 9 },
    { name: 'Tipología climática', icon: 'picture-o', key: 10 },

  ])


  const onCreate = () => {
    console.log('Nuevo contenido.');
    console.log('route.params');
    console.log(route.params);
    navigate('ContentsRouter', { screen: 'CreateContents' });
  }

  const onPressElement = (event) => {
    console.log('Detalle del contenido');
    navigate('ContentsRouter', { screen: 'ContentDetail' });
  }

  const getUser = async () => {
    const user = await getUserData();
    if (user.teacher) {
      setIsTeacher(true);
    }

  }
  useEffect(() => {
    getUser()
  }, [])

  return (
    <View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 20 }}>
        <View>
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
        {
          content.map(item => {
            return (
              <View mt={2} key={item.key} style={{ flex: 1 }}>
                <VStack mt={5} space={4} w="100%" style={{ backgroundColor: '#F6F6F6', height: 80, width: '95%', borderRadius: 5 }}>
                  <Pressable paddingLeft={2} style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
                    <View style={{ backgroundColor: style.color.primary, height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                      <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>
                        <Icon name={item.icon} size={20} color={style.color.secondary} />
                      </Text>
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                      <Text style={{ ...style.text.subtitle, fontWeight: 'bold' }}>{item.name}</Text>
                    </View>
                  </Pressable>
                </VStack>

              </View>

            )
          })
        }
      </ScrollView>
      {isTeacher &&
        (
          <Button style={{ ...style.button.primary, position: 'absolute', bottom: 10, right: 10, borderRadius: 20, elevation: 5 }} leftIcon={<Icon name="plus" size={15} color={style.color.secondary} />} _text={{ color: style.color.secondary }} onPress={onCreate}>Nuevo Contenido</Button>
        )
      }
    </View>
  )
}

export default ContentsList;