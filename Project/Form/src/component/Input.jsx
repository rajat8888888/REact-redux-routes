import React,{useContext, useRef, } from 'react'
import styles from './Input.module.css'
import { IoAddCircleSharp } from "react-icons/io5";
import { TodoContext } from '../store/CreateStore';

export const Input = ({handlTodo}) => {
 const {addNewTodo}=useContext(TodoContext)
let RefName=useRef();
let RefDate=useRef()

  const handleAddButton=(event)=>{
    let todoName=RefName.current.value
   let todoDate=RefDate.current.value
    event.preventDefault();
    addNewTodo(todoName,todoDate);
    RefName.current.value=""
    RefDate.current.value=""
  }
  return (
    <form action='' onSubmit={handleAddButton}>  
    <div className="row kg-row">
    
          <div className="col-sm-6">
           <input className={styles.addTodo} type="text" placeholder="add Todo" ref={RefName} />  
          </div>
          <div className="col-sm-4">
           <input className={styles.addTodo} type="date"  ref={RefDate}/> 
          </div>
          <div className="col-sm-2">
          <button type='submit' className="btn btn-success" ><IoAddCircleSharp /></button> 
          </div>
        
        </div>
        </form>
  )
}
