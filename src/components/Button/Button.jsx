/* eslint-disable react/jsx-no-bind */
import React from 'react';
import propTypes from 'prop-types';

import './style.css';

const Button = ({ onClick, label = '' }) => (
  <button className="button" type="button" onClick={() => onClick()}>{label}</button>
);

export default Button;

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  label: propTypes.isRequired,
};
