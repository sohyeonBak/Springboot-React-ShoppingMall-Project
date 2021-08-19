import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { AppStore } from './store/configureStore';


ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

