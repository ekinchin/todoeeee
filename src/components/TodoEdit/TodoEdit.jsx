import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import TodoList from '../../containers/TodoList';
import TodoInput from '../../containers/TodoInput';
import FileBlock from '../../containers/FileBlock';
import Paginator from '../../containers/Paginator';
import Button from '../Button';
import SelectButton from '../SelectButton';

import './style.css';

const TodoEdit = ({
  saveToStorage, restoreFromStorage, toggleSortDirection, state, setItemsOnPage,
}) => {
  // восстановление записей из локального стора при монтировании компонента
  useEffect(() => {
    restoreFromStorage();
  }, []);

  // сохранение записей в локальный стор
  useEffect(() => {
    saveToStorage();
  }, [state]);
  const selectList = [
    { label: 10, value: 10, active: state.items.todosOnPage === 10 },
    { label: 20, value: 20, active: state.items.todosOnPage === 20 },
    { label: 30, value: 30, active: state.items.todosOnPage === 30 },
  ];
  return (
    <div className="todoEdit">
      <header><TodoInput /></header>
      <div><TodoList /></div>
      <footer className="footer">
        <div className="footer--row">
          <Paginator />
          <Button onClick={toggleSortDirection} label="От старых к новым" altLabel="От новых к старым" state={state.items.isReverse} />
        </div>
        <div className="footer--row">
          <div className="footer--row__total">
            <span>Отображать:</span>
            <SelectButton pairs={selectList} onSelect={setItemsOnPage} />
          </div>
          <FileBlock />
        </div>
      </footer>
    </div>
  );
};

export default TodoEdit;

TodoEdit.propTypes = {
  saveToStorage: propTypes.func.isRequired,
  restoreFromStorage: propTypes.func.isRequired,
  toggleSortDirection: propTypes.func.isRequired,
  state: propTypes.objectOf(propTypes.any).isRequired,
  setItemsOnPage: propTypes.func.isRequired,
};
