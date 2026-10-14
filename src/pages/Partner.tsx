import React, { useState } from 'react';
import {
  HeartHandshake,
  DollarSign,
  UserCheck,
  GraduationCap,
  Download,
  Building,
  CheckCircle,
  Send,
  Sparkles
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { StatCounter } from '../components/StatCounter';
import { api } from '../lib/api';

export const Partner: React.FC = () => {
  const waysToPartner = [
    {
      title: 'Sponsor a Student Cohort',
      desc: 'Fund a full 12-week academy pod of 25 aspiring developers. Receive branding on cohort capstones and direct first-look hiring privileges.',
      icon: GraduationCap
    },
    {
      title: 'Direct Talent Hiring Pipeline',
      desc: 'Access verified junior and mid-level software engineers, mobile devs, and designers. Host private demo days with zero recruitment markups.',
      icon: UserCheck
    },
    {
      title: 'Provide Senior Mentorship',
      desc: 'Connect your senior technical staff with our students for weekly 1-on-1 code reviews, architectural critiques, and career coaching.',
      icon: HeartHandshake
    },
    {
      title: 'Fund Hardware & Seed Grants',
      desc: 'Provide devkits (ESP32, solar battery units, microcontrollers) or contribute to our $5,000 equity-free student prototype grant pool.',
      icon: DollarSign
    }
  ];

  const tiers = [
    {
      name: 'Seed Partner',
      contribution: '₦2.5M / $3,500', // PLACEHOLDER
      benefits: [
        'Co-brand 1 specialized technical masterclass',
        'Direct access to graduate resume directory',
        'Logo placement on BILDAHUB website and newsletter'
      ]
    },
    {
      name: 'Cohort Catalyst',
      contribution: '₦7.5M / $10,000', // PLACEHOLDER
      isFeatured: true,
      benefits: [
        'Full naming rights for one 25-student academy cohort',
        'Exclusive Demo Day judging seat & keynote speaking slot',
        'First-round hiring access before public release',
        'Quarterly impact and learning analytics reports'
      ]
    },
    {
      name: 'Ecosystem Strategic Partner',
      contribution: '₦20M+ / $25,000+', // PLACEHOLDER
      benefits: [
        'Permanent branding in physical state innovation lab',
        'Dedicated custom curriculum tracks tailored to your tech stack',
        'Multi-city hackathon co-organization & sponsor naming',
        'Advisory board seat on BILDAHUB curriculum council'
      ]
    }
  ];

  // Form state
  const [partnerForm, setPartnerForm] = useState({
    organization: '',
    contactName: '',
    email: '',
    partnershipType: 'Sponsor a Cohort',
    budgetOrScope: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await api.submitPartner(partnerForm);
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleDownloadDeck = () => {
    alert('Thank you! The BILDAHUB 2026/2027 Partnership Deck has been downloaded (placeholder).');
  };

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
            Corporate & Philanthropic Collaboration
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight">
            Build Africa's future <span className="text-[#ffcc00]">with us.</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
            Partner with Nigeria's most rigorous youth tech movement to power scholarships, hire verified talent, and catalytic innovation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button to="#inquiry-form" variant="primary" size="md">
              Submit Partner Inquiry
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={handleDownloadDeck}
              icon={<Download className="w-4 h-4" />}
            >
              Download Partnership Deck
            </Button>
          </div>
        </div>
      </section>

      {/* Ways to Partner (4 cards) */}
      <section className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Collaboration Models"
            title="Four Tangible Ways to Partner"
            highlightWord="Ways"
            subtext="Choose how your organization creates sustainable impact in the African technology ecosystem."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {waysToPartner.map((way) => {
              const Icon = way.icon;
              return (
                <div
                  key={way.title}
                  className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0025ff]/10 text-[#0025ff] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#010e52] mb-2">{way.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{way.desc}</p>
                  </div>
                  <a
                    href="#inquiry-form"
                    className="mt-6 text-xs font-bold text-[#0025ff] hover:underline"
                  >
                    Express Interest →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us: Impact Numbers */}
      <section className="py-20 bg-[#0025ff] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffcc00]">
              Audited Metrics
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mt-2">
              Why Corporate Leaders Trust BILDAHUB
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <span className="text-4xl sm:text-6xl font-black font-display text-[#ffcc00] block">
                <StatCounter value={5000} suffix="+" />
              </span>
              <p className="mt-2 text-sm text-white/90 font-medium">Youth Reached</p>
            </div>
            <div>
              <span className="text-4xl sm:text-6xl font-black font-display text-white block">
                <StatCounter value={100} suffix="%" />
              </span>
              <p className="mt-2 text-sm text-white/90 font-medium">Scholarship Coverage</p>
            </div>
            <div>
              <span className="text-4xl sm:text-6xl font-black font-display text-[#ffcc00] block">
                <StatCounter value={84} suffix="%" />
              </span>
              <p className="mt-2 text-sm text-white/90 font-medium">Placement / Grants</p>
            </div>
            <div>
              <span className="text-4xl sm:text-6xl font-black font-display text-white block">
                <StatCounter value={6} />
              </span>
              <p className="mt-2 text-sm text-white/90 font-medium">State Innovation Hubs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers Table */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Funding Framework"
            title="Partnership & Sponsorship Tiers"
            highlightWord="Tiers"
            subtext="Structured packages designed for institutional transparency and maximum social return on investment."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 flex flex-col justify-between ${
                  tier.isFeatured
                    ? 'bg-[#04146a] border-2 border-[#ffcc00] shadow-2xl ring-2 ring-[#ffcc00]/20 scale-105'
                    : 'glass-card border border-white/10'
                }`}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ffcc00]">
                    {tier.name}
                  </span>
                  <div className="mt-3">
                    <span className="text-2xl sm:text-3xl font-display font-black text-white block">
                      {tier.contribution}
                    </span>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {tier.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle className="w-4 h-4 text-[#ffcc00] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href="#inquiry-form"
                    className="w-full inline-flex items-center justify-center py-3 px-4 bg-[#ffcc00] text-[#010e52] rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#e6b800] transition-colors"
                  >
                    Select Tier
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Inquiry Form */}
      <section id="inquiry-form" className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Start a Partnership Dialogue"
            highlightWord="Dialogue"
            subtext="Fill out the form below and our Executive Director will arrange a formal presentation."
            theme="light"
          />

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Organization / Entity *
                </label>
                <input
                  type="text"
                  required
                  value={partnerForm.organization}
                  onChange={(e) => setPartnerForm({ ...partnerForm, organization: e.target.value })}
                  placeholder="e.g. Flutterwave Ventures"
                  className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={partnerForm.contactName}
                  onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })}
                  placeholder="e.g. Ngozi Adeyemi"
                  className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Official Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={partnerForm.email}
                  onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                  placeholder="ngozi@organization.org"
                  className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Partnership Focus *
                </label>
                <select
                  value={partnerForm.partnershipType}
                  onChange={(e) => setPartnerForm({ ...partnerForm, partnershipType: e.target.value })}
                  className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] outline-none"
                >
                  <option value="Sponsor a Cohort">Sponsor a Cohort</option>
                  <option value="Hire Talent">Hire Talent</option>
                  <option value="Provide Mentorship">Provide Mentorship</option>
                  <option value="Fund a Scholarship">Fund a Scholarship / Equipment</option>
                  <option value="Other">Custom Collaboration</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Estimated Budget or Scope
              </label>
              <input
                type="text"
                value={partnerForm.budgetOrScope}
                onChange={(e) => setPartnerForm({ ...partnerForm, budgetOrScope: e.target.value })}
                placeholder="e.g. ₦5M or 25 Student Scholarships"
                className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Message / Strategic Goals *
              </label>
              <textarea
                required
                rows={3}
                value={partnerForm.message}
                onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                placeholder="Describe your organization's mission and how you'd like to collaborate..."
                className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={submitting}
                className="w-full justify-center"
              >
                {submitting ? 'Submitting...' : 'Send Partnership Proposal'}
              </Button>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold text-center animate-in fade-in">
                ✓ Thank you! Our Directorate of Strategic Partnerships will respond within 24 hours.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};
