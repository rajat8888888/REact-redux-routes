import React from 'react'
import { useSelector } from 'react-redux'

export const Display = () => {
     const count=useSelector((store)=> {return (store.count)})
     console.log(count);
    
  return (
    <div><h1>Count:{count}</h1></div>
  )
}
