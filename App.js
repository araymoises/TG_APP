import React from 'react';
import { NativeBaseProvider } from 'native-base';
import MainRouter from './src/MainRouter';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <MainRouter />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
