import React from 'react'
import styles from './TodoItem.module.css'
export const TodoItem = ({name,date,removeTodo}) => {

  return (
    <div>
        <div class="row kg-row" style={{margin:"10px"}}>
          <div class="col-sm-6">
            {name}
          </div>
          <div class="col-sm-4">
              {date}
          </div>
          <div class="col-sm-2">
          <button type="button" class="btn btn-danger" onClick={()=>removeTodo(name)} >Remove</button> 
          </div>
        </div>
  
    </div>
  )
}
