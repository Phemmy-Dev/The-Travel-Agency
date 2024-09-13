import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import App from './App.jsx'
import Home from './components/HomePage/Home.jsx'
import './index.css'
import About from './components/AboutPage/About.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
      errorElement: <h1>404 Page Not Found</h1>,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <h1>Services</h1>,
  },
  {
    path: '/contact',
    element: <h1>Contact</h1>,
  },
  {
    path: '/signup',
    element: <h1>Sign Up</h1>,
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
