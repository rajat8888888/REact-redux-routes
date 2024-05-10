  

  import React,{useState} from "react";
  import styles from './Fruit.module.css'


  export function Fruit({fruits}){
    const [active,setActive]=useState([]);
    const [bought,setBought]=useState(false)

     
    function handleBuy (item,event){
      let newItem=[...active,item];
      setActive(newItem);
      setBought(active.includes(item))
      
    }
  
    return(
        <React.Fragment>
       
             {fruits.map((item)=>{
              console.log(bought)
    return (<><li key={item} className={`${styles.kgItem}   kgItem ${bought && "list-group-item active" } `}>{item}
              <button className="btn btn-info" onClick={(event)=>handleBuy(item,event) }  style={{width:'50px', margin:"10px"}}>Buy</button> </li> </>)
    
    
            
  })}
  
        </React.Fragment>
    )
  }