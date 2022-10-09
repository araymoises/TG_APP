import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import { setClassroomTitle } from './../../../redux/reducers/classroomTitle';
import ProfileEdit from './components/ProfileEdit';

const ProfileRouter = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName="ProfileEdit">
      <Stack.Screen name="ProfileEdit" component={ProfileEdit}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Editar perfil'))} })} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileRouter;
