import React from 'react';
import propTypes from 'prop-types';
import { format } from 'date-fns';
import { ru, enGB } from 'date-fns/locale';
import './style.css';

const locale = { locale: navigator.language === 'ru-RU' ? ru : enGB }; // получить локаль браузера

const TodoItem = ({ todo, onRemove }) => (
  <div className="item">
    <span className="item--date">
      {format(todo.id, 'd MMMM yyyy HH:MM:SS', locale).toLocaleLowerCase()}
    </span>
    <div className="item--text">
      <span>{todo.text}</span>
      <button className="item--closeButton" type="button" onClick={() => onRemove(todo.id)}>X</button>
    </div>
  </div>
);

export default TodoItem;

TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: propTypes.object.isRequired,
  onRemove: propTypes.func.isRequired,
};
