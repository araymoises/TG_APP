import React, {useState} from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    VStack,
    Pressable,
    Stack,
    Button,
  } from 'native-base';
import style from '~styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContentsList = () => {
    const selected= require('./images/contents.png')
    const [content, setContent] = useState([
      { name: 'Castellano',icon:'language', key:1},
      { name: 'Ciencias naturales', icon:'tree', key:2},
      { name: 'Computación',icon:'desktop', key:3},
      { name: 'Deporte',icon:'soccer-ball-o', key:4},
      { name: 'Dibujo',icon:'paint-brush', key:5},
      { name: 'Historia',icon:'file-text', key:6},
      { name: 'Inglés',icon:'comments-o', key:7},      
      { name: 'Matemáticas',icon:'superscript', key:8},
      { name: 'Música',icon:'music', key:9},
      { name: 'Geografía',icon:'picture-o', key:10},

    ])
  return (
    <ScrollView contentContainerStyle={{  flexGrow: 1,justifyContent: 'flex-start', paddingHorizontal:20,paddingVertical:20}}>
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
      { 
        content.map(item => {
          return(
            <View mt={2} key={item.key} style={{ flex: 1}}>
              <VStack mt={5} space={4} w="100%" maxW="400px"  style={{ backgroundColor: '#F6F6F6', height: 80, width: '95%', borderRadius: 5 }}>
                <Pressable paddingLeft={2} style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
                  <View style={{ backgroundColor: style.color.primary, height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                    {/* <Icon name="graduation-cap" size={40} color="#F6F6F6" /> */}
                    <Text  style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>
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
  )
}

export default ContentsList;