import React from 'react';
import propTypes from 'prop-types';
import {
  Row, Col, Button, InputGroup, FormControl, Container,
} from 'react-bootstrap';

const TodoInput = ({ input, onAppend }) => (
  <Container fluid="true">
    <Row noGutters="true" className="justify-content-center align-items-center text-left my-3">
      <Col className="col-8">
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
  input: propTypes.objectOf(propTypes.object).isRequired,
  onAppend: propTypes.func.isRequired,
};
