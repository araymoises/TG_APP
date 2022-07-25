import React from 'react';
import { NativeBaseProvider } from 'native-base';
import MainRouter from './src/MainRouter';

const App = () => {
  return (
    <NativeBaseProvider>
      <MainRouter />
    </NativeBaseProvider>
  );
};

export default App;
