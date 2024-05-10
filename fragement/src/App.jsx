import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Fruit } from './Fruit';
import { Input } from './Input';
const App = () => {

  
  let fruits= ["Apple", "Banana", "Orange",'graps','mango','pinapple'];
  const [inp,setInp]=useState(fruits)
  const handleKeyDown=(e)=>{
      if(e.key==="Enter"){
         
        let newItem=e.target.value;
        e.target.value=''
        let totalItem=[...inp,newItem];
        setInp(totalItem)
      }
   
    
  }
  return (
    <React.Fragment>
    <Input handleKeyDown={handleKeyDown}  />
      <ul className="list-group">
  <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
  {fruits.length==0 ?<h2>No Fruits </h2> : null}
    <Fruit fruits={inp}  />
</ul>
    </React.Fragment>
  )
}



export default App
