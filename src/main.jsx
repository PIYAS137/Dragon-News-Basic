import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import Root from './pages/Root/Root'
import ViewDetails from './pages/ViewDetails/ViewDetails'
import Login from './pages/LoginPage/Login'
import Registration from './pages/RegistrationPage/Registration'
import AuthContextProvider from './export/Auth/AuthContextProvider'
import PrivateRoute from './pages/PrivateRoute/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }, {
        path: '/news/:sid',
        element: <PrivateRoute><ViewDetails /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      }, {
        path: '/registration',
        element: <Registration />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.Fragment>,
)
