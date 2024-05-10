import React, { useContext } from 'react'
import styles from './TodoItem.module.css'
import { CiCircleRemove } from "react-icons/ci";
import { TodoContext } from '../store/CreateStore';
export const TodoItem = ({name,date}) => {
const {removeExistTodo}=useContext(TodoContext)

  return (
    <div>
        <div className="row kg-row" style={{margin:"10px"}}>
          <div className="col-sm-6">
            {name}
          </div>
          <div className="col-sm-4">
              {date}
          </div>
          <div className="col-sm-2">
          <button type="button" class={`btn btn-danger ${styles.btt}`} onClick={()=>removeExistTodo(name)} ><CiCircleRemove /></button> 
          </div>
        </div>
  
    </div>
  )
}
