import React from 'react';
import './style.css';

const TodoInput = ({value, onAppend, onChange}) => {
  return(
  	<div className="create">
  	  <div className="input">
  	    <input type="text" value = {value} onChange={onChange}/>
  	  </div>
  	  <div className="erase" >
  	    <button onClick={onAppend}>Append</button>
  	  </div>
  	</div>
  )
};

export default TodoInput;