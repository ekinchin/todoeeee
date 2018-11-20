import React from 'react';
import './style.css';

const TodoItem = ({todo, onDone, onRemove}) => {
  return (
    <div className={todo.isDone?"task isDone":"task"}>          
      <div className="message">
        <div className="text">{todo.text}</div>
      </div>
      <div className="check">
        <button onClick={onDone(todo.id)}>{todo.isDone?"Undo":"Done"}</button>
      </div>    
      <div className="remove">
        <button onClick={onRemove(todo.id)}>Del</button>
      </div>
    </div>
  )
}

export default TodoItem;