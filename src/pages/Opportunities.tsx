import React, { useState } from 'react';
import {
  Briefcase,
  DollarSign,
  MapPin,
  Clock,
  Building,
  Search,
  CheckCircle,
  FileText,
  UserCheck,
  Send
} from 'lucide-react';
import { FluidCanvas } from '../components/FluidCanvas';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { opportunitiesData } from '../data/opportunities';
import { Opportunity } from '../types';
import { partnerLogos } from '../data/testimonials';
import { api } from '../lib/api';

export const Opportunities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [applyModalItem, setApplyModalItem] = useState<Opportunity | null>(null);

  const tabs = ['All', 'Internships', 'Jobs', 'Grants & Funding', 'Freelance Gigs'];

  const filteredListings = opportunitiesData.filter((item) => {
    const matchesTab = activeTab === 'All' || item.type === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Employer Hire Form state
  const [hireForm, setHireForm] = useState({
    company: '',
    roleNeeded: '',
    budget: '',
    email: '',
    details: ''
  });
  const [hireSubmitting, setHireSubmitting] = useState(false);
  const [hireSuccess, setHireSuccess] = useState(false);

  const handleHireSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHireSubmitting(true);
    await api.submitHireTalent(hireForm);
    setHireSubmitting(false);
    setHireSuccess(true);
    setTimeout(() => {
      setHireModalOpen(false);
      setHireSuccess(false);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-[#010e52] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <FluidCanvas className="z-0 opacity-60" intensity={0.7} />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#ffcc00] text-xs font-bold uppercase tracking-widest border border-white/20 mb-6">
            Careers & Capital
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight">
            From learning to <span className="text-[#ffcc00]">earning.</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
            We partner with African tech companies, venture funds, and international teams to place our graduates in high-growth roles and seed catalytic grants.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button
              variant="primary"
              size="md"
              onClick={() => setHireModalOpen(true)}
            >
              Hire Our Builders
            </Button>
            <Button to="#listings" variant="secondary" size="md">
              Browse Openings
            </Button>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section id="listings" className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tabs + Search Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-[#0025ff] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search roles or companies..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0025ff]"
              />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredListings.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2.5 py-1 font-bold bg-[#0025ff]/10 text-[#0025ff] rounded-md">
                      {item.type}
                    </span>
                    <span className="text-slate-500 font-semibold">{item.workplace}</span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#010e52] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0025ff] mt-1">{item.company}</p>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-semibold text-slate-900">{item.compensation}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Deadline: {item.deadline}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => setApplyModalItem(item)}
                    className="w-full py-2.5 px-4 bg-[#010e52] text-white text-xs font-bold rounded-lg hover:bg-[#0025ff] transition-colors"
                  >
                    View Details & Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies Strip */}
      <section className="py-12 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            Trusted by Hiring Engineering Teams Across Nigeria & Remote
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {partnerLogos.map((p, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-xs font-bold text-slate-700 shadow-sm"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Career Support Section */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Beyond The Code"
            title="Comprehensive Career Readiness"
            highlightWord="Readiness"
            subtext="We prepare you for the cultural and technical demands of high-growth technology companies."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="glass-card rounded-2xl p-7 border border-white/10 glow-yellow-hover">
              <div className="w-12 h-12 rounded-xl bg-[#ffcc00]/20 text-[#ffcc00] flex items-center justify-center mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                CV & Resume Clinics
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Transform academic course lists into impact-driven engineering resumes highlighting quantifiable capstones and verified GitHub contributions.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-7 border border-white/10 glow-yellow-hover">
              <div className="w-12 h-12 rounded-xl bg-[#0025ff]/40 text-white flex items-center justify-center mb-5">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Portfolio Audits
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Senior engineering leads critique your architecture diagrams, test coverage, README documentation, and responsive live deployments.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-7 border border-white/10 glow-yellow-hover">
              <div className="w-12 h-12 rounded-xl bg-[#ffcc00]/20 text-[#ffcc00] flex items-center justify-center mb-5">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Mock Technical Interviews
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Live whiteboarding, system design interrogations, and behavioral storytelling simulations with hiring managers from top African fintechs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Talent Modal */}
      <Modal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        title="Hire Verified BILDAHUB Builders"
      >
        <form onSubmit={handleHireSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
              Company / Organization Name *
            </label>
            <input
              type="text"
              required
              value={hireForm.company}
              onChange={(e) => setHireForm({ ...hireForm, company: e.target.value })}
              placeholder="e.g. Zenith Tech Labs"
              className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Role Needed *
              </label>
              <input
                type="text"
                required
                value={hireForm.roleNeeded}
                onChange={(e) => setHireForm({ ...hireForm, roleNeeded: e.target.value })}
                placeholder="e.g. Junior React Engineer"
                className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Estimated Monthly Budget *
              </label>
              <input
                type="text"
                required
                value={hireForm.budget}
                onChange={(e) => setHireForm({ ...hireForm, budget: e.target.value })}
                placeholder="e.g. ₦400k - ₦600k or $800"
                className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
              Contact Work Email *
            </label>
            <input
              type="email"
              required
              value={hireForm.email}
              onChange={(e) => setHireForm({ ...hireForm, email: e.target.value })}
              placeholder="hiring@company.com"
              className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
              Role Requirements & Context
            </label>
            <textarea
              rows={3}
              value={hireForm.details}
              onChange={(e) => setHireForm({ ...hireForm, details: e.target.value })}
              placeholder="Describe the stack, full-time/contract, and timeline..."
              className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none resize-none"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={hireSubmitting}
              className="w-full justify-center"
            >
              {hireSubmitting ? 'Submitting...' : 'Submit Hiring Request'}
            </Button>
          </div>

          {hireSuccess && (
            <p className="text-xs text-[#ffcc00] text-center font-bold">
              ✓ Received! Our talent lead will send candidate portfolios within 24 hours.
            </p>
          )}
        </form>
      </Modal>

      {/* Opportunity Apply Modal */}
      {applyModalItem && (
        <Modal
          isOpen={!!applyModalItem}
          onClose={() => setApplyModalItem(null)}
          title={applyModalItem.title}
        >
          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center text-xs text-slate-300 border-b border-white/10 pb-3">
              <span className="font-bold text-[#ffcc00]">{applyModalItem.company}</span>
              <span>{applyModalItem.compensation}</span>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed">
              {applyModalItem.description}
            </p>

            <div>
              <span className="text-xs font-bold uppercase text-slate-300 block mb-2">
                Requirements:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {applyModalItem.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#ffcc00]">✓</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  alert(`Thank you for applying to ${applyModalItem.title}! Your BILDAHUB profile has been forwarded.`);
                  setApplyModalItem(null);
                }}
              >
                Submit Application via BILDAHUB
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
