import { StrictMode, useEffect, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LangProvider } from './site/i18n.jsx'
import { initAnalytics, trackPageview } from './analytics.js'
// Eager: the landing page + the service template (its configs load synchronously)
import NuvionWebsite from './NuvionWebsite.jsx'
import ServicePage, { WEB_DESIGN, SEO, MARKETING, INTEGRATIONS, CUSTOM_BUILDS } from './site/ServicePage.jsx'
// Lazy: every other page ships as its own chunk, off the initial load
const Agreement = lazy(() => import('./pages/Agreement.jsx'))
const WebsiteInfo = lazy(() => import('./pages/WebsiteInfo.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const WorkPage = lazy(() => import('./site/WorkPage.jsx'))
const AboutPage = lazy(() => import('./site/AboutPage.jsx'))
const CompanyAbout = lazy(() => import('./site/CompanyAbout.jsx'))
const BookPage = lazy(() => import('./site/BookPage.jsx'))
const JaedenPage = lazy(() => import('./site/JaedenPage.jsx'))
const LocalPage = lazy(() => import('./site/LocalPage.jsx'))
const IndustryPage = lazy(() => import('./site/IndustryPage.jsx'))
const PlanBuilder = lazy(() => import('./site/PlanBuilder.jsx'))
const BusinessPage = lazy(() => import('./site/BusinessPage.jsx'))
const TradesPage = lazy(() => import('./site/TradesPage.jsx'))
const BlogIndex = lazy(() => import('./site/Blog.jsx').then((m) => ({ default: m.BlogIndex })))
const BlogPost = lazy(() => import('./site/Blog.jsx').then((m) => ({ default: m.BlogPost })))
const NotFound = lazy(() => import('./site/NotFound.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); trackPageview(pathname); }, [pathname]);
  return null;
}

initAnalytics();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <LangProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<NuvionWebsite />} />
        <Route path="/services/integrations" element={<ServicePage cfg={INTEGRATIONS} />} />
        <Route path="/services/ai-automation" element={<ServicePage cfg={INTEGRATIONS} />} />
        <Route path="/services/custom-builds" element={<ServicePage cfg={CUSTOM_BUILDS} />} />
        <Route path="/services/social-media-ai" element={<ServicePage cfg={MARKETING} />} />
        <Route path="/services/seo-aso" element={<ServicePage cfg={SEO} />} />
        <Route path="/services/web-design" element={<ServicePage cfg={WEB_DESIGN} />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/websites" element={<WebsiteInfo />} />
        <Route path="/websites2" element={<WebsiteInfo price={{ once: '1,800', care: '29', monthly: '149' }} canonical="https://nuvion-solutions.com/websites2" />} />
        <Route path="/websiteinfo" element={<WebsiteInfo price={{ once: '600', care: '29', monthly: '49' }} canonical="https://nuvion-solutions.com/websiteinfo" />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<CompanyAbout />} />
        <Route path="/david" element={<AboutPage />} />
        <Route path="/david/:variant" element={<AboutPage />} />
        <Route path="/jaeden" element={<JaedenPage />} />
        <Route path="/web-design/:town" element={<LocalPage />} />
        <Route path="/web-design-for/:industry" element={<IndustryPage />} />
        <Route path="/plan" element={<PlanBuilder />} />
        <Route path="/for-business" element={<BusinessPage />} />
        <Route path="/trades" element={<TradesPage />} />
        <Route path="/guides" element={<BlogIndex />} />
        <Route path="/guides/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
    </LangProvider>
    </HelmetProvider>
  </StrictMode>,
)
