import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Error from './routers/Error/index.jsx'
import Home from './routers/Home/index.jsx'
import Cadastro from './routers/Cadastro/index.jsx'



const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <Error />, 
  children: ([
    { path: '/', element: <Home /> },
    { path: '/cadastro', element: <Cadastro />},
  ])}
])



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
