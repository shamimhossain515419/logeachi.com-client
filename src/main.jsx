import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Rotues/Route.jsx'
import AuthProvider from './Rotues/Authprovider/Authprovider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider } from "@material-tailwind/react";

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={Route}>

          </RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>





  </React.StrictMode>,
)
