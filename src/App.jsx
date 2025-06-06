
import './App.css'
import Login from './Redux/Com/Login'
import Home from './Redux/Com/Home';
import AddToCard from './Redux/Com/AddToCard';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const router =createBrowserRouter([
  {path:'/',
  element:<Login></Login>},
  {
    path:'/home',
    element:<Home></Home>
  },
  {
    path:'/card',
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
