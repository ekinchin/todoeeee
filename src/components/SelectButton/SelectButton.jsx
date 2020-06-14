import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const SelectButton = ({ pairs, onSelect }) => {
  const activeValue = pairs.reduce((value, pair) => (pair.active ? value + pair.value : value), 0);
  return (
    <select
      className="selectButton"
      onChange={(e) => {
        onSelect(Number.parseInt(e.target.value, 10));
      }}
      value={activeValue}
    >
      {pairs.map(pair => <option className="selectButton--option" key={pair.label} value={pair.value}>{pair.label}</option>)}
    </select>
  );
};

export default SelectButton;

SelectButton.defaultProps = {
  pairs: [
    { label: 1, value: 11, active: true },
    { label: 2, value: 12, active: false },
    { label: 3, value: 13, active: false },
  ],
  onSelect: () => { },
};

SelectButton.propTypes = {
  pairs: propTypes.arrayOf(propTypes.object),
  onSelect: propTypes.func,
};
