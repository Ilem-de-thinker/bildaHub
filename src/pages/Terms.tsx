import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Terms: React.FC = () => {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-xs text-slate-300">
            Last updated: October 2026
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
        <div>
          <h2 className="text-xl font-display font-bold text-[#010e52] mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By enrolling in a BILDAHUB program, joining our community spaces, or visiting our physical innovation hubs, you agree to uphold our community standards of mutual respect, intellectual honesty, and collaborative effort.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-bold text-[#010e52] mb-3">
            2. Scholarship & Attendance Commitments
          </h2>
          <p>
            Our scholarship-backed academy seats are made possible through philanthropic donors and corporate partners. Accepted fellows must commit to the published attendance threshold and capstone completion. Persistent unexcused absence may forfeit cohort placement.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-bold text-[#010e52] mb-3">
            3. Code of Conduct & Hub Regulations
          </h2>
          <p>
            BILDAHUB operates a strict zero-tolerance policy regarding harassment, discrimination, plagiarism, and cybercrime (including unauthorized network intrusion). All physical hub lab equipment must be treated with care and respect.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-bold text-[#010e52] mb-3">
            4. Limitation of Liability
          </h2>
          <p>
            BILDAHUB provides educational instruction, mentorship, and co-working facilities in good faith. We do not guarantee employment, venture funding, or specific financial outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};
