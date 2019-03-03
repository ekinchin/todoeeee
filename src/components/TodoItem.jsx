import React from 'react';
import propTypes from 'prop-types';
import {
  Row, Col, Button, ButtonGroup, Card,
} from 'react-bootstrap';

const TodoItem = ({ todo, onDone, onRemove }) => (
  <Row className="justify-content-between align-items-center text-left my-3" noGutters="true">
    <Col className="col-auto">{todo.date}</Col>
    <Col className="col-8">
      <Card bg="light" text={todo.isDone ? 'muted' : 'dark'}>
        <Card.Body className="p-1">
          <Card.Text>{todo.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col className="col-auto">
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
