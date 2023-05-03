import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Text,
    View,
    Button,
    Image
  } from 'native-base';
  import style from '~styles';

const Logout = ({navigation}) => {
  const selected= require('./images/error.png')
  const navigate = navigation.navigate;
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userData');

    if (isMounted) {
      navigate('PublicRouter', { screen: 'Login' });
    }

  };
  return (
    <View style={{ flex: 3, justifyContent:'center', paddingHorizontal: 20, width: '100%' }} id="alert-register">
    <Image
      justifyContent="center"
      alignItems="center"
      source={selected}
      alt="image"
      size="2xl"
      key="lg"
      resizeMode="cover"
      mx="auto" />
      <Text style={{color:style.color.primary, fontWeight: 'bold', fontSize:18, textAlign:'center', paddingVertical:20}} >¿Está seguro que desea cerrar sesión?</Text>
      <Button style={{ ...style.button.primary }} _text={{ color: style.color.secondary }} onPress={handleLogout} >Cerrar sesión</Button>
  </View>
  )
}

export default Logout;