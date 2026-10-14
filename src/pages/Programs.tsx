import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Award, CheckCircle, HelpCircle, Calendar, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { programsData } from '../data/programs';
import { generalFaqData } from '../data/faq';

export const Programs: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filters = ['All', 'Tech', 'Design', 'Business', 'Beginner', 'Advanced'];

  const filteredPrograms = programsData.filter((prog) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Tech' || activeFilter === 'Design' || activeFilter === 'Business') {
      return prog.category === activeFilter;
    }
    if (activeFilter === 'Beginner' || activeFilter === 'Advanced') {
      return prog.level === activeFilter;
    }
    return true;
  });

  const cohortSchedule = [
    { track: 'Full-Stack Web Development', cohort: 'Cohort 5 (Q1 2027)', appsClose: 'Dec 15, 2026', startDate: 'Jan 11, 2027', format: 'Hybrid (Lagos)' }, // PLACEHOLDER
    { track: 'Mobile App Engineering', cohort: 'Cohort 4 (Q1 2027)', appsClose: 'Dec 20, 2026', startDate: 'Jan 18, 2027', format: 'Hybrid (Lagos)' }, // PLACEHOLDER
    { track: 'Product Design (UI/UX)', cohort: 'Cohort 6 (Q1 2027)', appsClose: 'Jan 05, 2027', startDate: 'Jan 25, 2027', format: 'Online (Pan-Africa)' }, // PLACEHOLDER
    { track: 'Data Science & Applied AI', cohort: 'Cohort 3 (Q1 2027)', appsClose: 'Jan 10, 2027', startDate: 'Feb 01, 2027', format: 'Hybrid (Lagos)' }, // PLACEHOLDER
    { track: 'Tech for Teens', cohort: 'Holiday Camp 2026', appsClose: 'Nov 30, 2026', startDate: 'Dec 12, 2026', format: 'Hybrid (Weekend)' } // PLACEHOLDER
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-[#010e52] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <div
          className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_20%_25%,rgba(0,37,255,0.28)_0%,transparent_55%),radial-gradient(circle_at_80%_75%,rgba(0,37,255,0.16)_0%,transparent_50%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#ffcc00] text-xs font-bold uppercase tracking-widest border border-white/20 mb-6">
            Curriculum & Academies
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight">
            Learn by <span className="text-[#ffcc00]">building.</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
            Rigorous, hands-on, scholarship-backed training programs designed to convert ambitious learners into production software engineers and founders.
          </p>

          {/* Filter Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 bg-[#04146a]/80 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeFilter === filter
                    ? 'bg-[#ffcc00] text-[#010e52] shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards Grid (8 programs) */}
      <section className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2.5 py-1 font-bold bg-[#0025ff]/10 text-[#0025ff] rounded-md">
                      {prog.category}
                    </span>
                    <span className="text-slate-500 font-semibold">{prog.level}</span>
                  </div>

                  <h3 className="text-xl font-display font-black text-[#010e52] group-hover:text-[#0025ff] transition-colors leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {prog.tagline}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Duration:</span>
                      <span className="font-semibold text-slate-800">{prog.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Format:</span>
                      <span className="font-semibold text-slate-800">{prog.format}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Tuition:</span>
                      <span className="font-bold text-[#0025ff]">{prog.price}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <Link
                    to={`/programs/${prog.slug}`}
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-[#010e52] text-white text-xs font-bold rounded-lg hover:bg-[#0025ff] transition-colors group-hover:shadow-md"
                  >
                    View Curriculum & Apply <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Learning Path Roadmap */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Progression Architecture"
            title="The BILDAHUB Learning Path"
            highlightWord="Learning"
            subtext="A clear, structured developmental journey from initial spark to verified venture launchpad."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 relative">
            {/* Step 1: Beginner */}
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ffcc00]">Stage 01</span>
              <h3 className="text-xl font-display font-bold text-white mt-1">Beginner</h3>
              <p className="text-xs text-[#8ea4ff] font-semibold mt-0.5">Foundations & Logic</p>
              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                Syntax mastery, computational thinking, algorithms, Git versioning, and learning how to read technical documentation without fear.
              </p>
              <ul className="mt-4 pt-4 border-t border-white/10 space-y-1.5 text-xs text-slate-300">
                <li>· HTML/CSS & Modern JS</li>
                <li>· Scratch & Game logic</li>
                <li>· Terminal navigation</li>
              </ul>
            </div>

            {/* Step 2: Intermediate */}
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ffcc00]">Stage 02</span>
              <h3 className="text-xl font-display font-bold text-white mt-1">Intermediate</h3>
              <p className="text-xs text-[#8ea4ff] font-semibold mt-0.5">Full-Stack & Systems</p>
              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                Component frameworks, relational schemas, RESTful APIs, state sync, and building multi-user applications with live databases.
              </p>
              <ul className="mt-4 pt-4 border-t border-white/10 space-y-1.5 text-xs text-slate-300">
                <li>· React & Node.js / Python</li>
                <li>· PostgreSQL / SQLite</li>
                <li>· Offline-first state</li>
              </ul>
            </div>

            {/* Step 3: Advanced */}
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ffcc00]">Stage 03</span>
              <h3 className="text-xl font-display font-bold text-white mt-1">Advanced</h3>
              <p className="text-xs text-[#8ea4ff] font-semibold mt-0.5">Scale & Security</p>
              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                Performance profiling, low-bandwidth edge delivery, penetration testing, applied machine learning, and CI/CD pipelines.
              </p>
              <ul className="mt-4 pt-4 border-t border-white/10 space-y-1.5 text-xs text-slate-300">
                <li>· Distributed architecture</li>
                <li>· Infosec & Webhooks</li>
                <li>· Fine-tuned ML pipelines</li>
              </ul>
            </div>

            {/* Step 4: Launchpad */}
            <div className="glass-card rounded-2xl p-6 border border-[#ffcc00]/40 shadow-[0_0_20px_rgba(255,204,0,0.15)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ffcc00]">Stage 04</span>
              <h3 className="text-xl font-display font-bold text-[#ffcc00] mt-1">Launchpad</h3>
              <p className="text-xs text-white font-semibold mt-0.5">Careers & Ventures</p>
              <p className="text-xs text-slate-200 mt-4 leading-relaxed">
                Demo Day pitching, commercial MVP validation, partner hiring introductions, and seed grant funding applications.
              </p>
              <ul className="mt-4 pt-4 border-t border-white/10 space-y-1.5 text-xs text-slate-200">
                <li>· Hiring partner interviews</li>
                <li>· $5,000 pilot seed grants</li>
                <li>· Lifetime alumni pod access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort Schedule Table */}
      <section className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Admissions Roadmap"
            title="Upcoming Cohort Calendar"
            highlightWord="Cohort"
            subtext="Applications are reviewed on a rolling basis. Early submission is strongly recommended."
            theme="light"
          />

          <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Program Track</th>
                  <th className="py-4 px-6">Cohort Batch</th>
                  <th className="py-4 px-6">Format</th>
                  <th className="py-4 px-6">Applications Close</th>
                  <th className="py-4 px-6">Start Date</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {cohortSchedule.map((c, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#010e52]">{c.track}</td>
                    <td className="py-4 px-6 font-medium text-slate-700">{c.cohort}</td>
                    <td className="py-4 px-6 text-slate-600">{c.format}</td>
                    <td className="py-4 px-6 font-semibold text-red-600">{c.appsClose}</td>
                    <td className="py-4 px-6 text-slate-700">{c.startDate}</td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        to="/programs/web-development"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0025ff] hover:underline"
                      >
                        Apply <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion (8 Questions) */}
      <section className="py-24 bg-slate-50 text-[#010e52] px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            highlightWord="Questions"
            subtext="Everything you need to know about our admissions, schedules, fees, and requirements."
            theme="light"
          />

          <div className="mt-12 space-y-4">
            {generalFaqData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-[#010e52] hover:text-[#0025ff] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-[#0025ff] text-xl font-mono shrink-0">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
