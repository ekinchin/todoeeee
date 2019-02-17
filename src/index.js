import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import TodoEdit from './components/TodoEdit';

import { Provider } from 'react-redux';
import createStore from './store/store';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <TodoEdit name="Task manager" />
  </Provider>,
  document.getElementById('TodoEdit')
)