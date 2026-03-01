import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NuvionWebsite from './NuvionWebsite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NuvionWebsite />
  </StrictMode>,
)
