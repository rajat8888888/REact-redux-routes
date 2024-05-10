import { useState } from "react";
import { AppName } from "./component/AppName";
import { Input } from "./component/Input";
import { TodoItems } from "./component/TodoItems";
import './style/App.css'
function App() {

  
  const [addTodo,setAddTodo]=useState([]);

  const handlTodo=(todoName,todoDate)=>{
    console.log(todoName,todoDate);
    console.log(todoName,todoDate);
   let  newTodo=[
    ...addTodo,{name:todoName,date:todoDate},
  ];
  setAddTodo(newTodo);
   }

   const removeTodo=(name)=>{
     
   let newTodo=  addTodo.filter((item)=> item.name!=name
    )
      setAddTodo(newTodo)
   }
  
  return (
    <center className="todo-container">
      <AppName/>
      <div className="container text-center">
       <Input handlTodo={handlTodo} />
       <TodoItems todo={addTodo} removeTodo={removeTodo} />
       

      
       
      </div>
    </center>
  );
}

export default App;
