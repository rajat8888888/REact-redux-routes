import React from 'react'
import { TodoItem } from './TodoItem'
export const TodoItems = ({todo,removeTodo}) => {
  return (
    <div>
        {todo.map((item)=>{
            return <TodoItem key={item.name} name={item.name} date={item.date} removeTodo={removeTodo}/>
        })}
    </div>
  )
}
