import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import SignupTeacher from './components/SignupTeacher';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import SignupStudent from './components/SignupStudent';

const PublicRouter = () => {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupTeacher} options={{ headerShown: false }} />
        <Stack.Screen name="SignupStudent" component={SignupStudent} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
};

export default PublicRouter;
