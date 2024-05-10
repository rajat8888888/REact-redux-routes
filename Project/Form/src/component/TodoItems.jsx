import React, { useContext } from 'react'
import { TodoItem } from './TodoItem'
import { TodoContext } from '../store/CreateStore'

export const TodoItems = () => {
  const {addTodo}=useContext(TodoContext )
 
  return (
    <div>
        {addTodo.map((item)=>{
            return <TodoItem key={item.name} name={item.name} date={item.date} />
        })}
    </div>
  )
}
