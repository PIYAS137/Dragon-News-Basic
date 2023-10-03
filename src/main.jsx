import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import Root from './pages/Root/Root'
import ViewDetails from './pages/ViewDetails/ViewDetails'
import Login from './pages/LoginPage/Login'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },{
        path:'/news/:sid',
        element:<ViewDetails/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>,
)
