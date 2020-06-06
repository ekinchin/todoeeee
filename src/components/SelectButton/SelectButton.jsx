import React from 'react';
import propTypes from 'prop-types';

const SelectButton = ({ pairs }) => (
  <ol className="selectButton">
    {pairs.map(pair => <li key={pair}>{pair.label}</li>)}
  </ol>
);

export default SelectButton;

SelectButton.defaultProps = {
  pairs: [{ 1: '1' }, { 2: '2' }, { 3: '3' }],
};

SelectButton.propTypes = {
  pairs: propTypes.arrayOf(propTypes.object),
};
