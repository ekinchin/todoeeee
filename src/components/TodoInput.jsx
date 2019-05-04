import React from 'react';
import propTypes from 'prop-types';
import {
  Row, Col, Button, InputGroup, FormControl, Container,
} from 'react-bootstrap';

const TodoInput = ({ input, onAppend }) => (
  <Container fluid="true">
    <Row noGutters="true" className="my-3">
      <Col>
        <InputGroup size="sm">
          <FormControl type="text" className="form-control" ref={input} placeholder="ТуДу ждет" />
          <InputGroup.Append>
            <Button variant="primary" size="sm" onClick={onAppend}>
              Добавить
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </Row>
  </Container>
);

export default TodoInput;

TodoInput.propTypes = {
  input: propTypes.string.isRequired,
  onAppend: propTypes.func.isRequired,
};
