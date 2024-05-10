import React from 'react'
import { useMemo } from 'react';
import { memo } from 'react';

 const Marks = ({marks,subject}) => {
  
  console.log("marks component render");

  const percentagehandle=useMemo(()=>{
    console.log("memo function call");
     return ( marks*100)/100
  },[marks])
  return (
    <div>Marks:{marks}
    
       <h1>percentage:{percentagehandle}</h1> 
       subject:{subject}</div>
  )
}

export default memo(Marks)

