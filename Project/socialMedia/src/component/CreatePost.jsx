import React, { useContext, useRef } from 'react'
import { socialContext } from '../store/CreateStoreProvider'
import { useNavigate,Form,redirect} from 'react-router-dom'
export const CreatePost = () => {

  

     
  return (
    <>
        <Form className='createCard mypost' method="POST">
  <div className="mb-3">
    
  <div id="emailHelp" className="form-text text ">create a post to make smile in world.</div>
  <label  htmlFor="userId" className="form-label">Enter Your userId</label>
    <input type="number" name='userId' className="form-control" id="userId" min='1' max="100" aria-describedby="emailHelp" placeholder='type userId a integer' />
   

    <label  htmlFor="title" className="form-label">Create New Title</label>
    <input type="text" className="form-control" name='title' aria-describedby="emailHelp" placeholder='How are feel tody' id='title'  />
    
    </div>
  
    <label  htmlFor="body" className="form-label">Post Content</label>
      <textarea className="form-control" name='body' id="body" aria-describedby="emailHelp" placeholder='sare more about it'  />

    <label  htmlFor="reactions" className="form-label">Reaction</label>
 <input type="number" name='reactions' className="form-control" id="reactions" aria-describedby="emailHelp" placeholder='post reaction'   />

    <label  htmlFor="tags" className="form-label">enter your tags by space </label>
    <input type="text" name='tags' className="form-control" id="tags" aria-describedby="emailHelp" placeholder='ypour tags'  />

  <button type="submit" className="btn btn-primary">Post</button>
</Form>
    </>
  )
}

export const actionData=async(data)=>{
  const formData=await data.request.formData();
  const postData=Object.fromEntries(formData)

  postData.tags=postData.tags.split(" ");

  fetch('https://dummyjson.com/posts/add',{
    method:"POST",
    headers:{"Content-Type":'application/json'},
    body:JSON.stringify(postData)
  }).then((res)=>res.json())
 
  .then((posts)=>{
     console.log(posts);
   
  
  })
//  return null
 return redirect('/')
}

