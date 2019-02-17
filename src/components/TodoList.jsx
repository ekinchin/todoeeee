import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, onDone, onRemove}) => {
  return (
    <div className="container"> 
      {
        todos.map(
          (todo)=>(
            <TodoItem todo={todo} onDone={onDone} onRemove={onRemove} key={todo.id} />
          )
        )
      }
    </div>
  )
}

export default TodoList;