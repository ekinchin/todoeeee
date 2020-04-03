/* eslint-disable react/jsx-no-bind */
import React from 'react';
import propTypes from 'prop-types';
import {
  Pagination, Container, Row, Col, Button, ButtonGroup, DropdownButton, Dropdown,
} from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
const Paginator = ({
  currentPage, pageCount, onChangePage, todosOnPage, onChangeTodosOnPage, onReverse, isReverse,
}) => {
  let items = [];
  if (pageCount <= 5) {
    for (let i = 1; i <= pageCount; i += 1) {
      items.push(i);
    }
  } else {
    for (let i = currentPage - 2; i <= currentPage + 2; i += 1) {
      items.push(i);
    }
    if (items[0] < 1) {
      items = items.map(item => item - items[0] + 1);
    }
    if (items[4] > pageCount) {
      items = items.map(item => item - items[4] + pageCount);
    }
  }
  return (
    <Container>
      <Row className="justify-content-md-center align-items-top text-left" noGutters="true">
        <Col className="col-auto">
          {
            pageCount !== 1
              ? (
                <Pagination size="sm">
                  <Pagination.Item className={currentPage === 1 ? 'disabled' : null} key={1} onClick={() => onChangePage(1)}>
                      Первая
                  </Pagination.Item>
                  {
                    items.map(item => (
                      <Pagination.Item className={currentPage === item ? 'active' : null} key={item} onClick={() => onChangePage(item)}>
                        { currentPage === item ? `${item} из ${pageCount}` : item }
                      </Pagination.Item>
                    ))
                  }
                  <Pagination.Item className={currentPage === pageCount ? 'disabled' : null} key={pageCount} onClick={() => onChangePage(pageCount)}>
                      Последняя
                  </Pagination.Item>
                </Pagination>
              )
              : null
          }
        </Col>
      </Row>
      <Row className="justify-content-md-center align-items-top text-left" noGutters="true">
        <Col className="col-auto">
          <span className="mr-1">Записей на странице:</span>
          <ButtonGroup size="sm" vertical>
            <DropdownButton size="sm" as={ButtonGroup} title={todosOnPage}>
              <Dropdown.Item size="sm" onClick={() => onChangeTodosOnPage(10)}>10</Dropdown.Item>
              <Dropdown.Item size="sm" onClick={() => onChangeTodosOnPage(20)}>20</Dropdown.Item>
              <Dropdown.Item size="sm" onClick={() => onChangeTodosOnPage(30)}>30</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
          <Button className="mx-3" size="sm" variant="primary" onClick={onReverse}>
            {isReverse ? 'От новых к старым' : 'От старых к новым'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Paginator;

Paginator.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentPage: propTypes.number.isRequired,
  pageCount: propTypes.number.isRequired,
  onChangePage: propTypes.func.isRequired,
  todosOnPage: propTypes.number.isRequired,
  onChangeTodosOnPage: propTypes.func.isRequired,
  onReverse: propTypes.func.isRequired,
  isReverse: propTypes.bool.isRequired,
};
