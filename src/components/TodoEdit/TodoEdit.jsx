import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import TodoList from '../../containers/TodoList';
import TodoInput from '../../containers/TodoInput';
import FileBlock from '../../containers/FileBlock';
import Paginator from '../../containers/Paginator';
import Button from '../Button';

import './style.css';

const TodoEdit = ({
  saveToStorage, restoreFromStorage, toggleSortDirection, state,
}) => {
  // восстановление записей из локального стора при монтировании компонента
  useEffect(() => {
    restoreFromStorage();
  }, []);

  // сохранение записей в локальный стор
  useEffect(() => {
    saveToStorage();
  }, [state]);

  return (
    <div className="todoEdit">
      <TodoInput />
      <TodoList />
      <div className="footer">
        <Paginator className="footer--item" />
        <Button className="footer--item" onClick={toggleSortDirection} label="сортировка" />
        <FileBlock className="footer--item" />
      </div>
    </div>
  );
};

export default TodoEdit;

TodoEdit.propTypes = {
  saveToStorage: propTypes.func.isRequired,
  restoreFromStorage: propTypes.func.isRequired,
  toggleSortDirection: propTypes.func.isRequired,
  state: propTypes.objectOf(propTypes.any).isRequired,
};
