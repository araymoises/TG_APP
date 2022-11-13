import React from 'react';
import {
  View,
  Input, 
  Stack, 
  Center,
  Button,
  Image,
  ScrollView,
  Text,
} from 'native-base';
import style from '~styles';

const Home = () => {
  const selected= require('./classroom/components/activity/components/images/activityCompletion.png')

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center', width: '100%', backgroundColor: 'white'}}>
      <Text style={{color:style.color.primary, fontWeight: 'bold', fontSize:20, textAlign:'center', marginTop:10}} >¡Aquí comienza tu aprendizaje!</Text>
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
    </ScrollView>
  );
};

export default Home;
