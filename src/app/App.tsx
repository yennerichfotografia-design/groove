import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LanguageProvider } from './contexts/LanguageContext';
import { ScrollToTop } from './components/ScrollToTop';

// Eager loading for critical components
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

// Lazy loading for pages - improves initial load performance
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutExtended = lazy(() => import('./pages/AboutExtended').then(m => ({ default: m.AboutExtended })));
const MethodPage = lazy(() => import('./pages/MethodPage').then(m => ({ default: m.MethodPage })));
const BrandingFormPage = lazy(() => import('./pages/BrandingFormPage').then(m => ({ default: m.BrandingFormPage })));
const WebFormPage = lazy(() => import('./pages/WebFormPage').then(m => ({ default: m.WebFormPage })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then(m => ({ default: m.ProjectDetail })));
const FAQPage = lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const AIPhotographyPage = lazy(() => import('./pages/AIPhotographyPage').then(m => ({ default: m.AIPhotographyPage })));
const AIPhotographyFormPage = lazy(() => import('./pages/AIPhotographyFormPage').then(m => ({ default: m.AIPhotographyFormPage })));
const BlogListPage = lazy(() => import('./pages/BlogListPage').then(m => ({ default: m.BlogListPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then(m => ({ default: m.BlogDetailPage })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
        <p className="mt-4 text-muted-foreground">Cargando...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="w-full">
            <WhatsAppButton />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={
                  <>
                    <Header />
                    <HeroSection />
                    <HomePage />
                    <Footer />
                  </>
                } />
                <Route path="/sobre-mi" element={
                  <>
                    <Header />
                    <AboutExtended />
                    <Footer />
                  </>
                } />
                <Route path="/metodo" element={
                  <>
                    <Header />
                    <MethodPage />
                    <Footer />
                  </>
                } />
                <Route path="/preguntas-frecuentes" element={
                  <>
                    <Header />
                    <FAQPage />
                    <Footer />
                  </>
                } />
                <Route path="/formulario-branding" element={<BrandingFormPage />} />
                <Route path="/formulario-web" element={<WebFormPage />} />
                <Route path="/proyecto/:slug" element={<ProjectDetail />} />
                <Route path="/fotografia-ia" element={<AIPhotographyPage />} />
                <Route path="/formulario-fotografia-ia" element={<AIPhotographyFormPage />} />
                {/* Blog Routes */}
                <Route path="/blog" element={
                  <>
                    <Header />
                    <BlogListPage />
                    <Footer />
                  </>
                } />
                <Route path="/blog/:slug" element={
                  <>
                    <Header />
                    <BlogDetailPage />
                    <Footer />
                  </>
                } />
                {/* 404 Route - must be last */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ErrorBoundary>
  );
}