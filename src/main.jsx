import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import './normalize.css'
import {GlobalRoutes} from './GlobalRoutes'
import {AppTheme} from './theme'
import store from './context/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <GlobalRoutes />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
