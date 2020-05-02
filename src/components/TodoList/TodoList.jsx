import React from 'react';
import propTypes from 'prop-types';
import TodoItem from '../TodoItem';
import './style.css';

const TodoList = ({
  todos, onDone, onRemove,
}) => (
  <React.Fragment>
    {
      todos.map(
        todo => (
          <TodoItem todo={todo} onDone={onDone} onRemove={onRemove} key={todo.id} />
        ),
      )
    }
  </React.Fragment>
);
export default TodoList;

TodoList.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
  onDone: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
};
