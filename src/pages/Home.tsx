import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  Cpu,
  Users2,
  Briefcase,
  Zap,
  GraduationCap,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  CheckCircle,
  ShieldAlert
} from 'lucide-react';
import { AnimatedBuilderHero } from '../components/AnimatedBuilderHero';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { SectionHeading } from '../components/SectionHeading';
import { StatCounter } from '../components/StatCounter';
import { testimonialsData, partnerLogos } from '../data/testimonials';
import { api } from '../lib/api';

export const Home: React.FC = () => {
  // Hero Tilt Card interaction
  const tiltCardRef = useRef<HTMLDivElement | null>(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltCardRef.current) return;
    const rect = tiltCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / rect.height) * 12;
    const rotY = (x / rect.width) * 12;
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleHeroMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out'
    });
  };

  // Testimonials Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Final CTA Email state
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaSubmitted, setCtaSubmitted] = useState(false);
  const [ctaLoading, setCtaLoading] = useState(false);

  const handleCtaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ctaEmail) return;
    setCtaLoading(true);
    await api.subscribeNewsletter(ctaEmail);
    setCtaLoading(false);
    setCtaSubmitted(true);
  };

  return (
    <div className="w-full overflow-hidden">
      {/* =========================================================================
          HERO SECTION (100vh)
          ========================================================================= */}
      <section
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative min-h-screen flex flex-col justify-between bg-[#010e52] pt-28 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Animated African Tech Builders Background + Real-time WebGL Fluid Movement Pattern */}
        <AnimatedBuilderHero />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Eyebrow + Staggered H1 + Subtext + Magnetic CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#ffcc00] animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                  BILDAHUB · Built in Africa, for the world
                </span>
              </div>

              {/* H1 */}
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.08] tracking-tight">
                Africa's next generation of{' '}
                <span className="text-[#ffcc00] drop-shadow-[0_0_35px_rgba(255,204,0,0.45)]">
                  builders
                </span>{' '}
                starts here.
              </h1>

              {/* Subtext */}
              <p className="mt-6 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
                We give young Nigerians the knowledge, skills, community and opportunities to learn, build and ship real solutions to real-world problems.
              </p>

              {/* CTAs */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Button
                  to="/community#join-form"
                  variant="primary"
                  size="lg"
                  isMagnetic
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Join the Community
                </Button>

                <Button
                  to="/about"
                  variant="secondary"
                  size="lg"
                  isMagnetic
                  className="w-full sm:w-auto"
                >
                  Our Story
                </Button>
              </div>

              {/* Quick Trust badges */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#ffcc00]" /> 100% Scholarship-backed
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#ffcc00]" /> Production-ready Capstones
                </span>
              </div>
            </div>

            {/* Right Column: Glassmorphism Brand Details Tilt Card */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div
                ref={tiltCardRef}
                style={tiltStyle}
                className="w-full max-w-md glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden backdrop-blur-2xl will-change-transform"
              >
                {/* Subtle internal glowing orb */}
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#0025ff]/40 rounded-full blur-3xl pointer-events-none" />

                {/* Card Header with Logo */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <Logo size="md" />
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#ffcc00]/20 text-[#ffcc00] border border-[#ffcc00]/40 rounded-full">
                    Hub Blueprint
                  </span>
                </div>

                {/* Vision Block */}
                <div className="mt-5 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffcc00]">
                    Our Vision
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                    To build a generation of innovative Africans who can create technology-driven solutions to real-world problems and shape a better future for Nigeria and beyond.
                  </p>
                </div>

                {/* Mission Block */}
                <div className="mt-5 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffcc00]">
                    Our Mission
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                    To empower young people with the knowledge, skills, community and opportunities they need to learn, build, innovate and develop practical solutions.
                  </p>
                </div>

                {/* Count-Up Stats Grid */}
                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <span className="block text-xl sm:text-2xl font-black text-[#ffcc00]">
                      <StatCounter value={5000} suffix="+" />
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-300 font-medium">
                      Young Innovators
                    </span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-black text-white">
                      <StatCounter value={50} suffix="+" />
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-300 font-medium">
                      Projects Built
                    </span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-black text-[#ffcc00]">
                      <StatCounter value={10} suffix="+" />
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-300 font-medium">
                      Hiring Partners
                    </span>
                  </div>
                </div>

                {/* Core Pillars */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-2">
                  <span className="px-3 py-1 text-xs font-bold bg-white/10 text-white rounded-md border border-white/10">
                    Learn
                  </span>
                  <span className="text-[#ffcc00] font-black">·</span>
                  <span className="px-3 py-1 text-xs font-bold bg-[#ffcc00] text-[#010e52] rounded-md">
                    Build
                  </span>
                  <span className="text-[#ffcc00] font-black">·</span>
                  <span className="px-3 py-1 text-xs font-bold bg-white/10 text-white rounded-md border border-white/10">
                    Innovate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom of Hero: Scroll Indicator + Marquee Strip */}
        <div className="relative z-10 w-full mt-10">
          <div className="w-full overflow-hidden border-t border-b border-white/10 bg-[#010e52]/70 backdrop-blur-md py-2.5">
            <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-bold tracking-widest uppercase text-white/90">
              <span className="mx-6">Nigeria 🇳🇬 → Africa → The World</span>
              <span className="mx-6 text-[#ffcc00]">★</span>
              <span className="mx-6">Nigeria 🇳🇬 → Africa → The World</span>
              <span className="mx-6 text-[#ffcc00]">★</span>
              <span className="mx-6">Nigeria 🇳🇬 → Africa → The World</span>
              <span className="mx-6 text-[#ffcc00]">★</span>
              <span className="mx-6">Nigeria 🇳🇬 → Africa → The World</span>
              <span className="mx-6 text-[#ffcc00]">★</span>
              <span className="mx-6">Nigeria 🇳🇬 → Africa → The World</span>
              <span className="mx-6 text-[#ffcc00]">★</span>
              <span className="mx-6">Nigeria 🇳🇬 → Africa → The World</span>
              <span className="mx-6 text-[#ffcc00]">★</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: THE PROBLEM WE'RE SOLVING (White BG)
          ========================================================================= */}
      <section className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The Reality in Africa"
            title="The Problem We're Solving"
            highlightWord="Problem"
            subtext="Talent is uniformly distributed across Nigeria and Africa, but structured access, reliable power, and practical engineering mentorship are not."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0025ff]/10 flex items-center justify-center text-[#0025ff] mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <span className="text-4xl sm:text-5xl font-black font-display text-[#0025ff] tracking-tight block">
                53.4%
              </span>
              <h3 className="text-xl font-bold font-display mt-3 text-[#010e52]">
                Youth Underemployment
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Over half of Nigerian young graduates face unemployment or underemployment due to a severe mismatch between academic theory and industry engineering needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0025ff]/10 flex items-center justify-center text-[#0025ff] mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-4xl sm:text-5xl font-black font-display text-[#0025ff] tracking-tight block">
                85%
              </span>
              <h3 className="text-xl font-bold font-display mt-3 text-[#010e52]">
                Infrastructure Bottlenecks
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Erratic electricity grids and prohibitive cellular data costs force passionate youth to drop out of self-taught online tutorials and isolation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0025ff]/10 flex items-center justify-center text-[#0025ff] mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-4xl sm:text-5xl font-black font-display text-[#0025ff] tracking-tight block">
                70%
              </span>
              <h3 className="text-xl font-bold font-display mt-3 text-[#010e52]">
                The Practical Skills Void
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Tech companies struggle to fill engineering seats because candidates have watched videos but never deployed real production databases, APIs, or tested offline apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT WE DO (Navy BG, 4 Glass Cards with Yellow Edge Glow)
          ========================================================================= */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0025ff_0%,transparent_50%)] opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            eyebrow="Our Four Pillars"
            title="What We Do"
            highlightWord="What"
            subtext="We run high-intensity learning pods, build production software, nurture peer communities, and open direct employment pipelines."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Pillar 1: Learn */}
            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between glow-yellow-hover">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffcc00]/20 text-[#ffcc00] flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Learn</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Rigorous, scholarship-backed curriculums in full-stack, mobile, AI, and cybersecurity taught by active engineers.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#ffcc00] hover:underline"
              >
                Our Story <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 2: Build */}
            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between glow-yellow-hover">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0025ff]/40 text-white flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Build</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Hands-on capstone labs where students engineer real applications solving Nigerian agricultural, financial, and logistics challenges.
                </p>
              </div>
              <Link
                to="/community"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#ffcc00] hover:underline"
              >
                Join the Hub <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 3: Community */}
            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between glow-yellow-hover">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffcc00]/20 text-[#ffcc00] flex items-center justify-center mb-6">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Community</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  A high-trust network of 5,000+ peers, mentor review pods, weekend code jams, and physical co-working hubs with 24/7 power.
                </p>
              </div>
              <Link
                to="/community"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#ffcc00] hover:underline"
              >
                Join the Hub <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 4: Opportunities */}
            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between glow-yellow-hover">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0025ff]/40 text-white flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Opportunities</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Direct introductions to corporate hiring partners, paid internships, freelance contracts, and seed innovation grants.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#ffcc00] hover:underline"
              >
                Talk To Us <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: HOW IT WORKS (White BG, 4-step horizontal timeline)
          ========================================================================= */}
      <section className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The Builder Journey"
            title="How It Works"
            highlightWord="Works"
            subtext="From curious applicant to verified production engineer shipping code for African enterprises."
            theme="light"
          />

          <div className="relative mt-16">
            {/* Horizontal Timeline Connector Bar */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-8 z-0">
              <div className="h-full bg-[#0025ff] w-3/4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0025ff] text-white font-display font-black text-lg flex items-center justify-center mb-4 shadow-md">
                  01
                </div>
                <h4 className="text-lg font-bold font-display text-[#010e52]">Join</h4>
                <p className="text-xs text-[#0025ff] font-semibold mt-0.5">Selection & Orientation</p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Apply for an upcoming cohort or step in as an Explorer member. Complete logic assessments and meet your cohort pod.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0025ff] text-white font-display font-black text-lg flex items-center justify-center mb-4 shadow-md">
                  02
                </div>
                <h4 className="text-lg font-bold font-display text-[#010e52]">Learn</h4>
                <p className="text-xs text-[#0025ff] font-semibold mt-0.5">Curriculum & Mentorship</p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Deep dive into intensive technical modules, live masterclasses, and weekly code reviews with veteran African tech leads.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0025ff] text-white font-display font-black text-lg flex items-center justify-center mb-4 shadow-md">
                  03
                </div>
                <h4 className="text-lg font-bold font-display text-[#010e52]">Build</h4>
                <p className="text-xs text-[#0025ff] font-semibold mt-0.5">Capstones & Hackathons</p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Team up with designers and fellow engineers to architect real-world capstone solutions with offline resilience and databases.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col bg-white p-6 rounded-2xl border border-[#ffcc00] shadow-md ring-2 ring-[#ffcc00]/30">
                <div className="w-12 h-12 rounded-full bg-[#ffcc00] text-[#010e52] font-display font-black text-lg flex items-center justify-center mb-4 shadow-md">
                  04
                </div>
                <h4 className="text-lg font-bold font-display text-[#010e52]">Launch</h4>
                <p className="text-xs text-[#0025ff] font-semibold mt-0.5">Demo Day & Careers</p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Pitch live to hiring partners, angel investors, and accelerators. Graduate with verified repos and career coaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: IMPACT STATS BAND (Electric Blue BG, animated counters)
          ========================================================================= */}
      <section className="py-20 bg-[#0025ff] text-white px-4 sm:px-6 lg:px-8 shadow-inner relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <span className="text-4xl sm:text-6xl font-black font-display text-[#ffcc00] block">
                <StatCounter value={5000} suffix="+" />
              </span>
              <p className="mt-2 text-sm sm:text-base font-semibold text-white/90">
                Youth Trained Across Nigeria
              </p>
            </div>

            <div>
              <span className="text-4xl sm:text-6xl font-black font-display text-white block">
                <StatCounter value={50} suffix="+" />
              </span>
              <p className="mt-2 text-sm sm:text-base font-semibold text-white/90">
                Production Capstones Shipped
              </p>
            </div>

            <div>
              <span className="text-4xl sm:text-6xl font-black font-display text-[#ffcc00] block">
                <StatCounter value={84} suffix="%" />
              </span>
              <p className="mt-2 text-sm sm:text-base font-semibold text-white/90">
                Graduate Employment & Grant Rate
              </p>
            </div>

            <div>
              <span className="text-4xl sm:text-6xl font-black font-display text-white block">
                <StatCounter value={10} suffix="+" />
              </span>
              <p className="mt-2 text-sm sm:text-base font-semibold text-white/90">
                Ecosystem Hiring Partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: TESTIMONIALS CAROUSEL (Navy BG, Yellow quote marks)
          ========================================================================= */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeading
            eyebrow="Voices of BILDAHUB"
            title="Real Builders. Real Outcomes."
            highlightWord="Outcomes"
            subtext="Hear how our alumni moved from tutorial frustration to engineering roles, venture grants, and thriving startups."
            theme="dark"
          />

          <div
            data-cursor="drag"
            className="mt-12 glass-card rounded-3xl p-8 sm:p-12 border border-white/20 relative"
          >
            {/* Giant Yellow Quote Mark */}
            <span className="text-[#ffcc00] font-serif text-8xl font-black absolute top-4 left-6 select-none opacity-40 leading-none">
              “
            </span>

            <div className="relative z-10 pt-6">
              <p className="text-xl sm:text-2xl font-normal text-slate-100 leading-relaxed italic">
                {testimonialsData[activeTestimonial].quote}
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold font-display text-white">
                    {testimonialsData[activeTestimonial].name}
                  </h4>
                  <p className="text-sm text-[#ffcc00] font-medium">
                    {testimonialsData[activeTestimonial].role} · {testimonialsData[activeTestimonial].location}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {testimonialsData[activeTestimonial].cohort}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {testimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeTestimonial === idx
                          ? 'bg-[#ffcc00] w-8'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PARTNERS MARQUEE (White BG, 8 placeholder logos)
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200 text-[#010e52] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Backed by & Partnered With Leading African Tech Ecosystems
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-12">
            {partnerLogos.concat(partnerLogos).map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm filter grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-[#010e52] text-[#ffcc00] font-black text-xs flex items-center justify-center">
                  {partner.symbol}
                </div>
                <span className="font-display font-bold text-sm text-slate-800">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FINAL CTA (Navy with fluid gradient accent)
          ========================================================================= */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Swirling fluid gradient accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0025ff_0%,transparent_60%),radial-gradient(circle_at_bottom_left,#ffcc00_0%,transparent_70%)] opacity-35" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#ffcc00] text-xs font-bold uppercase tracking-widest border border-white/20 mb-6">
            Step Up & Build
          </span>

          <h2 className="text-4xl sm:text-6xl font-display font-black text-white leading-tight">
            Ready to build the <span className="text-[#ffcc00]">future?</span>
          </h2>

          <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
            Stop waiting for opportunity to appear. Join 5,000+ ambitious young Nigerians and Africans writing the code that moves our continent forward.
          </p>

          {/* Email input + Join community button */}
          <form
            onSubmit={handleCtaSubmit}
            className="mt-8 w-full max-w-md flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={ctaEmail}
              onChange={(e) => setCtaEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-[#04146a] text-white text-sm rounded-lg px-4 py-3 border border-white/20 focus:border-[#ffcc00] focus:ring-1 focus:ring-[#ffcc00] focus:outline-none placeholder-slate-400"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={ctaLoading}
              className="w-full sm:w-auto"
            >
              {ctaLoading ? 'Connecting...' : 'Join the Community'}
            </Button>
          </form>

          {ctaSubmitted && (
            <p className="text-xs text-[#ffcc00] mt-3">
              🎉 Welcome to the movement! Watch your email for the orientation pack.
            </p>
          )}

          {/* WhatsApp Direct Join Button */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs text-slate-300">or join instantly via chat:</span>
            <a
              href="https://chat.whatsapp.com/bildahub"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-[#010e52] text-xs font-bold rounded-lg hover:bg-[#20ba5a] transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> Join WhatsApp Hub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
