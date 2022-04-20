import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { globalStore, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';



ReactDOM.render(
  <>
    <Provider store={globalStore}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>,
  document.getElementById('root')
);

