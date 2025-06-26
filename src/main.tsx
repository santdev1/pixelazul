import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter} from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { GamesProvider } from './context/GamesContext'
import { Analytics } from "@vercel/analytics/react"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GamesProvider>
     <HashRouter>
       <AppRoutes/>
       <Analytics/>
     </HashRouter>
    </GamesProvider>
  </StrictMode>,
)
