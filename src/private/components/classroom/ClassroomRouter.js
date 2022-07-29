import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ClassroomDetail from './components/ClassroomDetail';
import StudentsList from './components/StudentsList';
import style from '../../../styles';
import ContentsList  from '../contents/components/ContentsList';

import Icon from 'react-native-vector-icons/FontAwesome';


const PrivateRouter = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator initialRouteName="ClassroomDetail" tabBarPosition='bottom' tabBarStyle={{ height:100 }}
      screenOptions={{
        tabBarLabelStyle: { ...style.text.xs },
        tabBarStyle: { height: 55 },
      }}
      options={{
        headerTitleAlign: 'left',
        headerTransparent: true,
      }}>
      <Tab.Screen name="ClassroomDetail" component={ClassroomDetail} options={{ headerShown: false, tabBarLabel: 'Información', tabBarIcon: ({ color, size }) => (<Icon name="graduation-cap" size={20} color={style.color.primary} /> ) }} />
      <Tab.Screen name="ClassroomStudents" component={ClassroomStudents} options={{ headerShown: false, tabBarLabel: 'Alumnos', tabBarIcon: ({ color, size }) => (<Icon name="child" size={20} color={style.color.primary} /> ) }} />
      <Tab.Screen name="ContentsList" component={ContentsList} options={{ headerShown: false, tabBarLabel: 'Contenidos', tabBarIcon: ({ color, size }) => (<Icon name="book" size={20} color={style.color.primary} /> ) }} />
    </Tab.Navigator>
  );
};

export default PrivateRouter;
