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
import SeoAso from './pages/SeoAso.jsx'
import WebDesign from './pages/WebDesign.jsx'
import ReviewsAutomation from './pages/ReviewsAutomation.jsx'
import DoneForYouBusiness from './pages/DoneForYouBusiness.jsx'
import Book from './pages/Book.jsx'
import Audit from './pages/Audit.jsx'
import Agreement from './pages/Agreement.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'

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
        <Route path="/services/seo-aso" element={<SeoAso />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/reviews-automation" element={<ReviewsAutomation />} />
        <Route path="/services/done-for-you-business" element={<DoneForYouBusiness />} />
        <Route path="/book" element={<Book />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
