import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import ProductDetail from './ProductDetail'

let router= createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }, 
  {
    path: '/cart',
    element: <Cart/>
  },
  {
    path: '/product-detail/:id',
    element: <ProductDetail/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '*',
    element: <h2>404 Page Not Found</h2>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
