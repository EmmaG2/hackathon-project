import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {AppRoutes} from './app/routes'
import {GlobalRoutes} from './GlobalRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalRoutes />
    </BrowserRouter>
  </React.StrictMode>
)
