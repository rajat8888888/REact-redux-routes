import React from 'react'
import {useLoaderData} from 'react-router-dom'
 const Param = () => {
  const data= useLoaderData();

  return (
    <>
    <div>params</div>
     <h2>{data.name}</h2>
    </>
  )
}

export default Param;

export const loaderParam=async({params})=>{
    let res=await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    let data=await res.json();
    console.log(data);
    return data;
}
