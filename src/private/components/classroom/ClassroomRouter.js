import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ClassroomDetail from './components/ClassroomDetail';
import StudentsList from './components/StudentsList';
import style from '../../../styles';
import { useSelector, useDispatch } from 'react-redux';
import { setClassroomTitle } from './../../../redux/reducers/classroomTitle';

import Icon from 'react-native-vector-icons/FontAwesome';

const PrivateRouter = () => {
  const Tab = createMaterialTopTabNavigator();
  const dispatch = useDispatch();

  return (
    <Tab.Navigator initialRouteName="ClassroomDetail" tabBarPosition='bottom' tabBarStyle={{ height:100 }} backBehavior='history'
      screenOptions={{
        tabBarLabelStyle: { ...style.text.xs },
        tabBarStyle: { height: 55 },
      }}
      options={{
        headerTitleAlign: 'left',
        headerTransparent: true,
      }}
    >
      <Tab.Screen name="ClassroomDetail" 
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Información del aula'))} })} 
        component={ClassroomDetail} 
        options={{ headerShown: false, tabBarLabel: 'Información', tabBarIcon: ({ color, size }) => (<Icon name="graduation-cap" size={20} color={style.color.primary} /> ) }} />

      <Tab.Screen name="StudentsList" 
        component={StudentsList} 
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Listado de alumnos'))} })} 
        options={{ headerShown: false, tabBarLabel: 'Alumnos', tabBarIcon: ({ color, size }) => (<Icon name="child" size={20} color={style.color.primary} /> ) }} />
    </Tab.Navigator>
  );
};

export default PrivateRouter;
