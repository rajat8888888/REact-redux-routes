import React from 'react'
import Styles from './Button.module.css'
export const Button = ({handleInp}) => {
    const btn=["c",1,2,"+",3,4,"-",5,6,"*",7,8,'/',"=",9,0,"."]
  return (
    <div className={Styles.btnContainer}>
   {  btn.map((item)=>{
        return  <button className={Styles.btton} onClick={()=>handleInp(item)}>{item
        }</button>
     })}
  </div>
  )
}
