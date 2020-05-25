/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import propTypes from 'prop-types';
import './style.css';

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
    pageCount !== 1
      ? (
        <ul className="paginator">
          <li className="paginator--item" key={1} type="none">
            <button className="paginator--button" type="button" onClick={() => onChangePage(1)}>Первая</button>
          </li>
          {
            items.map(item => (
              <li className="paginator--item" key={item} type="none">
                <button className="paginator--button" type="button" onClick={() => onChangePage(item)}>
                  {currentPage === item ? `${item} из ${pageCount}` : item}
                </button>
              </li>
            ))
          }
          <li className="paginator--item" type="none">
            <button className="paginator--button" type="button" onClick={() => onChangePage(pageCount)}>Последняя</button>
          </li>
        </ul>
      )
      : null
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
