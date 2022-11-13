import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import { setClassroomTitle } from '../../../../../redux/reducers/classroomTitle';
import ContentsList from './ContentsList';
import CreateContents from './components/CreateContents';
import ContentDetail from './components/ContentDetail';
import ContentEdit from './components/ContentEdit';

const ContentsRouter = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName="ContentsList">
      <Stack.Screen name="ContentsList" component={ContentsList}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Listado de contenidos'))} })} 
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CreateContents" component={CreateContents}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Crear contenido'))} })} 
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ContentDetail" component={ContentDetail}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Detalle del contenido'))} })} 
        options={{ headerShown: false }}
      />
       <Stack.Screen name="ContentEdit" component={ContentEdit}
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Editar contenido'))} })} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ContentsRouter;
