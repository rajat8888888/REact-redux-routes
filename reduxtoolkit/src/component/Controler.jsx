import React from 'react'
import { useDispatch } from 'react-redux'

export const Controler = () => {
  const dispatch=useDispatch();
 const INCREMENT="INCREMENT"
 const DECREMENT="DECREMENT"
  const handleIncrement=()=>{
    dispatch({
      type:INCREMENT,
    })
  }
  const handleDecrement=()=>{
    dispatch({
      type:DECREMENT,
    })
  }

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button type="button"  onClick={handleIncrement} className="btn btn-outline-light btn-lg px-4 btn"><h2>+1</h2></button>
    <button type="button" onClick={handleDecrement} className="btn btn-outline-light btn-lg px-4 btn"><h2>-1</h2></button>
  </div>
  )
}
