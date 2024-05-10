import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Display } from './component/Display'
import styles from './component/Calculator.module.css'
import { Button } from './component/Button'

 const App = () => {
 const[calVal,setCalVal]=useState('')
 const handleInp=(item)=>{
   if(item==="="){
    let result=eval(calVal);
    setCalVal(result)
   }

   else if(item==="c"){
      setCalVal('')
   }
   else{
  
      let newItem=calVal+item
      setCalVal(newItem)
   }
 }
  return (
  <>
    <div className={styles.calculator}>
      <Display displayVal={calVal}/>
     <Button handleInp={handleInp}/>

    </div>

  </>
  )
}

export default App