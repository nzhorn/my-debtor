import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './state/store';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

import { makeServer } from './fake-api';
import { loadUser } from './state/user/user.slice';

const environment = process.env.NODE_ENV;

if (environment !== 'production') {
  makeServer({ environment });
}

store.dispatch(loadUser());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
