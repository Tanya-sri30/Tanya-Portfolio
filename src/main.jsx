import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll.jsx'
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SmoothScroll>
  </StrictMode>,
)
