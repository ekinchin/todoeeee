import React from 'react';
import './style.css';

const TodoItem = ({todo, onDone, onRemove}) => {
  return (
      <div className="row justify-content-md-center align-items-center m-3"> 
        <div className={todo.isDone?"card col bg-light":"card col bg-light"}>    
          <div className={todo.isDone?"card-body font-weight-light bg-light h5 text-muted":"card-body font-weight-normal bg-light h5 text-body"}>{todo.text}</div>
        </div>
        <div className="col">
          <div className="btn-group">
            <button type="button" className={todo.isDone?"btn btn-secondary":"btn btn-success"} onClick={onDone(todo.id)}>{todo.isDone?"Undo":"Done"}</button>
            <button type="button" className="btn btn-warning" onClick={onRemove(todo.id)}>Del</button>
          </div>
        </div>
      </div>
  )
}

export default TodoItem;