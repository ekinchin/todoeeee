import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const SelectButton = ({ pairs, onSelect }) => (
  <select className="selectButton" onChange={e => onSelect(e.target.value)}>
    {pairs.map(pair => <option className="selectButton--option" key={pair.label} value={pair.value}>{pair.label}</option>)}
  </select>
);

export default SelectButton;

SelectButton.defaultProps = {
  pairs: [{ label: 1, value: 11 }, { label: 2, value: 12 }, { label: 3, value: 13 }],
  onSelect: (value) => { console.log(value); },
};

SelectButton.propTypes = {
  pairs: propTypes.arrayOf(propTypes.object),
  onSelect: propTypes.func,
};