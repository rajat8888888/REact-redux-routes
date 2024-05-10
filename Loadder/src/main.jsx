import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import  Home, { loader }  from './Component/Home.jsx'
import  Api ,{loaderApi} from './Component/Api.jsx'
import Param, { loaderParam } from './Component/Param.jsx'
import Error,{ loaderError } from './Component/Error.jsx'
const router=createBrowserRouter([
  {
    path:"/home",
    element:<Home/>,
    errorElement:<h1>Error Happen</h1>,
    loader:loader
  },
  {
    path:"/api",
    element:<Api/>,
    loader:loaderApi
  },
  {
    path:"/:id",
    element:<Param/>,
    loader:loaderParam
  },
  {
    path:"/error",
    element:<Error/>,
    errorElement:<Error/>,
    loader:loaderError,

  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
