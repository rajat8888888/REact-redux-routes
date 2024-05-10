import React from 'react'
import {useLoaderData} from 'react-router-dom'

 const Home = () => {
          
 const data=   useLoaderData()

    console.log(data);
  return (
    <div>
        <h1>HOME PAGE</h1>
        <h4>{data.firstName}  {data.lastName}</h4>
    </div>
  )
}
export default Home;
export  const loader=()=>{
    console.log("loader function");
    return {
        firstName:"Atul",
        lastName:"Chauodhary"
    }
}