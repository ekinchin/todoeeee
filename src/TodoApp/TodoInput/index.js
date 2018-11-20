import React from 'react';
import './style.css';

const TodoInput = ({value, onAppend, onChange}) => {
  return(
      <div className="row justify-content-center">
        <div className="col">
          <div className="input-group mb-3">
            <input  value = {value} onChange={onChange} placeholder="Write your todo here" />
          	<div className="input-group-append">
    	       <button className="btn btn-primary" onClick={onAppend}>Append</button>
         	  </div>
          </div>
        </div>
      </div>
  )
};

export default TodoInput;