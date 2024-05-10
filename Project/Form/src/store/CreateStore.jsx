import React, { createContext,useReducer} from 'react'

export const TodoContext=createContext()

function reducerTodo(cureentTodo, action) {
    let newTodo = cureentTodo;
    switch (action.type) {
      case "ADD_TODO": {
        return (newTodo = [
          ...cureentTodo,
          { name: action.payload.todoName, date: action.payload.todoDate },
        ]);
      }
      case "DELETE_TODO": {
        return (newTodo = cureentTodo.filter(
          (item) => item.name != action.payload.name
        ));
      }
    }
    return newTodo;
  }

const TodoItemContextProvider=({children})=>{

    const [addTodo, dispatch] = useReducer(reducerTodo, []);


    const addNewTodo = (todoName, todoDate) => {
        const newItemAction = {
          type: "ADD_TODO",
          payload: {
            todoName,
            todoDate,
          },
        };
       return dispatch(newItemAction);
      };

      
     const removeExistTodo = (name) => {
        let deleteItemAction = {
          type: "DELETE_TODO",
          payload: {
            name,
          },
        };
      return dispatch(deleteItemAction);
      };

     
  return (
    <TodoContext.Provider
      value={{
        addTodo,
        addNewTodo,
        removeExistTodo,
      }}>
        {children}
      </TodoContext.Provider>
  )
}
export default TodoItemContextProvider;