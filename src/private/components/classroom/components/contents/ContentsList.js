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
import { getUserData, getContents } from "../../../../../../api";
import { useSelector } from 'react-redux';
import randomColor from '../../../../../services/colorNames';

const ContentsList = ({ navigation, route }) => {
  const navigate = navigation.navigate;
  const selected = require('./components/images/contents.png')
  const [isTeacher, setIsTeacher] = useState(false);
  const [contents, setContents] = useState([
    { key: 1, name: 'La lectura', icon: 'language', key: 1 },
    { key: 12, name: 'La materia y la energía', icon: 'tree', key: 2 },
    { key: 13, name: 'El ordenador', icon: 'desktop', key: 3 },
    { key: 14, name: 'Tipos de deporte', icon: 'soccer-ball-o', key: 4 },
    { key: 15, name: 'Dibujo artístico y el color', icon: 'paint-brush', key: 5 },
    { key: 16, name: 'Historia de Venezuela', icon: 'file-text', key: 6 },
    { key: 17, name: 'La familia en inglés', icon: 'comments-o', key: 7 },
    { key: 18, name: 'Números y operaciones', icon: 'superscript', key: 8 },
    { key: 19, name: 'Música tradicional', icon: 'music', key: 9 },
    { key: 10, name: 'Tipología climática', icon: 'picture-o', key: 10 },

  ])
  const classroomId = useSelector((state) => state.classroomId.value);


  const onCreate = () => {
    console.log('Nuevo contenido.');
    console.log('route.params');
    console.log(route.params);
    navigate('ContentsRouter', { screen: 'CreateContents' });
  }

  const onPressElement = (id) => {
    console.log('Detalle del contenido');
    navigate('ContentsRouter', { screen: 'ContentDetail', params: { id } });
  }

  const getUser = async () => {
    const user = await getUserData();
    if (user && user.teacher) {
      setIsTeacher(true);
    }
  }

  useEffect(() => {
    getUser()
    getContents(classroomId).then((res) => {
      setContents(res.data.content)

    }).catch((error) => {
      setContents(null)
      console.log('Error:');
      console.log(error);
    })
  }, [classroomId])

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
        {contents && contents.length ?
          (
            contents.map((content, index) => {
              return (
                <View mt={2} key={index} style={{ flex: 1 }}>
                  <VStack key={index} mt={5} space={4} w="100%" style={{ backgroundColor: '#F6F6F6', height: 80, width: '95%', borderRadius: 5 }}>
                    <Pressable paddingLeft={2} style={{ height: '100%', width: '100%', flexDirection: 'row', aligncontents: 'center' }} onPress={(event) => onPressElement(content.id)}>
                      <View style={{ backgroundColor: randomColor(), height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                        {/* <Icon name="graduation-cap" size={40} color="#F6F6F6" /> */}
                        <Text style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>{(index + 1).toString()}</Text>
                      </View>
                      <View style={{ paddingLeft: 10, paddingTop: 10, paddingRight: 30 }}>
                        <Text style={{ ...style.text.subtitle, fontWeight: 'bold' }}>{content.name}</Text>
                      </View>
                    </Pressable>
                  </VStack>
                </View>
              )
            })
          ) : <Text style={{ ...style.text.title, color: style.color.primary, fontWeight: 'bold', fontSize: 20 }}>No hay contenidos.</Text>
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