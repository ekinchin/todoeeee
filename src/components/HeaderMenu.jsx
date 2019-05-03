/* eslint-disable react/jsx-no-bind */
import React from 'react';
import propTypes from 'prop-types';
import {
  Row, Button, Container, ButtonGroup,
} from 'react-bootstrap';
import FileUploader from './FileUploader';


const HeaderMenu = ({
  onDownload, onUpload, onReverse, isReverse,
}) => (
  <Container fluid="true">
    <Row className="justify-content-between align-items-center" noGutters="true">
      <ButtonGroup>
        <FileUploader />
        <Button size="sm" type="file" as="input" onChange={onUpload} />
        <Button size="sm" variant="success" onClick={onDownload}>скачать</Button>
        <Button size="sm" variant="primary" onClick={onReverse}>
          {isReverse ? 'От новых к старым' : 'От старых к новым'}
        </Button>
      </ButtonGroup>
    </Row>
  </Container>
);

export default HeaderMenu;

HeaderMenu.propTypes = {
  onDownload: propTypes.func.isRequired,
  onUpload: propTypes.func.isRequired,
  onReverse: propTypes.func.isRequired,
  isReverse: propTypes.bool.isRequired,
};
