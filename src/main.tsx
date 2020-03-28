import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './app';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

console.log("here");