import React from 'react'
import { useDispatch } from 'react-redux'

export const Add = ({inpRef}) => {
    const dispatch=useDispatch()
    const handleAdd=()=>{
        dispatch({
            type:"ADD",
            payload:{
                num:inpRef.current.value,
            }
        })
    }
  return (
    <div> <button type="button"  onClick={handleAdd} className="btn btn-outline-info btn-lg px-4 me-sm-4 fw-bold btn"><h2>ADD</h2></button></div>
  )
}
