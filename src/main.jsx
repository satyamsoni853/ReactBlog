import React from 'react' 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BlogProvider } from './context/BlogContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <App />
      </BlogProvider>
    </BrowserRouter>
  </StrictMode>,
)
