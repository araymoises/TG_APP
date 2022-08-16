import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Text,
  View,
} from 'native-base';

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen Private</Text>
    </View>
  );
};

export default Home;
