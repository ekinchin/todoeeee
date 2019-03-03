/* eslint-disable react/jsx-no-bind */
import React from 'react';
import propTypes from 'prop-types';

import {
  Row, Button, Container, ButtonGroup,
} from 'react-bootstrap';

const HeaderMenu = ({
  onDownload, onUpload, onReverse, isReverse,
}) => (
  <Container fluid="true">
    <Row className="justify-content-between align-items-center" noGutters="true">
      <ButtonGroup>
        <Button size="sm" type="file" as="input" onChange={onUpload.bind(this)} />
        <Button size="sm" variant="success" onClick={onDownload.bind(this)}>скачать</Button>
        <Button size="sm" variant="primary" onClick={onReverse.bind(this)}>
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
