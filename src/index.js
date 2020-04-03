/* eslint-disable react/jsx-filename-extension */
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import TodoEdit from './containers/TodoEdit';

import createStore from './store/store';

// eslint-disable-next-line no-underscore-dangle
const store = createStore({}, window.__REDUX_DEVTOOLS_EXTENSION__
  // eslint-disable-next-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <TodoEdit name="Task manager" />
  </Provider>,
  document.getElementById('root'),
);
