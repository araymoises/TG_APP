import React from 'react'
import {
    Text,
    View,
    ScrollView,
    Pressable,
    VStack,
    Stack,
    Avatar,
    Center,
    Button,
    Box,
    Progress,
  } from 'native-base';

  import style from '~styles';
  
  import Icon from 'react-native-vector-icons/FontAwesome';

const Settings = () => {

  
  const selected= require('./images/user.png')


  const onPressElement = (event) => {
    console.log('Presionado');
  }

  return (
    <ScrollView contentContainerStyle={{  flexGrow: 1,justifyContent: 'flex-start', paddingHorizontal:20,paddingVertical:20}}>
        <Center>
          <VStack space={2} alignItems={{
          base: "center",
          md: "flex-start"
        }}>
            <Avatar bg={style.color.primary} alignSelf="center" size="2xl" source={{
            uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            }}>
              HB
            </Avatar>
            <Text style={{color:style.color.primary, fontWeight: 'bold'}}>Henry Bueno</Text>
            <Text style={{color:style.color.primary, fontWeight: 'bold'}}>henrybueno@gmail.com</Text>
      </VStack>
    </Center>
    <VStack w="100%" space={4} px="2"  alignItems="center" justifyContent="center">
        <Stack mt="1.5" flexDirection="row" space={2} mx={{
        base: "auto",
        md: "0"
      }}>
        <View>
          <Text style={{color:style.color.primary, fontWeight: 'bold'}}>Progreso</Text>
        </View>
           <Box w="100%" maxW="400" paddingRight={8} mt="2">
              <Progress value={45} mx="4"  size="md" colorScheme="darkBlue"/>
            </Box>
            
        </Stack>
      </VStack>
    <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="space-between">
        <Stack mb="2.5" mt="1.5" flexDirection="row" space={2} mx={{
        base: "auto",
        md: "0"
      }}>
          <Button size="sm" backgroundColor={style.color.primary} margin={2} padding={4} style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="file-text" size={25} color={style.color.amber} mx="auto" style={{textAlign:'center'}}/>
              <Text mt={2} style={{textAlign:'center', fontSize: 20}} color={style.color.secondary}>10</Text>
              CONTENIDOS
          </Button>
          <Button size="sm" backgroundColor={style.color.primary} margin={2} padding={4} style={{alignItems: 'center', justifyContent: 'center'}}>
              <Icon name="trophy" size={25} color={style.color.amber} mx="auto" style={{textAlign:'center'}}/>
              <Text mt={2} style={{textAlign:'center', fontSize: 20}} color={style.color.secondary}>15</Text>
              ACTIVIDADES
          </Button>
        </Stack>
      </VStack>



        <View style={{ flex: 1}}>
                  <VStack mt={5} space={4} w="100%" style={{ backgroundColor: '#F6F6F6', height: 80, width: '100%', borderRadius: 5 }}>
                    <Pressable paddingLeft={2} style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
                    <View style={{ backgroundColor: style.color.primary, height: 50, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                        <Text  style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>
                            <Icon name="edit" size={20} color={style.color.amber}/>
                        </Text>
                      </View>
                      <View style={{ paddingLeft: 10 }}>
                        <Text style={{ ...style.text.subtitle, fontWeight: 'bold', color:style.color.primary, fontSize:18 }}>Cambiar contraseña</Text>
                      </View>
                    </Pressable>
                  </VStack>
                  <VStack mt={5} space={4} w="100%" style={{ backgroundColor: '#F6F6F6', height: 80, width: '100%', borderRadius: 5 }}>
                    <Pressable paddingLeft={2} style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={(event) => onPressElement(event)}>
                      <View style={{ backgroundColor: style.color.primary, height: 50, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 45 }}>
                        <Text  style={{ ...style.text.title, color: style.color.secondary, fontWeight: 'bold', fontSize: 20 }}>
                            <Icon name="trash" size={20} color={style.color.amber} />
                        </Text>
                      </View>
                      <View style={{ paddingLeft: 10 }}>
                        <Text style={{ ...style.text.subtitle, fontWeight: 'bold', color:style.color.primary, fontSize:18 }}>Borrar datos</Text>
                      </View>
                    </Pressable>
                  </VStack>

        </View>
      
    </ScrollView>
  )
}

export default Settings;