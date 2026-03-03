import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import NuvionWebsite from './NuvionWebsite.jsx'
import AIAutomation from './pages/AIAutomation.jsx'
import AIReceptionist from './pages/AIReceptionist.jsx'
import CustomIntegrations from './pages/CustomIntegrations.jsx'
import LeadFollowup from './pages/LeadFollowup.jsx'
import SocialMediaAI from './pages/SocialMediaAI.jsx'
import Reminders from './pages/Reminders.jsx'
import Book from './pages/Book.jsx'
import Audit from './pages/Audit.jsx'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<NuvionWebsite />} />
        <Route path="/services/ai-automation" element={<AIAutomation />} />
        <Route path="/services/ai-receptionist" element={<AIReceptionist />} />
        <Route path="/services/custom-integrations" element={<CustomIntegrations />} />
        <Route path="/services/lead-followup" element={<LeadFollowup />} />
        <Route path="/services/social-media-ai" element={<SocialMediaAI />} />
        <Route path="/services/reminders" element={<Reminders />} />
        <Route path="/book" element={<Book />} />
        <Route path="/audit" element={<Audit />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
