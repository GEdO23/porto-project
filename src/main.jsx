import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'

import './index.css'
import Error from './routers/Error/index.jsx'
import Home from './routers/Home/index.jsx'


const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <Error />, 
  children: ([
    { path: '/', element: <Home /> },
  
  ])}
])



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
