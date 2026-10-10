import React, { useState } from 'react';
import {
  Users,
  MessageSquare,
  HelpCircle,
  Briefcase,
  Layers,
  BookOpen,
  Check,
  Send,
  MessageCircle,
  Shield,
  ArrowRight
} from 'lucide-react';
import { FluidCanvas } from '../components/FluidCanvas';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { NigeriaMap } from '../components/NigeriaMap';
import { Modal } from '../components/Modal';
import { api } from '../lib/api';

export const Community: React.FC = () => {
  const benefits = [
    { title: 'Peer Engineering Network', desc: 'Over 5,000 ambitious young builders sharing bugs, solutions, and code reviews daily across Nigeria.', icon: Users },
    { title: '1-on-1 Senior Mentorship', desc: 'Get paired with senior African tech engineers from Paystack, Moniepoint, and global tech teams.', icon: HelpCircle },
    { title: 'Weekly Physical & Virtual Jams', desc: 'Saturday co-working sessions at our tech hubs with guaranteed electricity, Starlink, and snacks.', icon: MessageSquare },
    { title: 'Curated African Job Board', desc: 'Direct access to vetted internships, junior engineering roles, and contract gigs from partner tech firms.', icon: Briefcase },
    { title: 'Cross-Disciplinary Collaboration', desc: 'Team up with UI/UX designers, backend devs, and growth marketers to launch complete venture products.', icon: Layers },
    { title: 'Open Resource & Hardware Library', desc: 'Free access to cloud server credits, ESP32 hardware kits, premium design systems, and book archives.', icon: BookOpen }
  ];

  const tiers = [
    {
      name: 'Explorer',
      price: 'Free Forever',
      desc: 'Ideal for beginners and university students curious about exploring tech.',
      features: [
        'Access to open WhatsApp & Discord channels',
        'Attendance at monthly virtual masterclasses',
        'Public project showcase directory submission',
        'Weekly curated African Tech newsletter'
      ],
      cta: 'Join as Explorer',
      isYellow: false
    },
    {
      name: 'Builder',
      price: 'Scholarship / Free',
      badge: 'Most Popular',
      desc: 'For active coders and designers committed to shipping production capstones.',
      features: [
        'Everything in Explorer',
        'Physical hub access with 24/7 solar power & Wi-Fi',
        'Weekly mentor code reviews and pull request audits',
        'Priority enrollment in flagship academy tracks',
        'Eligibility for $5,000 equity-free seed grant pool'
      ],
      cta: 'Apply for Builder Tier',
      isYellow: true
    },
    {
      name: 'Innovator (Fellow)',
      price: 'By Audition / Cohort',
      desc: 'For advanced founders and lead engineers building commercial startups.',
      features: [
        'Everything in Builder',
        'Dedicated founder-in-residence advising',
        'Private Demo Day pitch slot with VC scouts',
        'Legal incorporation & banking compliance support',
        'Direct intros to angel funding syndicates'
      ],
      cta: 'Audition for Fellow',
      isYellow: false
    }
  ];

  const stories = [
    {
      name: 'Ibrahim Danjuma', // PLACEHOLDER
      location: 'Kano Hub',
      role: 'Embedded Hardware Hacker',
      quote: 'Growing up in Kano, I was told hardware cannot be built in Nigeria. BILDAHUB gave me the devkits, solar lab, and mentorship to prove everyone wrong. Our farm moisture sensors are now deployed across 1,200 farms.',
      metric: 'Deployed 1,200+ Farm Sensors'
    },
    {
      name: 'Amaka Chibuzor', // PLACEHOLDER
      location: 'Enugu Chapter',
      role: 'Mobile Security Fellow',
      quote: 'When my younger sister was hospitalized due to fake antimalarial medication, I vowed to build a solution. My BILDAHUB mentor helped me architect a cryptographic SMS verification engine that has now verified over 85,000 drug packs.',
      metric: '85,000+ Drug Packs Verified'
    },
    {
      name: 'Damilola Shonubi', // PLACEHOLDER
      location: 'Lagos HQ',
      role: 'Applied AI Specialist',
      quote: 'BILDAHUB is the only place in West Africa where 20-year-olds are fine-tuning open source speech transformers for indigenous Nigerian dialects without spending millions on cloud bills.',
      metric: 'Trained 300+ hrs Pidgin STT'
    }
  ];

  // Join form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: 'Lagos',
    interestArea: 'Web Development',
    experienceLevel: 'Beginner'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Mentor modal state
  const [mentorModalOpen, setMentorModalOpen] = useState(false);

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await api.joinCommunity(formData);
    setIsSubmitting(false);
    setFormSuccess(true);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-[#010e52] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <FluidCanvas className="z-0 opacity-60" intensity={0.8} />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#ffcc00] text-xs font-bold uppercase tracking-widest border border-white/20 mb-6">
            The African Builder Network
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight">
            Don't build <span className="text-[#ffcc00]">alone.</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
            Join 5,000+ passionate Nigerian and African builders sharing code, solving infrastructure bottlenecks, and lifting each other up.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button to="#join-form" variant="primary" size="md">
              Join the Community
            </Button>
            <Button to="#channels" variant="secondary" size="md">
              Explore Channels
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits of joining (6 cards) */}
      <section className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Community Perks"
            title="Why Young Builders Flourish at BILDAHUB"
            highlightWord="Flourish"
            subtext="Everything we provide is engineered to eliminate friction so you can focus 100% on building."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0025ff]/10 text-[#0025ff] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#010e52] mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Tiers (3 cards, Builder highlighted in yellow) */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Membership Pathways"
            title="Choose Your Level of Engagement"
            highlightWord="Engagement"
            subtext="Whether you're just writing your first 'Hello World' or preparing for angel investment, there's a place for you."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  tier.isYellow
                    ? 'bg-[#ffcc00] text-[#010e52] shadow-2xl ring-4 ring-[#ffcc00]/50 scale-105 z-10'
                    : 'glass-card border border-white/15 text-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        tier.isYellow ? 'text-[#010e52]' : 'text-[#ffcc00]'
                      }`}
                    >
                      {tier.name}
                    </span>
                    {tier.badge && (
                      <span className="px-2.5 py-1 text-[10px] font-black uppercase rounded-full bg-[#010e52] text-white">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <span className="text-3xl font-display font-black block">
                      {tier.price}
                    </span>
                    <p
                      className={`text-xs mt-2 leading-relaxed ${
                        tier.isYellow ? 'text-slate-800' : 'text-slate-300'
                      }`}
                    >
                      {tier.desc}
                    </p>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {tier.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5 text-xs font-medium">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.isYellow ? 'text-[#010e52]' : 'text-[#ffcc00]'
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-black/10">
                  <a
                    href="#join-form"
                    className={`w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                      tier.isYellow
                        ? 'bg-[#010e52] text-white hover:bg-[#0025ff]'
                        : 'bg-white/10 text-white hover:bg-[#ffcc00] hover:text-[#010e52]'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels (WhatsApp, Discord, Telegram) */}
      <section id="channels" className="py-20 bg-slate-50 text-[#010e52] px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading
            eyebrow="Instant Channels"
            title="Join the Conversation Today"
            highlightWord="Conversation"
            subtext="Pick your favourite platform and connect directly with thousands of fellow African coders."
            theme="light"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {/* WhatsApp */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-display">WhatsApp Community</h4>
                <p className="text-xs text-slate-600 mt-2">
                  Daily announcements, quick code banter, and local state hub meeting reminders.
                </p>
              </div>
              <a
                href="https://chat.whatsapp.com/bildahub"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center py-2.5 px-4 bg-[#25D366] text-[#010e52] text-xs font-bold rounded-lg hover:bg-[#20ba5a] transition-colors"
              >
                Join WhatsApp Group
              </a>
            </div>

            {/* Discord */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#5865F2]/20 text-[#5865F2] flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-display">Discord Server</h4>
                <p className="text-xs text-slate-600 mt-2">
                  Voice coding rooms, live screen-shares, code reviews, and weekend virtual hackathons.
                </p>
              </div>
              <a
                href="https://discord.gg/bildahub"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center py-2.5 px-4 bg-[#5865F2] text-white text-xs font-bold rounded-lg hover:bg-[#4752c4] transition-colors"
              >
                Enter Discord Server
              </a>
            </div>

            {/* Telegram */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#229ED9]/20 text-[#229ED9] flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-display">Telegram Channel</h4>
                <p className="text-xs text-slate-600 mt-2">
                  Curated African tech job listings, seed funding grant notices, and low-data resources.
                </p>
              </div>
              <a
                href="https://t.me/bildahub"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center py-2.5 px-4 bg-[#229ED9] text-white text-xs font-bold rounded-lg hover:bg-[#1b80b0] transition-colors"
              >
                Subscribe on Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters: Stylized Interactive SVG Map of Nigeria */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Nationwide Presence"
            title="State Chapters & Physical Hubs"
            highlightWord="Hubs"
            subtext="Discover our vibrant network across campuses and tech innovation districts across Nigeria."
            theme="dark"
          />

          <div className="mt-12">
            <NigeriaMap />
          </div>
        </div>
      </section>

      {/* Mentorship Program Section */}
      <section className="py-20 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0025ff]">
              1-on-1 Guidance
            </span>
            <h2 className="text-3xl font-display font-extrabold text-[#010e52] mt-2">
              The BILDAHUB Mentorship Network
            </h2>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Every student in our Builder tier is matched with an active senior software engineer or tech lead based on their technical specialization. Mentors conduct code reviews, help untangle complex system architectures, and prepare you for technical job interviews.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                variant="blue"
                size="md"
                onClick={() => setMentorModalOpen(true)}
              >
                Become a Mentor
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-xs text-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0025ff] text-white flex items-center justify-center font-bold">1</div>
              <span>Fill out your technical goals and project ambitions.</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0025ff] text-white flex items-center justify-center font-bold">2</div>
              <span>Get matched with an experienced engineer in your stack.</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0025ff] text-white flex items-center justify-center font-bold">3</div>
              <span>Weekly 45-minute syncs + asynchronous PR reviews on GitHub.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stories: 3 member spotlights */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Member Spotlights"
            title="Stories from the Frontlines"
            highlightWord="Stories"
            subtext="Meet the young people redefining what is possible in African technology."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stories.map((st) => (
              <div
                key={st.name}
                className="glass-card rounded-2xl p-7 border border-white/10 flex flex-col justify-between glow-yellow-hover"
              >
                <div>
                  <span className="text-xs font-bold text-[#ffcc00] block mb-1">
                    {st.location} · {st.role}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mb-4">{st.name}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    "{st.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-xs font-bold text-[#8ea4ff]">{st.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form (name, email, phone, state, interest area, experience level) */}
      <section id="join-form" className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
          <SectionHeading
            eyebrow="Start Today"
            title="Join the BILDAHUB Community"
            highlightWord="Join"
            subtext="Fill out the short form below to receive your orientation pack and invitations to your state hub."
            theme="light"
          />

          <form onSubmit={handleJoinSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Chioma Adebayo"
                className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] focus:ring-1 focus:ring-[#0025ff] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="chioma@example.com"
                  className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] focus:ring-1 focus:ring-[#0025ff] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+234 800 000 0000"
                  className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] focus:ring-1 focus:ring-[#0025ff] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  State in Nigeria *
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] outline-none"
                >
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja (FCT)</option>
                  <option value="Oyo">Oyo (Ibadan)</option>
                  <option value="Rivers">Rivers (Port Harcourt)</option>
                  <option value="Cross River">Cross River (Calabar)</option>
                  <option value="Kano">Kano</option>
                  <option value="Enugu">Enugu</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Other">Other State / Diaspora</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Primary Interest *
                </label>
                <select
                  value={formData.interestArea}
                  onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                  className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] outline-none"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Product Design">Product Design (UI/UX)</option>
                  <option value="Data & AI">Data Science & AI</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Hardware / IoT">Hardware & IoT</option>
                  <option value="Startup Founder">Tech Entrepreneurship</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Experience Level *
                </label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] outline-none"
                >
                  <option value="Complete Beginner">Complete Beginner</option>
                  <option value="Beginner">Beginner (1-6 months)</option>
                  <option value="Intermediate">Intermediate (1-2 years)</option>
                  <option value="Advanced">Advanced (3+ years)</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full justify-center"
              >
                {isSubmitting ? 'Registering...' : 'Join BILDAHUB Community'}
              </Button>
            </div>

            {formSuccess && (
              <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold text-center animate-in fade-in">
                🎉 Welcome aboard! An invite link has been dispatched to {formData.email}.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Mentor Modal */}
      <Modal
        isOpen={mentorModalOpen}
        onClose={() => setMentorModalOpen(false)}
        title="Become a BILDAHUB Mentor"
      >
        <p className="text-xs text-slate-300 mb-4">
          Share your professional engineering or design wisdom with the next generation of African builders.
        </p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
          />
          <input
            type="email"
            placeholder="Work Email"
            className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
          />
          <input
            type="text"
            placeholder="Current Role & Company (e.g. Senior Backend Dev at Paystack)"
            className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
          />
          <textarea
            rows={3}
            placeholder="How would you like to contribute (code reviews, 1-on-1 calls, masterclasses)?"
            className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none resize-none"
          />
          <Button
            variant="primary"
            size="md"
            className="w-full justify-center"
            onClick={() => {
              setMentorModalOpen(false);
              alert('Thank you! Our mentorship coordinator will reach out to you.');
            }}
          >
            Submit Mentor Application
          </Button>
        </div>
      </Modal>
    </div>
  );
};
