/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import TodoList from '../containers/TodoList';
import TodoInput from '../containers/TodoInput';
import FileBlock from '../containers/FileBlock';
import Paginator from '../containers/Paginator';

// eslint-disable-next-line arrow-body-style
const TodoEdit = ({
  saveToStorage, restoreFromStorage, isRestored, state,
}) => {
  useEffect(() => {
    // restore
    if (!isRestored) { restoreFromStorage(); }
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
  isRestored: propTypes.bool.isRequired,
  state: propTypes.objectOf(propTypes.any).isRequired,
};
