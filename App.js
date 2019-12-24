import React from 'react';
import { StoreContext } from 'redux-react-hook';
import { configureStore } from './src/store';
import RootScreen from './src/screens/root';

const App = props => {
  const store = configureStore();

  return (
    <StoreContext.Provider value={ store }>
      <RootScreen />
    </StoreContext.Provider>
  );
}

export default App;