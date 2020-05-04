/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const TodoInput = ({ onAppend }) => {
  const input = React.createRef();
  return (
    <form id="userinput" className="formInput">
      <input type="text" className="formInput--input" ref={input} placeholder="ТуДу ждет" autoFocus />
      <button type="submit" className="formInput--submit" form="userinput" onClick={(e) => { e.preventDefault(); onAppend(input); }}>
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M 16,5 V 26" stroke="black" strokeWidth="2" />
          <path d="M 5,16 H 26" stroke="black" strokeWidth="2" />
        </svg>
      </button>
    </form>
  );
};

export default TodoInput;

TodoInput.propTypes = {
  onAppend: propTypes.func.isRequired,
};
