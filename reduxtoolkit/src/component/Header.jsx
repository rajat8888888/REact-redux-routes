import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Add } from './Add'

export const Header = () => {
 const inpRef= useRef()
 const counter=useSelector((store)=>{
  
  return store.counter})
  // const counter=0
  return (
      <div className="modal-body p-4 text-center">
      <h6 className="display-6  text-white">Counter::{counter}</h6>
      <input type='number' ref={inpRef} style={{width:"120px"}}/>
      <Add inpRef={inpRef}/>
      </div>

  )
}
