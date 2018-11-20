import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';

ReactDOM.render(<TodoApp name="Task manager" />, document.getElementById('root'));