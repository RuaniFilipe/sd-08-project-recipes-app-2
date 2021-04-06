import React from 'react';

import Routes from './routes';

import './styles/main.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
