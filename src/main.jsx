import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Avis from './Avis.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from  'react-router-dom'

const routes = createBrowserRouter([
  {path: '/',
  element: <App></App>
  },
  {
    path: 'avis',
    element: <Avis></Avis>   
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
