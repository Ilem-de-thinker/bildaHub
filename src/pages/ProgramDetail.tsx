import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  MapPin,
  Award,
  ChevronDown,
  Wrench,
  Cpu,
  UserCheck,
  Send
} from 'lucide-react';
import { programsData } from '../data/programs';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { api } from '../lib/api';

export const ProgramDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const program = programsData.find((p) => p.slug === slug) || programsData[0];

  const [openWeek, setOpenWeek] = useState<number | null>(0);
  const [modalOpen, setModalOpen] = useState(false);

  // Form state inside modal
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: 'Undergraduate',
    reason: '',
    portfolioUrl: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await api.applyProgram({
      programId: program.id,
      ...formData
    });
    setSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => {
      setModalOpen(false);
      navigate('/application-success');
    }, 1200);
  };

  return (
    <div className="w-full bg-white text-[#010e52]">
      {/* Header Banner */}
      <section className="bg-[#010e52] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#ffcc00] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all programs
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#ffcc00] text-[#010e52] text-xs font-black uppercase tracking-wider rounded-md">
              {program.category}
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-md border border-white/10">
              {program.level}
            </span>
            <span className="px-3 py-1 bg-[#0025ff] text-white text-xs font-semibold rounded-md">
              {program.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight">
            {program.title}
          </h1>

          <p className="mt-4 text-lg text-slate-200 max-w-3xl leading-relaxed">
            {program.tagline}
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <div>
              <span className="text-slate-400 block">Format:</span>
              <span className="font-semibold text-white">{program.format}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Tuition:</span>
              <span className="font-bold text-[#ffcc00]">{program.price}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left 8 cols: Detailed sections */}
        <div className="lg:col-span-8 space-y-16">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-display font-bold text-[#010e52] mb-4">
              Program Overview
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {program.overview}
            </p>
          </div>

          {/* Who is it for */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-display font-bold text-[#010e52] mb-4">
              Who Is This Program For?
            </h3>
            <ul className="space-y-3">
              {program.whoIsItFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#0025ff] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools you'll learn */}
          <div>
            <h3 className="text-xl font-display font-bold text-[#010e52] mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#0025ff]" /> Tools & Technologies You'll Master
            </h3>
            <div className="flex flex-wrap gap-2">
              {program.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-1.5 bg-[#010e52] text-white text-xs font-semibold rounded-lg shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Weekly Curriculum (Accordion) */}
          <div>
            <h3 className="text-2xl font-display font-bold text-[#010e52] mb-6">
              Curriculum by Week
            </h3>
            <div className="space-y-4">
              {program.curriculum.map((c, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenWeek(openWeek === idx ? null : idx)}
                    className="w-full p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#0025ff] uppercase block">
                        {c.week}
                      </span>
                      <h4 className="text-base font-bold font-display text-[#010e52] mt-0.5">
                        {c.title}
                      </h4>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform ${
                        openWeek === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openWeek === idx && (
                    <div className="p-5 bg-white border-t border-slate-200 text-sm text-slate-700 space-y-3">
                      <p className="leading-relaxed">{c.description}</p>
                      <div className="pt-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                          Core Topics Covered:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                          {c.topics.map((t, tidx) => (
                            <li key={tidx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0025ff]" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Projects you'll build */}
          <div>
            <h3 className="text-2xl font-display font-bold text-[#010e52] mb-6 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-[#0025ff]" /> Projects You'll Build & Ship
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {program.projectsBuilt.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#0025ff] block mb-1">
                      Capstone Project #{idx + 1}
                    </span>
                    <h4 className="text-lg font-bold font-display text-[#010e52]">
                      {proj.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructors */}
          <div>
            <h3 className="text-2xl font-display font-bold text-[#010e52] mb-6 flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-[#0025ff]" /> Lead Instructors & Mentors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {program.instructors.map((inst, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-[#010e52] text-[#ffcc00] font-black text-base flex items-center justify-center shrink-0">
                    {inst.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#010e52]">{inst.name}</h4>
                    <p className="text-xs text-slate-600">{inst.role}</p>
                    <p className="text-[11px] text-[#0025ff] font-semibold mt-0.5">{inst.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="bg-[#0025ff]/5 p-6 sm:p-8 rounded-2xl border border-[#0025ff]/20">
            <h3 className="text-xl font-display font-bold text-[#010e52] mb-4">
              Graduate Outcomes & Benefits
            </h3>
            <ul className="space-y-3">
              {program.outcomes.map((out, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <Award className="w-5 h-5 text-[#0025ff] shrink-0 mt-0.5" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right 4 cols: Sticky Enrollment Box */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-[#010e52] text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/10 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffcc00] block">
              Admissions Open
            </span>
            <h3 className="text-2xl font-display font-black text-white">
              Ready to claim your seat?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Scholarships cover 100% of tuition for dedicated candidates who pass the screening assessment.
            </p>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-200">
              <div className="flex justify-between">
                <span>Tuition</span>
                <span className="font-bold text-[#ffcc00]">{program.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration</span>
                <span>{program.duration}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>{program.format}</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => setModalOpen(true)}
            >
              Apply for Scholarship
            </Button>

            <p className="text-[11px] text-center text-slate-400">
              ⚡️ Next cohort applications close soon. Limited seats.
            </p>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`Apply for ${program.title}`}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Babatunde Okafor"
              className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 focus:border-[#ffcc00] focus:ring-1 focus:ring-[#ffcc00] outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="babatunde@example.com"
                className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 focus:border-[#ffcc00] focus:ring-1 focus:ring-[#ffcc00] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+234 802 000 0000"
                className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 focus:border-[#ffcc00] focus:ring-1 focus:ring-[#ffcc00] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
              Current Status *
            </label>
            <select
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 focus:border-[#ffcc00] focus:ring-1 focus:ring-[#ffcc00] outline-none"
            >
              <option value="Undergraduate">University Undergraduate</option>
              <option value="Graduate">Recent Graduate</option>
              <option value="Employed">Currently Employed (Looking to Pivot)</option>
              <option value="SelfTaught">Self-Taught / Freelancer</option>
              <option value="HighSchool">High School Student (Teens)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
              Why do you want to join this cohort? *
            </label>
            <textarea
              required
              rows={3}
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              placeholder="Tell us about what problem you want to solve..."
              className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 focus:border-[#ffcc00] focus:ring-1 focus:ring-[#ffcc00] outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
              GitHub or Portfolio URL (Optional)
            </label>
            <input
              type="url"
              value={formData.portfolioUrl}
              onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
              placeholder="https://github.com/username"
              className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 focus:border-[#ffcc00] focus:ring-1 focus:ring-[#ffcc00] outline-none"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={submitting}
              className="w-full justify-center"
            >
              {submitting ? 'Submitting Application...' : 'Submit Application'}
            </Button>
          </div>

          {submitSuccess && (
            <p className="text-xs text-[#ffcc00] text-center font-bold">
              ✓ Application submitted successfully! Redirecting...
            </p>
          )}
        </form>
      </Modal>
    </div>
  );
};
