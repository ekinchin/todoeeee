import React from 'react';
import './Todo.css';

const Todo = ({todo, onDone, onRemove}) => {
  return (
    <div className={todo.isDone?"task isDone":"task"}>          
      <div className="message">
        <div className="text">{todo.text}</div>
      </div>
      <div className="check">
        <button onClick={onDone(todo.id)}>{todo.isDone?<i className="far fa-check-square  fa-2x"></i>:<i className="far fa-square fa-2x"></i>}</button>
      </div>    
      <div className="remove">
        <button onClick={onRemove(todo.id)}><i className="far fa-window-close  fa-2x"></i></button>
      </div>
    </div>
  )
}

export default Todo;