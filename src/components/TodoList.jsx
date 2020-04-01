import React from 'react';
import propTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = ({
  todos, isReverse, onDone, onRemove,
}) => {
  // eslint-disable-next-line no-unused-vars
  const todosDir = isReverse ? todos.map(todo => todo).reverse() : todos.map(todo => todo);
  return (
    <Container fluid="true">
      {
      todosDir.map(
        todo => (
          <TodoItem todo={todo} onDone={onDone} onRemove={onRemove} key={todo.id} />
        ),
      )
    }
    </Container>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
  isReverse: propTypes.bool.isRequired,
  onDone: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
};
