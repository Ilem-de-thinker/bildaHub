import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('bildahub_cookie_consent');
    if (!stored) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bildahub_cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <aside
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-[#000830]/95 backdrop-blur-md border border-white/15 text-white p-4 rounded-xl shadow-2xl flex items-center justify-between gap-4 animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#ffcc00] shrink-0 mt-0.5" />
        <p className="text-xs text-slate-300 leading-relaxed">
          We use local cookies to remember your community preferences and application drafts. We never track your personal data.
        </p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleAccept}
          className="px-3 py-1.5 bg-[#ffcc00] text-[#010e52] text-xs font-bold rounded-lg hover:bg-[#e6b800] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcc00]"
        >
          Got it
        </button>
        <button
          onClick={handleAccept}
          className="p-1 text-slate-400 hover:text-white rounded"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
