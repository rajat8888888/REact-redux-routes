
import { useState } from 'react';
import './App.css'
import { Name } from './component/Memo/Name';
import  Marks  from './component/Memo/Marks';
import  Button  from './component/callBack/Button';
import { useCallback } from 'react';
import { useEffect } from 'react';



function App() {
const [count,setCount]=useState(80);

 const handleIncrement=useCallback(()=>{
  console.log("handlle Increment log");
  // setCount((prev)=>prev+1)
 },[])
  useEffect(()=>{
    console.log("useEffect log");
  },[handleIncrement])

  return(
<>

{/* <Name name="Amit" />
<Marks marks={10} subject="math"/>*/
<button onClick={()=>setCount((prev)=>prev+1)}>{count}</button> }
    
    {count}
     <Button handleIncrement={handleIncrement}/>
    </>
  )
}

export default App
