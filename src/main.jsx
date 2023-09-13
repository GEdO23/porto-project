import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Error from './routers/Error/Error'
import Home from './routers/Home/Home'
import AreaDoCliente from './routers/AreaDoCliente/AreaDoCliente'
import ContratarSeguro from './routers/ContratarSeguro/ContratarSeguro'
import Equipe from './routers/Equipe/Equipe'

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <Error />, 
  children: ([
    { path: '/', element: <Home /> },
    { path: '/areaDoCliente', element: <AreaDoCliente />},
    { path: '/contratarseguro', element: <ContratarSeguro />},
    { path: '/equipe', element: <Equipe />},
  ])}
])



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
