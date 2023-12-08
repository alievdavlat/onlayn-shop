import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import {Home, Product, Products} from './pages'
import {Footer, Navbar} from './components'


const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/products/:id',
        element:<Products/>
      },
      {
        path:'/product/:id',
        element:<Product/>
      },
    ]
  },
  
  
])



const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App