import React, { useRef } from 'react'
import { counterAction, privaceyAction } from './store/Store'
import { useDispatch } from 'react-redux'
export const Controls = () => {
  const inpRef=useRef()
  const dispatch=useDispatch();
    const handleIncrement=()=>{
       dispatch(counterAction.increment())
    }
    const handleDecrement=()=>{
       dispatch(counterAction.decrement())
    }
     
    const handleAdd=()=>{
        dispatch(counterAction.add({
          num:inpRef.current.value
        }))
        inpRef.current.value=''
    }
    
    const handleToggle=()=>{
      dispatch(privaceyAction.toggle())
    }
   


  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button type="button"  onClick={handleIncrement} className="btn btn-outline-light btn-lg px-4 btn"><h2>+1</h2></button>
    <button type="button" onClick={handleDecrement} className="btn btn-outline-light btn-lg px-4 btn"><h2>-1</h2></button>
    <input type='number' ref={inpRef} />
    <button type="button" onClick={handleAdd} className="btn btn-outline-light btn-lg px-4 btn"><h2>Add</h2></button>
    <button type="button" onClick={handleToggle} className="btn btn-outline-light btn-lg px-4 btn"><h2>Add</h2></button>
  </div>
  )
}
