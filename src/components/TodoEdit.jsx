import React from 'react';
import { Container } from 'react-bootstrap';
import TodoList from '../containers/TodoList';
import TodoInput from '../containers/TodoInput';
import FileBlock from '../containers/FileBlock';
import Paginator from '../containers/Paginator';

const TodoEdit = () => (
  <Container fluid="falses">
    <TodoInput />
    <TodoList />
    <Paginator />
    <FileBlock />
  </Container>
);

export default TodoEdit;
