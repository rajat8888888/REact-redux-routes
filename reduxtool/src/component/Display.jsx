import React from 'react'
import { useSelector } from "react-redux";
export const Display = () => {
    const {counterVal}=useSelector((store)=>store.counter)
  return (
    <div  className='display'>{counterVal}</div>
   
  )
}
