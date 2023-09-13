import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Error from './routers/Error/Error.jsx'
import Home from './routers/Home/Home.jsx'
import Gamificacao from './routers/Gamificacao/Gamificacao'
import ContratarSeguro from './routers/ContratarSeguro/ContratarSeguro'
import Equipe from './routers/Equipe/Equipe'


const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <Error />, 
  children: ([
    { path: '/', element: <Home /> },
    { path: '/gamificacao', element: <Gamificacao />},
    { path: '/contratarseguro', element: <ContratarSeguro />},
    { path: '/equipe', element: <Equipe />},
  ])}
])



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
