import React,{useContext} from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { TodoContext } from '../store/CreateStore'
export const WElcome = () => {
    const {addTodo}=useContext(TodoContext )
  return (
 addTodo.length===0 &&    <h1> No TOdo Enjoy <BsEmojiSmile /> </h1>
  )
}
