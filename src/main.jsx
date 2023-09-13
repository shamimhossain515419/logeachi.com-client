import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Rotues/Route.jsx'
import AuthProvider from './Rotues/Authprovider/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Route}>

      </RouterProvider>
    </AuthProvider>


  </React.StrictMode>,
)
