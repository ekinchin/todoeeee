import React from 'react';
import TodoItem from './TodoItem'
import './style.css';

const TodoList = ({todos, onDone, onRemove}) => {
  return (
    <div className="tasks">
      {
        todos.map(
          (todo)=>(
            <TodoItem todo={todo} onDone={onDone} onRemove={onRemove} />
          )
        )
      }
    </div>
  )
}

export default TodoList;