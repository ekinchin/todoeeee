/* eslint-disable react/jsx-filename-extension */
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import TodoEdit from './components/TodoEdit';

import createStore from './store/store';

// eslint-disable-next-line no-underscore-dangle
const store = createStore({}, window.__REDUX_DEVTOOLS_EXTENSION__
  // eslint-disable-next-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__());

const todos = [{
  id: 1550935913612, date: '23.02.2019, 20:31:53', text: 'сегодня сделал все: пипи на папу, кака пару раз, ну и вообще. Подкармливаем смесью, сон 3-4 часа.', isDone: false,
}, {
  id: 1550935977335, date: '23.02.2019, 20:32:57', text: 'выпил пару бокалов вина я. Хорошо.', isDone: false,
}, {
  id: 1550936486626, date: '23.02.2019, 20:41:26', text: 'сейчас неспокойно ребенку. Час назад Лена кормила грудью и он уснул, но вот час прошел... Подкорм, грудь, все идет в дело. Пукал.', isDone: false,
}];

ReactDOM.render(
  <Provider store={store}>
    <TodoEdit name="Task manager" todos={todos} isReverse={false} pageNumber={1} todosOnPage={10} handlerAppendTodo={() => {}} handlerDoneTodo={() => {}} handlerRemoveTodo={() => {}} onChangePage={() => {}} onChangeTodosOnPage={() => {}} handlerReverseSelect={() => {}} handlerFileDownload={() => {}} handleFileUpload={() => {}} />
  </Provider>,
  document.getElementById('root'),
);
