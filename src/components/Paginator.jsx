/* eslint-disable react/jsx-no-bind */
import React from 'react';
import propTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
const Paginator = ({ currentPage, pageCount, onChangePage }) => {
  const items = [];
  for (let i = 1; i <= pageCount; i += 1) {
    items.push(i);
  }
  return (
    pageCount !== 1
      ? (
        <Pagination>
          {
          items.map(
            item => (
              <Pagination.Item key={item} onClick={onChangePage.bind(this, item)}>
                {item}
              </Pagination.Item>
            ),
          )

      }
        </Pagination>
      )
      : null
  );
};

export default Paginator;

Paginator.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentPage: propTypes.number.isRequired,
  pageCount: propTypes.number.isRequired,
  // onDone: propTypes.func.isRequired,
  onChangePage: propTypes.func.isRequired,
};
