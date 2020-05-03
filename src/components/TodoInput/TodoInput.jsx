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
          +
      </button>
    </form>
  );
};

export default TodoInput;

TodoInput.propTypes = {
  onAppend: propTypes.func.isRequired,
};
