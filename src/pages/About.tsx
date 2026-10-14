import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Target, HeartHandshake, Award, Sparkles, Globe, Linkedin, Twitter, Github } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { teamData, advisorsData } from '../data/team';

export const About: React.FC = () => {
  const coreValues = [
    {
      title: 'Curiosity',
      description: 'We encourage continuous questioning, deep tinkering, and the boldness to dismantle systems to understand how they work.',
      icon: Compass
    },
    {
      title: 'Practicality',
      description: 'We measure learning by what you ship and deploy to real African users, never by how many video hours you watch.',
      icon: Target
    },
    {
      title: 'Community',
      description: 'Nobody builds world-changing technology in isolation; we succeed through radical collaboration, peer code reviews, and shared codebases.',
      icon: HeartHandshake
    },
    {
      title: 'Excellence',
      description: 'We build for global production standards with zero excuses for network latency, device constraints, or corner-cutting.',
      icon: Award
    },
    {
      title: 'Integrity',
      description: 'We handle data, peer trust, and financial systems with ethical defense, transparency, and accountability at every stage.',
      icon: Sparkles
    },
    {
      title: 'Africa-First Impact',
      description: 'We prioritize solving ground-level problems that enhance prosperity, healthcare, clean power, and education across our continent.',
      icon: Globe
    }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'The Seed in Yaba',
      description: 'Started as a weekend study circle in a shared Lagos garage with 14 computer science undergraduates sharing two power banks and one MTN router.' // PLACEHOLDER
    },
    {
      year: '2023',
      title: 'First Official Cohorts',
      description: 'Graduated our first 120 scholarship fellows across Web and Mobile development; 88% secured engineering internships within 60 days.' // PLACEHOLDER
    },
    {
      year: '2024',
      title: 'Expansion Beyond Lagos',
      description: 'Launched university student chapters in Abuja, Port Harcourt, and Ibadan, introducing our IoT hardware lab and teen coding initiatives.' // PLACEHOLDER
    },
    {
      year: '2025',
      title: 'Catalytic Grants & Employer Network',
      description: 'Partnered with 10+ African fintech and logistics leaders, distributing over ₦25,000,000 in equity-free student prototype grants.' // PLACEHOLDER
    },
    {
      year: '2026',
      title: 'Pan-African Vision',
      description: 'Surpassed 5,000 youth builders, operating 6 state hubs with offline-first curriculum deployments reaching over 40 rural secondary schools.' // PLACEHOLDER
    }
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#010e52] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <div
          className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_20%_25%,rgba(0,37,255,0.28)_0%,transparent_55%),radial-gradient(circle_at_80%_75%,rgba(0,37,255,0.16)_0%,transparent_50%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#ffcc00] text-xs font-bold uppercase tracking-widest border border-white/20 mb-6">
            The BILDAHUB Story
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight">
            We're building the <span className="text-[#ffcc00]">builders.</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
            Empowering a generation of innovative Africans with the technical craft, resilience, and community needed to engineer our continent’s digital future.
          </p>
        </div>
      </section>

      {/* Our Story (3 believable paragraphs) */}
      <section className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Origins & Purpose"
            title="Why BILDAHUB Exists"
            highlightWord="Why"
            subtext="From shared frustration to a pan-African movement of builders."
            theme="light"
          />

          <div className="mt-8 space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              Across Nigeria and Africa, the hunger to learn technology is electric. Millions of young people crowd cybercafés, spend scarce savings on mobile data bundles, and spend late nights wrestling with programming tutorials on ancient laptops. Yet, a heartbreaking percentage never transition into employable engineers or successful startup founders. They get stuck in "tutorial purgatory"—consuming videos passively without building real systems, isolated from mentors, and paralyzed whenever the power cuts.
            </p>
            <p>
              BILDAHUB was founded to destroy that chasm. We believe brilliance is evenly distributed from Lagos to Kano, but structured infrastructure is not. We realized that what aspiring builders need is not another 40-hour lecture playlist; they need physical sanctuary with uninterrupted solar electricity and high-speed broadband, peer accountability pods where bugs are solved together, and masterclasses led by engineers who actually deploy systems to millions of African users daily.
            </p>
            <p>
              Today, BILDAHUB has grown from a humble study ring into a pan-African learning foundry. We do not teach code as an abstract intellectual hobby; we teach it as an instrument of economic emancipation and community renewal. When a 19-year-old in Ibadan builds an offline agricultural sensor or a young woman in Enugu ships a counterfeit drug verification app, we aren't just teaching syntax—we are engineering the sovereignty and prosperity of our continent.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission (Two large side-by-side panels: Navy & Electric Blue) */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Panel (Navy) */}
          <div className="bg-[#010e52] text-white p-8 sm:p-12 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0025ff]/30 rounded-full blur-3xl pointer-events-none" />
            <div>
              <span className="px-3 py-1 bg-[#ffcc00] text-[#010e52] font-black text-xs uppercase tracking-widest rounded-full inline-block mb-6">
                Our Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-snug">
                To build a generation of innovative Africans who can create technology-driven solutions to real-world problems and shape a better future for Nigeria and beyond.
              </h2>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#8ea4ff]">
              Forward-looking · Pan-African · High impact
            </div>
          </div>

          {/* Mission Panel (Electric Blue) */}
          <div className="bg-[#0025ff] text-white p-8 sm:p-12 rounded-3xl border border-white/20 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#ffcc00]/25 rounded-full blur-3xl pointer-events-none" />
            <div>
              <span className="px-3 py-1 bg-white text-[#0025ff] font-black text-xs uppercase tracking-widest rounded-full inline-block mb-6">
                Our Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-snug">
                To empower young people with the knowledge, skills, community and opportunities they need to learn, build, innovate and develop practical solutions to real-world problems.
              </h2>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20 text-xs text-white/80">
              Grassroots execution · Hands-on mentorship · Sustainable pathways
            </div>
          </div>
        </div>
      </section>

      {/* Core Values (6 cards) */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Guiding Code"
            title="Core Values That Drive Us"
            highlightWord="Values"
            subtext="The unwavering ethos that shapes how we teach, build, and support every member of BILDAHUB."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="glass-card rounded-2xl p-7 border border-white/10 glow-yellow-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ffcc00]/15 text-[#ffcc00] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline: 2022 -> 2026 milestones */}
      <section className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Milestones"
            title="Our Journey: 2022 to 2026"
            highlightWord="Journey"
            subtext="How a scrappy weekend hack room evolved into Nigeria's premier youth innovation launchpad."
            theme="light"
          />

          <div className="relative mt-16 pl-6 sm:pl-10 border-l-2 border-[#0025ff] space-y-12">
            {milestones.map((m) => (
              <div key={m.year} className="relative group">
                {/* Node dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#ffcc00] border-4 border-white shadow-md ring-2 ring-[#0025ff]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#0025ff]">
                  {m.year}
                </span>
                <h3 className="text-xl font-display font-bold text-[#010e52] mt-1">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team: 8 member cards */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Leadership & Mentors"
            title="The Team Behind BILDAHUB"
            highlightWord="Team"
            subtext="Passionate operators, veteran engineers, and community champions dedicated to student transformation."
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="glass-card rounded-2xl p-6 border border-white/10 glow-yellow-hover flex flex-col justify-between group"
              >
                <div>
                  {/* Avatar / Portrait Placeholder */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0025ff] text-white font-display font-black text-xl flex items-center justify-center mb-5 shadow-lg group-hover:bg-[#ffcc00] group-hover:text-[#010e52] transition-colors">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-[#ffcc00] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#8ea4ff] font-semibold mt-0.5">{member.role}</p>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">{member.bio}</p>
                </div>

                {/* Social links */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3 text-slate-400">
                  {member.socials.x && (
                    <a
                      href={member.socials.x}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#ffcc00] transition-colors p-1"
                      aria-label={`${member.name} on X`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#ffcc00] transition-colors p-1"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#ffcc00] transition-colors p-1"
                      aria-label={`${member.name} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Advisors and Mentors strip */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <h3 className="text-xs uppercase font-bold tracking-widest text-[#ffcc00] text-center mb-8">
              Advisors & Industry Mentors in Residence
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advisorsData.map((adv) => (
                <div
                  key={adv.name}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <h4 className="text-sm font-bold text-white">{adv.name}</h4>
                  <p className="text-xs text-[#8ea4ff] mt-1">{adv.title}</p>
                  <p className="text-[11px] text-slate-400 mt-2">{adv.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-[#0025ff] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl font-display font-black">
            Want to be part of the <span className="text-[#ffcc00]">story?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
            Join the community today as a student, mentor, partner, or sponsor and accelerate African technical brilliance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button to="/community#join-form" variant="primary" size="lg">
              Join the Community
            </Button>
            <Button to="/partner" variant="secondary" size="lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
