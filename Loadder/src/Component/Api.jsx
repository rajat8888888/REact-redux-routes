import React from 'react'
import {useLoaderData} from 'react-router-dom'
 const Api = () => {
   const data= useLoaderData();
   console.log(data);
  return (
    <div>
        <h1>Api Call</h1>
        <ul>
        {data.map((item)=>{
            return (<li>{item.name}</li>)
        })}
        </ul>
    </div>
  )
}
export default Api;

export const loaderApi=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  const data=await res.json();
  console.log(data);
  return data
    
}
