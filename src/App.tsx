import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { PageTransition } from './components/PageTransition';
import { SmoothScroll } from './components/SmoothScroll';
import { CookieBanner } from './components/CookieBanner';
import { InteractivePageBackground } from './components/InteractivePageBackground';
import { Preloader } from './components/Preloader';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Community } from './pages/Community';
import { Partner } from './pages/Partner';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';
import { ApplicationSuccess } from './pages/ApplicationSuccess';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const is404 = location.pathname !== '/' &&
    !['/about', '/community', '/partner', '/contact', '/privacy', '/terms', '/application-success'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-[#010e52] text-white">
      {!is404 && <Navbar />}
      <InteractivePageBackground />
      <main className="flex-1 relative z-10">
        <PageTransition>{children}</PageTransition>
      </main>
      {!is404 && <Footer />}
      <CookieBanner />
    </div>
  );
};

export default function App() {
  // Rendering is paused until the preloader finishes counting 1-100 and splits open.
  const [ready, setReady] = useState(false);

  if (!ready) {
    return <Preloader onReady={() => setReady(true)} />;
  }

  return (
    <BrowserRouter>
      <SmoothScroll>
        <CustomCursor />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/application-success" element={<ApplicationSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </SmoothScroll>
    </BrowserRouter>
  );
}
