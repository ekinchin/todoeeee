/* eslint-disable react/jsx-no-bind */
import React from 'react';
import propTypes from 'prop-types';

import {
  Row, Col, Button,
} from 'react-bootstrap';

const HeaderMenu = ({
  onDownload, onUpload, onReverse, isReverse,
}) => (
  <Row className="justify-content-between align-items-center">
    <Col>
      <Button size="sm" type="file" as="input" onChange={onUpload.bind(this)} />
    </Col>
    <Col>
      <Button size="sm" variant="success" onClick={onDownload.bind(this)}>скачать</Button>
    </Col>
    <Col>
      <Button size="sm" variant="primary" onClick={onReverse.bind(this)}>
        {isReverse ? 'От новых к старым' : 'От старых к новым'}
      </Button>
    </Col>
  </Row>
);

export default HeaderMenu;

HeaderMenu.propTypes = {
  onDownload: propTypes.func.isRequired,
  onUpload: propTypes.func.isRequired,
  onReverse: propTypes.func.isRequired,
  isReverse: propTypes.bool.isRequired,
};
