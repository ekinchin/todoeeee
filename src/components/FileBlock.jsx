/* eslint-disable react/jsx-no-bind */
import React from 'react';
import propTypes from 'prop-types';
import {
  Row, Button, Container, ButtonGroup,
} from 'react-bootstrap';

const FileBlock = ({
  onDownload, onUpload,
}) => (
  <Container fluid="true">
    <Row className="justify-content-center align-items-center my-3" noGutters="true">
      <ButtonGroup>
        <input type="file" onChange={e => onUpload(e)} />
        <Button size="sm" variant="success" onClick={() => onDownload()}>скачать</Button>
      </ButtonGroup>
    </Row>
  </Container>
);

export default FileBlock;

FileBlock.propTypes = {
  onDownload: propTypes.func.isRequired,
  onUpload: propTypes.func.isRequired,
};
