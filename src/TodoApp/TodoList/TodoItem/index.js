import React from 'react';
import './style.css';

const TodoItem = ({todo, onDone, onRemove}) => {
  return (
      <div className="row justify-content-md-center align-items-center m-3 text-left"> 
        <div className={todo.isDone?"card col bg-light":"card col bg-light"}>    
          <div className={todo.isDone?"card-text font-weight-light bg-light text-muted":"card-text font-weight-normal bg-light text-body"}>{todo.text}</div>
        </div>
        <div className="col-1">
          <div className="btn-group">
            <button type="button" className={todo.isDone?"btn btn-sm btn-secondary":"btn btn-sm btn-success"} onClick={onDone(todo.id)}>{todo.isDone?"Undo":"Done"}</button>
            <button type="button" className="btn btn-sm btn-warning" onClick={onRemove(todo.id)}>Del</button>
          </div>
        </div>
      </div>
  )
}

export default TodoItem;