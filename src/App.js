import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import Search from './components/Search';

const App = () => {
  return (
    <Provider store={store}>
      <Search />
      <Dashboard />
    </Provider>
  );
};

export default App;






