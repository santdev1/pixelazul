import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { GamesProvider } from './context/GamesContext'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GamesProvider>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </GamesProvider>
  </StrictMode>,
)
