import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Redux/Com/Login'
import Das from './Redux/Com/Das';
import AddToCard from './Redux/Com/AddToCard';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const router =createBrowserRouter([
  {path:'/',
  element:<Login></Login>},
  {
    path:'/Das',
    element:<Das></Das>
  },
  {
    path:'/AddToCard',
    element:<AddToCard></AddToCard>
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
