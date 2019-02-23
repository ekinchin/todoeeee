import React from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDone, onRemove }) => (
  <div className="container">
    {
        todos.map(
          todo => (
            <TodoItem todo={todo} onDone={onDone} onRemove={onRemove} key={todo.id} />
          ),
        )
      }
  </div>
);

export default TodoList;

TodoList.propTypes = {
  todos: propTypes.arrayOf(propTypes.string).isRequired,
  onDone: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
};