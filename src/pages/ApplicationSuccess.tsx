import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, ArrowRight, Home as HomeIcon } from 'lucide-react';
import { Button } from '../components/Button';

export const ApplicationSuccess: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#010e52] px-4 text-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_20%_25%,rgba(0,37,255,0.28)_0%,transparent_55%),radial-gradient(circle_at_80%_75%,rgba(0,37,255,0.16)_0%,transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-[#ffcc00] text-[#010e52] flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(255,204,0,0.5)]">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#ffcc00] mb-2">
          Application Received
        </span>

        <h1 className="text-3xl sm:text-4xl font-display font-black text-white leading-tight">
          Welcome to the Next Step.
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
          Your application for the BILDAHUB cohort has been successfully dispatched to our Admissions Board. You will receive an email confirmation and screening task invitation within 48 hours.
        </p>

        {/* Immediate Next Step */}
        <div className="mt-8 p-5 rounded-2xl bg-[#04146a] border border-white/10 w-full text-left space-y-2">
          <p className="text-xs font-bold text-[#ffcc00] uppercase">What happens next?</p>
          <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
            <li>Check your email inbox (and spam folder) for our confirmation.</li>
            <li>Complete the 20-minute computational logic assessment.</li>
            <li>Shortlisted applicants will be invited for a virtual 15-minute chat.</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center w-full">
          <Button
            href="https://chat.whatsapp.com/bildahub"
            variant="primary"
            size="md"
            icon={<MessageCircle className="w-4 h-4" />}
          >
            Join WhatsApp Explorer Hub
          </Button>

          <Button
            to="/"
            variant="secondary"
            size="md"
            icon={<HomeIcon className="w-4 h-4" />}
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};
