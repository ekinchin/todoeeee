import React from 'react';
import propTypes from 'prop-types';
import {
  Row, Col, Button, InputGroup, FormControl, Container,
} from 'react-bootstrap';

const TodoInput = ({ value, onAppend, onChange }) => (
  <Container fluid="true">
    <Row noGutters="true" className="my-3">
      <Col>
        <InputGroup size="sm">
          <FormControl type="text" className="form-control" value={value} onChange={onChange} placeholder="Write your todo here" />
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
  value: propTypes.string.isRequired,
  onAppend: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
};
