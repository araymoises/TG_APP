import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './components/Home';
import Template from './components/Template';

const PrivateRouter = () => {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Template" component={Template} />
      </Stack.Navigator>
  );
};

export default PrivateRouter;
