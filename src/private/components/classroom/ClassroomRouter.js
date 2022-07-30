import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ClassroomDetail from './components/ClassroomDetail';
import StudentsList from './components/student/StudentsList';
import ActivitiesList from './components/activity/ActivitiesList';
import style from '~styles';
import { useSelector, useDispatch } from 'react-redux';
import { setClassroomTitle } from './../../../redux/reducers/classroomTitle';
import ContentsList from './components/contents/ContentsList';

import Icon from 'react-native-vector-icons/FontAwesome5';

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
        options={{ headerShown: false, tabBarLabel: 'Información', tabBarIcon: ({ color, size }) => (<Icon name={'graduation-cap'} size={20} color={style.color.primary} /> ) }} />

      <Tab.Screen name="StudentsList" 
        component={StudentsList} 
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Listado de alumnos'))} })} 
        options={{ headerShown: false, tabBarLabel: 'Alumnos', tabBarIcon: ({ color, size }) => (<Icon name={'child'} size={20} color={style.color.primary} /> ) }} />
      
      <Tab.Screen name="ActivitiesList" 
        component={ActivitiesList} 
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Listado de actividades'))} })} 
        options={{ headerShown: false, tabBarLabel: 'Actividades', tabBarIcon: ({ color, size }) => (<Icon name={'cube'} size={20} color={style.color.primary} /> ) }} />
      
      <Tab.Screen name="ContentsList"
        component={ContentsList} 
        listeners={() => ({focus: () =>{ dispatch(setClassroomTitle('Listado de contenidos'))} })} 
        options={{ headerShown: false, tabBarLabel: 'Contenidos', tabBarIcon: ({ color, size }) => (<Icon name={'book'} size={20} color={style.color.primary} /> ) }} />

    </Tab.Navigator>
  );
};

export default PrivateRouter;
