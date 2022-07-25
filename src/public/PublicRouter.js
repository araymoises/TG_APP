import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import Signup from './components/Signup';

const PublicRouter = () => {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
};

export default PublicRouter;
