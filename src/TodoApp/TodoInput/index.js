import React from 'react';
import './style.css';

const TodoInput = ({value, onAppend, onChange}) => {
  return(
    <div>
      <div className="row justify-content-md-center align-items-center m-3 text-left">
        <div className="col">
          <div className="input-group input-group-sm">
            <input type="text" class="form-control" value = {value} onChange={onChange} placeholder="Write your todo here" />
          	<div className="input-group-append">
    	       <button className="btn btn-primary btn-sm" onClick={onAppend}>Append</button>
         	  </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TodoInput;