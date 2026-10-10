import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Community', path: '/community' },
    { name: 'Contact', path: '/contact' }
  ];

  // Handle scroll detection: transparent over top, navy on scroll, hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Blur/solid threshold
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide / reveal threshold
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current && !mobileMenuOpen) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#010e52]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Main Navigation" className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark */}
            <div className="shrink-0">
              <Logo size="md" variant="light" />
            </div>

            {/* Zone 2: Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2.5 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-colors rounded-md relative whitespace-nowrap ${
                      isActive
                        ? 'text-[#ffcc00] font-semibold'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#ffcc00] rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Zone 3: Actions & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <Button
                to="/community#join-form"
                variant="primary"
                size="sm"
                isMagnetic
                className="hidden sm:inline-flex"
              >
                Join BILDAHUB
              </Button>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#ffcc00] hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcc00]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay with Staggered Links */}
      <div
        className={`fixed inset-0 z-40 bg-[#010e52] transition-all duration-500 lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,#0025ff_0%,transparent_60%),radial-gradient(circle_at_bottom_left,#ffcc00_0%,transparent_70%)] opacity-20" />

        <div className="relative z-10 flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-[#ffcc00] font-bold mb-2">
            Navigation Menu
          </p>

          {navLinks.map((link, idx) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: `${idx * 40}ms` }}
              className={({ isActive }) =>
                `text-2xl font-display font-bold py-2 flex items-center justify-between border-b border-white/10 transition-all ${
                  isActive ? 'text-[#ffcc00] pl-2' : 'text-white hover:text-[#ffcc00] hover:pl-2'
                }`
              }
            >
              <span>{link.name}</span>
              <ArrowRight className="w-5 h-5 opacity-40" />
            </NavLink>
          ))}
        </div>

        <div className="relative z-10 pt-6 flex flex-col gap-3">
          <Button
            to="/community#join-form"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join BILDAHUB Community
          </Button>

          <p className="text-center text-xs text-slate-400 mt-2">
            Learn · Build · Innovate · Built in Africa, for the world
          </p>
        </div>
      </div>
    </>
  );
};
