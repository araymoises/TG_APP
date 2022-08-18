import React from 'react'
import {
  Text,
  View,
  ScrollView,
  Image,
  Center,
} from 'native-base';

import style from '~styles';

import Icon from 'react-native-vector-icons/FontAwesome';


const About = () => {

  const selected= require('./images/woman.png')
  return (
    <ScrollView contentContainerStyle={{  flexGrow: 1,justifyContent: 'flex-start', paddingHorizontal:20,paddingVertical:20}}>
      <Text style={{color:style.color.primary, fontWeight: 'bold', fontSize:20, textAlign:'center'}} >Nuevas formas de realizar actividades y aprender</Text>
      <View mt={4}>
        <Icon name="star" size={25} color={style.color.amber} mx="auto" style={{textAlign:'center'}}/>
      </View>
      <Text italic  mt={4} style={{textAlign:'center', fontSize: 16}} >"La Realidad Aumentada es una tecnología que permite combinar elementos del mundo real con elementos del mundo virtual en tiempo real"</Text>
      
      <Text mt={4} style={{textAlign:'center', fontSize: 14}} >Restrepo, Cuello y Contreras, 2017</Text>
      <View mt={4}>
        <Icon name="star" size={25} color={style.color.amber} mx="auto" style={{textAlign:'right'}}/>
      </View>
      <View mt={4}>
        <Icon name="star" size={25} color={style.color.amber} mx="auto" style={{textAlign:'left'}}/>
      </View>
      <View mt={2}
        style={{flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start'
        }}>
        <View style={{ width: '50%'}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
        </View>
        <View style={{ width: '50%'}}>
          <Text>En esta aplicación podrás: </Text>
          <Text bold mt={4} style={{color:style.color.primary}}>Docente </Text>
          <Text>1. Administrar tus aulas </Text>
          <Text>2. Administrar tus contenidos </Text>
          <Text>3. Crear actividades y configurarlas </Text>
          <Text>4. Monitorear el progreso de tus alumnos </Text>

          <Text bold mt={4} style={{color:style.color.primary}}>Alumno </Text>
          <Text>1. Aprender de forma dinámica y divertida </Text>
          <Text>2. Realizar tus actividades </Text>
          <Text>3. Visualizar tu progreso </Text>
        </View>

      </View>

      <View mt={4}>
        <Icon name="star" size={25} color={style.color.amber} mx="auto" style={{textAlign:'left'}}/>
      </View>

      <View mt={4} style={{alignItems: 'center', justifyContent: 'center'}}>
        <Center>
        <Text style={{color:style.color.primary, fontWeight: 'bold', fontSize:20, textAlign:'center'}} >Aprende en cualquier momento, desde cualquier sitio</Text>
        </Center>
      
      </View>

      <View mt={4}>
        <Icon name="star" size={25} color={style.color.amber} mx="auto" style={{textAlign:'right'}}/>
      </View>

      <View mt={2}>
        <Icon name="star" size={25} color={style.color.amber} mx="auto" style={{textAlign:'left'}}/>
      </View>
    </ScrollView>
  )
}

export default About
