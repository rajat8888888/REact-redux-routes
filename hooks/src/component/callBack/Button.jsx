import React from 'react'
import { memo } from 'react';

 const Button = ({ handleIncrement}) => {
    console.log('btn is rendering');
    
  return (
    <div>
        <button onClick={handleIncrement}>Btn</button>
    </div>
  )
}
export default memo(Button)