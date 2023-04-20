import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import { setClassroomTitle } from '../../../../redux/reducers/classroomTitle';
import CreateClassroom from './CreateClassroom';
import EditClassroom from './EditClassroom';

const ClassroomAdminRouter = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName="CreateClassroom">
      <Stack.Screen name="CreateClassroom" component={CreateClassroom}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Crear Aula'))} })} 
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EditClassroom" component={EditClassroom}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Editar Aula'))} })} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    
  );
};

export default ClassroomAdminRouter;
