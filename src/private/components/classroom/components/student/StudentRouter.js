import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import { setClassroomTitle } from '../../../../../redux/reducers/classroomTitle';

import InviteStudent from './components/InviteStudent';

const StudentRouter = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName="InviteStudent">
      <Stack.Screen name="InviteStudent" component={InviteStudent}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Invitar Alumno'))} })} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StudentRouter;
