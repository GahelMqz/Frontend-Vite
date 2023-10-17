import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from './dashboard/dashboard'
import Home from './paginas/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Dashboard",
      element: <Dashboard />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
