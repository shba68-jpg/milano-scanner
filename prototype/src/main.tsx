import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Vite injects import.meta.env.BASE_URL from vite.config's `base`.
// Strip trailing slash for React Router's basename.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
