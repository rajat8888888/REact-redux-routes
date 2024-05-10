
import { Post } from './Post'

import { Welcome } from './Welcome';
import {useLoaderData} from 'react-router-dom'

export const PostList = () => {
  const postList=useLoaderData();


  return (
    <div>

    { postList.length==0 &&<Welcome  />}
    {   postList.map((postData)=>{
      
        return <Post key={postData.id} postData={postData}/>
    })}
    </div>
  )
}

export const loaderData=()=>{
 return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) =>{
      return data.posts;
    });
}
