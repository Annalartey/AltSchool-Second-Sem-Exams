import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HelmetProvider } from 'react-helmet-async'
import UserAuthContext from './context/UserAuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <UserAuthContext>
        <App />
      </UserAuthContext>
    </HelmetProvider>
  </React.StrictMode>
)