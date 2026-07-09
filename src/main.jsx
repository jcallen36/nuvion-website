import { StrictMode, useEffect, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import NuvionWebsite from './NuvionWebsite.jsx'

// Route-level code splitting: the home page loads eagerly; everything else
// (notably Audit with its ~100KB niche dataset) loads on navigation.
const AIAutomation = lazy(() => import('./pages/AIAutomation.jsx'))
const AIReceptionist = lazy(() => import('./pages/AIReceptionist.jsx'))
const CustomIntegrations = lazy(() => import('./pages/CustomIntegrations.jsx'))
const LeadFollowup = lazy(() => import('./pages/LeadFollowup.jsx'))
const SocialMediaAI = lazy(() => import('./pages/SocialMediaAI.jsx'))
const Reminders = lazy(() => import('./pages/Reminders.jsx'))
const SeoAso = lazy(() => import('./pages/SeoAso.jsx'))
const WebDesign = lazy(() => import('./pages/WebDesign.jsx'))
const ReviewsAutomation = lazy(() => import('./pages/ReviewsAutomation.jsx'))
const DoneForYouBusiness = lazy(() => import('./pages/DoneForYouBusiness.jsx'))
const Book = lazy(() => import('./pages/Book.jsx'))
const Audit = lazy(() => import('./pages/Audit.jsx'))
const Agreement = lazy(() => import('./pages/Agreement.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const fallback = (
  <div style={{ minHeight: '100vh', background: '#F4F2EC' }} aria-busy="true" />
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={fallback}>
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
      </Suspense>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
