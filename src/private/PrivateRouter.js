import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import ClassroomsList from './components/ClassroomsList';
import ClassroomRouter from './components/classroom/ClassroomRouter';
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
      <Drawer.Screen name="ClassroomRouter" component={ClassroomRouter} options={{ title: classroomTitle, drawerLabel: 'ClassroomRouter', drawerItemStyle: { display: 'none', height: 0 } , drawerIcon: ({ color, size }) => (<Icon name="graduation-cap" size={30} color={style.color.primary} /> ) }} />
    </Drawer.Navigator>
  );
};

export default PrivateRouter;
