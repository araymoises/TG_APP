import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import ClassroomsList from './components/ClassroomsList';
import ClassroomRouter from './components/classroom/ClassroomRouter';
import ActivityRouter from './components/classroom/components/activity/ActivityRouter';
import StudentRouter from './components/classroom/components/student/StudentRouter';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import style from '../styles';

const PrivateRouter = () => {
  const Drawer = createDrawerNavigator();
  const classroomTitle = useSelector((state) => state.classroomTitle.value);

  return (
    <Drawer.Navigator initialRouteName="Home" backBehavior='history'
      options={{
        headerTitleAlign: 'left',
        headerTransparent: true,
      }}>
      <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: 'Home', drawerIcon: ({ color, size }) => (<Icon name="graduation-cap" size={30} color={style.color.primary} /> ) }} />
      <Drawer.Screen name="ClassroomsList" component={ClassroomsList} options={{ title: 'Aulas', drawerLabel: 'Aulas', drawerIcon: ({ color, size }) => (<Icon name="graduation-cap" size={30} color={style.color.primary} /> ) }} />


      {/* Invisible items */}
      <Drawer.Screen name="ClassroomRouter" component={ClassroomRouter} options={{ title: classroomTitle, drawerLabel: 'ClassroomRouter', drawerItemStyle: { display: 'none', height: 0 } }} />
      <Drawer.Screen name="ActivityRouter" component={ActivityRouter} options={{ title: classroomTitle, drawerLabel: 'ActivityRouter', drawerItemStyle: { display: 'none', height: 0 } }} />
      <Drawer.Screen name="StudentRouter" component={StudentRouter} options={{ title: classroomTitle, drawerLabel: 'StudentRouter', drawerItemStyle: { display: 'none', height: 0 } }} />
    </Drawer.Navigator>
  );
};

export default PrivateRouter;
