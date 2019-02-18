import React from 'react';
import propTypes from 'prop-types';

const TodoInput = ({ value, onAppend, onChange }) => (
  <div className="container">
    <div className="row justify-content-center align-items-center m-3 text-left">
      <div className="col-auto">
        <div className="input-group input-group-sm">
          <input type="text" className="form-control" value={value} onChange={onChange} placeholder="Write your todo here" />
          <div className="input-group-append">
            <button type="button" className="btn btn-primary btn-sm" onClick={onAppend}>
              Append
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TodoInput;

TodoInput.propTypes = {
  value: propTypes.string.isRequired,
  onAppend: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
};
