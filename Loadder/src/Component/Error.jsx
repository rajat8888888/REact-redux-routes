import React from 'react'
import {useLoaderData} from 'react-router-dom'
const Error = () => {
   const data=   useLoaderData();
  return (
    <div><h1>Error Call</h1>
    {data.status &&
    <h5>{data.status}</h5>
 }

 {
    !data.isError && <ul>{data.map((item)=>{
        return <li>{item.name}</li>
    })}</ul>
 }
    </div>
  )
}
  export  default Error;

export const loaderError=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
       if(!res.ok){
           return{
            isError:true,
            status:res.status,
            statusText:res.statusText,
             data:{}
             }
       }
       let data=await res.json();
       return data;
     
    
}
  