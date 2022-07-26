import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ClassroomDetail from './components/ClassroomDetail';
import ClassroomStudents from './components/ClassroomStudents';
import style from '../../../styles';

import Icon from 'react-native-vector-icons/FontAwesome';

const PrivateRouter = () => {
  const Tab = createBottomTabNavigator();
  // const myIcon = <Icon name="rocket" size={30} color="#900" />;

  return (
    <Tab.Navigator initialRouteName="ClassroomDetail" 
      options={{
        headerTitleAlign: 'left',
        headerTransparent: true,
      }}>
      <Tab.Screen name="ClassroomDetail" component={ClassroomDetail} options={{ headerShown: false, tabBarLabel: 'Información', tabBarIcon: ({ color, size }) => (<Icon name="graduation-cap" size={30} color={style.color.primary} /> ) }} />
      <Tab.Screen name="ClassroomStudents" component={ClassroomStudents} options={{ headerShown: false, tabBarLabel: 'Alumnos', tabBarIcon: ({ color, size }) => (<Icon name="child" size={30} color={style.color.primary} /> ) }} />
    </Tab.Navigator>
  );
};

export default PrivateRouter;
