import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

// import Home from './private/components/Home';
// import Template from './private/components/Template';
import PrivateRouter from './private/PrivateRouter';
import { Linking } from 'react-native';
import PublicRouter from './public/PublicRouter';

const MainRouter = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  const handleUrl = ({ url }) => {
    const data = getData(url)
    console.log('urlData');
    console.log(data);
    if (data.action === 'studentInvitation') {
      navigation.navigate('PublicRouter', { screen: 'SignupStudent', params: { email: data.email, classroom: data.classroom } });
    }
  };

  const decode = (str) => {
    var j;
    var hexes = str.match(/.{1,2}/g) || [];
    var back = "";
    for (j = 0; j < hexes.length; j++) {
      back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
  }

  const getData = (url) => {
    let path = url.slice(22)
    const action = path.split('/')[0]
    const stringData = path.split('/')[1]
    const data = stringData.split('.')

    return {
      action,
      email: decode(data[0]),
      classroom: data[1]
    }
  }

  useEffect(() => {
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleUrl({ url })
      }
    });
    Linking.addEventListener('url', handleUrl);
  }, [])

  return (
    <Stack.Navigator initialRouteName="PublicRouter">
      <Stack.Screen name="PublicRouter" component={PublicRouter} options={{ headerShown: false }} />
      <Stack.Screen name="PrivateRouter" component={PrivateRouter} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainRouter;
