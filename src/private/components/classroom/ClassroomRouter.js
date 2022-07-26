import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ClassroomDetail from './components/ClassroomDetail';
import ClassroomStudents from './components/ClassroomStudents';

const PrivateRouter = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="ClassroomDetail" 
      options={{
        headerTitleAlign: 'left',
        headerTransparent: true,
      }}>
      <Tab.Screen name="ClassroomDetail" component={ClassroomDetail} options={{ headerShown: false }} />
      <Tab.Screen name="ClassroomStudents" component={ClassroomStudents} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default PrivateRouter;
