import React from 'react';
import propTypes from 'prop-types';
import { format } from 'date-fns';
import './style.css';

const TodoItem = ({ todo, onRemove }) => (
  <div className="item">
    <span className="item--date">
      {format(todo.id, 'MM.dd.yyyy HH:MM:SS')}
    </span>
    <span className="item--text">{todo.text}</span>
    <button className="item--closeButton" type="button" onClick={() => onRemove(todo.id)}>Delete</button>
  </div>
);

export default TodoItem;

TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: propTypes.object.isRequired,
  onRemove: propTypes.func.isRequired,
};
