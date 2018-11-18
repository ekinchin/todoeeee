import React from 'react';
import './Input.css';

const Input = ({value, onAppend, onChange}) => {
  return(
  	<div className="create">
  	  <div className="input">
  	    <input type="text" value = {value} onChange={onChange}/>
  	  </div>
  	  <div className="erase" >
  	    <button onClick={onAppend}><i className="far fa-plus-square fa-2x"></i></button>
  	  </div>
  	</div>
  )
};

export default Input;