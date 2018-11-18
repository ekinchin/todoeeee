import React from 'react';
import Todo from './Todo'
import './Todos.css';

const Todos = ({todos, onDone, onRemove}) => {
  return (
    <div className="tasks">
      {
        todos.map(
          (todo)=>(
            <Todo todo={todo} onDone={onDone} onRemove={onRemove} />
          )
        )
      }
    </div>
  )
}

export default Todos;