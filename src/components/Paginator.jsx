/* eslint-disable react/jsx-no-bind */
import React from 'react';
import propTypes from 'prop-types';
import {
  Pagination, Container, Row, Col, ButtonGroup, DropdownButton, Dropdown,
} from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
const Paginator = ({
  currentPage, pageCount, onChangePage, todosOnPage, onChangeTodosOnPage,
}) => {
  const items = [];
  for (let i = 1; i <= pageCount; i += 1) {
    items.push(i);
  }
  return (
    <Container>
      <Row className="justify-content-md-center align-items-top text-left my-3" noGutters="true">
        <Col className="col-auto m-3">
          {
            pageCount !== 1
              ? (
                <Pagination size="sm">
                  {
                    items.map(
                      item => (
                        <Pagination.Item className={item === currentPage ? 'active' : null} key={item} onClick={onChangePage.bind(this, item)}>
                          {item}
                        </Pagination.Item>
                      ),
                    )
                  }
                </Pagination>
              )
              : null
          }
        </Col>
        <Col className="col-auto m-3">
          <span className="mr-1">Записей на странице:</span>
          <ButtonGroup size="sm" vertical>
            <DropdownButton size="sm" as={ButtonGroup} title={todosOnPage}>
              <Dropdown.Item size="sm" onClick={onChangeTodosOnPage.bind(this, 10)}>10</Dropdown.Item>
              <Dropdown.Item size="sm" onClick={onChangeTodosOnPage.bind(this, 20)}>20</Dropdown.Item>
              <Dropdown.Item size="sm" onClick={onChangeTodosOnPage.bind(this, 30)}>30</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
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
};
