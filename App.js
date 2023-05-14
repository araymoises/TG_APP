import React from 'react';
import { NativeBaseProvider } from 'native-base';
import MainRouter from './src/MainRouter';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <MainRouter />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
