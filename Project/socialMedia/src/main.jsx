import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { CreatePost,actionData } from './component/CreatePost.jsx';
import { loaderData, PostList } from './component/PostList.jsx';

const router= createBrowserRouter([
  {path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<PostList/>,
        loader:loaderData
      },
      {
      path:"/create-post",
      element:<CreatePost/>,
      action:actionData
      }
    ]

  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
