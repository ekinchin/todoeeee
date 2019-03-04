import React from 'react';
import propTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDone, onRemove }) => (
  <Container fluid="true">
    {
      todos.map(
        todo => (
          <TodoItem todo={todo} onDone={onDone} onRemove={onRemove} key={todo.id} />
        ),
      )
    }
  </Container>
);

export default TodoList;

TodoList.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
  onDone: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
};
