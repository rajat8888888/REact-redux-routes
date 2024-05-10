import React,{useState} from 'react'
import styles from './Input.module.css'
export const Input = ({handlTodo}) => {
 
  const[todoName,setTodoName]=useState('');
  const[todoDate,setTodoDate]=useState('');

  const handleAddButton=()=>{
    handlTodo(todoName,todoDate);
    setTodoName('');
    setTodoDate('');
  }
  return (
    <div class="row kg-row">
          <div class="col-sm-6">
           <input className={styles.addTodo} type="text" value={todoName} placeholder="add Todo" onChange={(e)=>setTodoName(e.target.value)} />  
          </div>
          <div class="col-sm-4">
           <input className={styles.addTodo} type="date" value={todoDate} onChange={(e)=>setTodoDate(e.target.value)}/> 
          </div>
          <div class="col-sm-2">
          <button type="button" class="btn btn-success" onClick={handleAddButton}>Add Todo</button> 
          </div>
        </div>
  )
}
