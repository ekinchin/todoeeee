import React from 'react';
import propTypes from 'prop-types';
import { format } from 'date-fns';

import {
  Row, Col, Button, Card,
} from 'react-bootstrap';

const TodoItem = ({ todo, onRemove }) => (
  <Row className="justify-content-center align-items-center text-left my-3" noGutters="true">
    <Col className="col-auto mx-1">
      {format(todo.id, 'MM.dd.yyyy HH:MM:SS')}
    </Col>
    <Col className="col-6">
      <Card bg="light" text="dark">
        <Card.Body className="p-1">
          <Card.Text>{todo.text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col className="col-auto mx-1">
      <Button variant="secondary" size="sm" onClick={() => onRemove(todo.id)}>Delete</Button>
    </Col>
  </Row>
);

export default TodoItem;

TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: propTypes.object.isRequired,
  onRemove: propTypes.func.isRequired,
};
