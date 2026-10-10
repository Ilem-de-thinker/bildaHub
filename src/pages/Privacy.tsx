import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="w-full bg-white text-[#010e52]">
      <section className="bg-[#010e52] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#ffcc00] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </Link>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-slate-300">
            Last updated: October 2026 · Compliant with NDPR & Global Data Standards
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
        <div>
          <h2 className="text-xl font-display font-bold text-[#010e52] mb-3">
            1. Information We Collect
          </h2>
          <p>
            BILDAHUB collects information you explicitly provide when applying for cohorts, subscribing to our build logs, joining community communication channels, or submitting student capstones. This includes your name, email address, phone number, state of residence, and technical project links.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-bold text-[#010e52] mb-3">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is used strictly to evaluate program admissions, coordinate mentor matchmaking, distribute calendar updates, and facilitate direct employment introductions with our vetted hiring partners. We never sell or lease your personal contact information to third-party ad networks.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-bold text-[#010e52] mb-3">
            3. Project Ownership & Code Rights
          </h2>
          <p>
            All code, intellectual property, and prototypes constructed by students during BILDAHUB cohorts remain 100% the property of the students and founders. BILDAHUB claims zero equity or IP rights on capstone builds.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-bold text-[#010e52] mb-3">
            4. Data Security & Storage
          </h2>
          <p>
            We implement modern encryption standards to protect learner records and applications. If you wish to withdraw your application or request data deletion, contact us at privacy@bildahub.africa.
          </p>
        </div>
      </div>
    </div>
  );
};
