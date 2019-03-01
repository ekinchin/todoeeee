import React from 'react';
import propTypes from 'prop-types';
import {
  Row, Col, Button, ButtonGroup, Card,
} from 'react-bootstrap';

const TodoItem = ({ todo, onDone, onRemove }) => (
  <Row className="justify-content-between align-items-center my-3 p-0 text-left">
    <Col className="col-2">{todo.date}</Col>
    <Col className="col-8">
      <Card bg="light" text={todo.isDone ? 'muted' : 'dark'}>
        <Card.Body>
          <Card.Text>{todo.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col className="col-2">
      <ButtonGroup>
        <Button variant={todo.isDone ? 'secondary' : 'success'} size="sm" onClick={onDone(todo.id)}>{todo.isDone ? 'Undo' : 'Done'}</Button>
        <Button variant="warning" size="sm" onClick={onRemove(todo.id)}>Del</Button>
      </ButtonGroup>
    </Col>
  </Row>
);

export default TodoItem;

TodoItem.propTypes = {
  todo: propTypes.string.isRequired,
  onDone: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
};
