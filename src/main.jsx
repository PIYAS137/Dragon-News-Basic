import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import Root from './pages/Root/Root'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>,
)
