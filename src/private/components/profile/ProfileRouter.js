import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import { setClassroomTitle } from './../../../redux/reducers/classroomTitle';
import ProfileEdit from './components/ProfileEdit';
import ResetPassword from './components/ResetPassword';

const ProfileRouter = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName="ProfileEdit">
      <Stack.Screen name="ProfileEdit" component={ProfileEdit}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Editar perfil'))} })} 
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ResetPassword" component={ResetPassword}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Cambiar contraseña'))} })} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    
  );
};

export default ProfileRouter;
