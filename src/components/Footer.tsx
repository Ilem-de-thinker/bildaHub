import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Send, Check } from 'lucide-react';
import { Logo } from './Logo';
import { api } from '../lib/api';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [outlineFilled, setOutlineFilled] = useState(false);
  const wordmarkRef = useRef<HTMLDivElement | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    try {
      await api.subscribeNewsletter(email);
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('idle');
    }
  };

  useEffect(() => {
    const el = wordmarkRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOutlineFilled(true);
        } else {
          setOutlineFilled(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-[#010e52] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#0025ff]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand + Vision + Newsletter */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Logo size="lg" showTagline />

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              To build a generation of innovative Africans who can create technology-driven solutions to real-world problems and shape a better future for Nigeria and beyond.
            </p>

            {/* Newsletter input */}
            <form onSubmit={handleSubscribe} className="mt-2 max-w-sm">
              <label htmlFor="footer-newsletter" className="block text-xs font-semibold text-[#ffcc00] uppercase tracking-wider mb-2">
                Join our Weekly Build Log
              </label>
              <div className="relative flex items-center">
                <input
                  id="footer-newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-[#04146a] text-white text-sm rounded-lg px-4 py-3 pr-12 border border-white/20 focus:border-[#ffcc00] focus:ring-1 focus:ring-[#ffcc00] focus:outline-none placeholder-slate-400"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="absolute right-1.5 p-2 bg-[#ffcc00] text-[#010e52] rounded-md hover:bg-[#e6b800] transition-colors disabled:opacity-50"
                  aria-label="Subscribe to newsletter"
                >
                  {status === 'loading' ? (
                    <div className="w-4 h-4 border-2 border-[#010e52] border-t-transparent rounded-full animate-spin" />
                  ) : status === 'success' ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-xs text-[#ffcc00] mt-1.5">Thanks for subscribing! Check your inbox soon.</p>
              )}
            </form>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-[#ffcc00] font-bold mb-1">
              Quick Links
            </h4>
            <Link to="/" className="text-sm text-slate-300 hover:text-[#ffcc00] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm text-slate-300 hover:text-[#ffcc00] transition-colors">
              About BILDAHUB
            </Link>
            <Link to="/community" className="text-sm text-slate-300 hover:text-[#ffcc00] transition-colors">
              Community Hub
            </Link>
            <Link to="/about" className="text-sm text-slate-300 hover:text-[#ffcc00] transition-colors">
              Our Story
            </Link>
            <Link to="/partner" className="text-sm text-slate-300 hover:text-[#ffcc00] transition-colors">
              Partner With Us
            </Link>
            <Link to="/contact" className="text-sm text-slate-300 hover:text-[#ffcc00] transition-colors">
              Contact Support
            </Link>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-[#ffcc00] font-bold mb-1">
              Connect & Visit
            </h4>
            <div className="text-xs text-slate-300 space-y-1">
              <p className="font-semibold text-white">Lagos Headquarters</p>
              <p>24 Commercial Avenue, Sabo, Yaba, Lagos, Nigeria</p>
              <p className="text-[#8ea4ff] pt-1">hello@bildahub.africa</p>
              <p className="text-[#8ea4ff]">+234 (0) 802 000 2453</p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://x.com/bildahub"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded hover:border-[#ffcc00] hover:text-[#ffcc00] transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href="https://www.instagram.com/bildahub"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded hover:border-[#ffcc00] hover:text-[#ffcc00] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1C9XpbCSKa/"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded hover:border-[#ffcc00] hover:text-[#ffcc00] transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://chat.whatsapp.com/bildahub"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 text-xs font-semibold bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] rounded hover:bg-[#25D366]/30 transition-colors"
              >
                WhatsApp Hub
              </a>
            </div>
          </div>
        </div>

        {/* Giant Outlined Wordmark across bottom that fills with yellow on scroll */}
        <div
          ref={wordmarkRef}
          className="pt-12 pb-6 text-center select-none overflow-hidden"
        >
          <span
            className={`font-display text-[15vw] font-black tracking-tighter leading-none block outline-text transition-all duration-700 ${
              outlineFilled ? 'filled scale-100' : 'scale-95'
            }`}
          >
            BILDAHUB
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 BILDAHUB. Built in Africa, for the world.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
