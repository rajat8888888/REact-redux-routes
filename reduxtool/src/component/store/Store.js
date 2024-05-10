import {combineReducers, configureStore,createSlice}  from '@reduxjs/toolkit'




const counterSlice=createSlice({
    name:'counter',
    initialState:{counterVal:0},
    reducers:{
       increment:(state)=>{
       state.counterVal++
       },
       decrement:(state)=>{
         state.counterVal--
       },
       add:(state,action)=>{
        
        state.counterVal+=Number(action.payload.num)
       }

    }
})

const privaceySlice=createSlice({
   name:"privacey",
   initialState:false,
   reducers:{
     toggle:(state)=>{
      return   state=!state
      }
   }
})



const counterStore=configureStore({reducer:{
   counter:counterSlice.reducer,
   privacey:privaceySlice.reducer
}
   

})

export const counterAction=counterSlice.actions
export const privaceyAction=privaceySlice.actions

export default counterStore;