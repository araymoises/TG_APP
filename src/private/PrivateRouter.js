import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import Template from './components/Template';
import ClassroomsList from './components/ClassroomsList';
import ClassroomRouter from './components/classroom/ClassroomRouter';

const PrivateRouter = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home" 
      options={{
        headerTitleAlign: 'left',
        headerTransparent: true,
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Template" component={Template} />
      <Drawer.Screen name="ClassroomsList" component={ClassroomsList} />
      <Drawer.Screen name="ClassroomRouter" component={ClassroomRouter} />
    </Drawer.Navigator>
  );
};

export default PrivateRouter;
