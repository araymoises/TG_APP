import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// import Home from './private/components/Home';
// import Template from './private/components/Template';
import PrivateRouter from './private/PrivateRouter';
import PublicRouter from './public/PublicRouter';

const MainRouter = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PublicRouter">
        <Stack.Screen name="PublicRouter" component={PublicRouter} options={{ headerShown: false }} />
        <Stack.Screen name="PrivateRouter" component={PrivateRouter} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
