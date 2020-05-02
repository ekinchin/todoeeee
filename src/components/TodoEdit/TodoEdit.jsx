import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import TodoList from '../../containers/TodoList';
import TodoInput from '../../containers/TodoInput';
import FileBlock from '../../containers/FileBlock';
import Paginator from '../../containers/Paginator';
import './style.css';

const TodoEdit = ({
  saveToStorage, restoreFromStorage, state,
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
    <Container fluid="falses">
      <TodoInput />
      <TodoList />
      <Paginator />
      <FileBlock />
    </Container>
  );
};

export default TodoEdit;

TodoEdit.propTypes = {
  saveToStorage: propTypes.func.isRequired,
  restoreFromStorage: propTypes.func.isRequired,
  state: propTypes.objectOf(propTypes.any).isRequired,
};
