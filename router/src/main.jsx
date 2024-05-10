import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Student } from "./Component/Student.jsx";
import { Home } from "./Component/Home.jsx";
import { ErrorPage } from "./Component/ErrorPage.jsx";
import { About } from "./Component/About.jsx";
import { Profile } from "./Component/Profile.jsx";
import { Privace } from "./Component/Privace.jsx";



const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
   children:[
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:'/student',
      element:<Student/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/profile',
      element:<Profile/>,
      Children:[
        {
          path:'/profile/setting',
          element:<h1>Setting</h1>
        },
        {
          path:'/profile/privace',
          elementL:<Privace/>
        }
      ]
    }
   ]
  },

 
])
   

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
