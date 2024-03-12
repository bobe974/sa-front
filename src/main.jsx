import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layout/App.jsx'
import Avis from './pages/Avis.jsx'
import AvisUser from './pages/AvisUser.jsx'

import Accueil from './pages/Accueil.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from  'react-router-dom'


const routes = createBrowserRouter([
  {path: '/',
  element: <App></App>,
  children: [{
    path: '',
    element: <Accueil/>
     },
    {
      path: 'donner-un-avis',
      element:  <AvisUser/>
    },
    {
      path: 'avis',
      element: <Avis/>
    }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
