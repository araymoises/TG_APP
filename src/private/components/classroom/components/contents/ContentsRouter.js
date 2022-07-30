import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import { setClassroomTitle } from '../../../../../redux/reducers/classroomTitle';

import CreateContents from './components/CreateContents';

const ContentsRouter = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName="CreateContents">
      <Stack.Screen name="CreateContents" component={CreateContents}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Crear contenido'))} })} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ContentsRouter;
