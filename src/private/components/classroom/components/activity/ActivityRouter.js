import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import { setClassroomTitle } from './../../../../../redux/reducers/classroomTitle';

import CreateActivity from './components/CreateActivity';
import ActivityCompletion from './components/ActivityCompletion';
import ActivityDetailTeacher from './components/ActivityDetailTeacher';
const ActivityRouter = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName="CreateActivity">
      <Stack.Screen name="CreateActivity" component={CreateActivity}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Crear Actividad'))} })} 
        options={{ headerShown: false }}
      />

      <Stack.Screen name="ActivityDetailTeacher" component={ActivityDetailTeacher}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Detalle de la actividad'))} })} 
        options={{ headerShown: false }}
      />

      <Stack.Screen name="ActivityCompletion" component={ActivityCompletion}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Actividad finalizada'))} })} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ActivityRouter;
