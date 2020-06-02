/* eslint-disable react/jsx-no-bind */
import React from 'react';
import propTypes from 'prop-types';

import './style.css';

const Button = ({
  onClick, label, altLabel, state,
}) => (
  <button className="button" type="button" onClick={() => onClick()}>{state ? altLabel : label}</button>
);

export default Button;

Button.defaultProps = {
  label: '',
  altLabel: '',
  state: false,
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  label: propTypes.string,
  altLabel: propTypes.string,
  state: propTypes.bool,
};
