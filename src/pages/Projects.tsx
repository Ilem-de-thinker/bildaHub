import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  ExternalLink,
  Github,
  Trophy,
  PlusCircle,
  ArrowUpRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { api } from '../lib/api';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  const categories = ['All', 'Web', 'Mobile', 'AI', 'Hardware', 'Social Impact'];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  // Project submission form state
  const [submitForm, setSubmitForm] = useState({
    title: '',
    tagline: '',
    category: 'Web',
    builderName: '',
    email: '',
    liveUrl: '',
    githubUrl: '',
    description: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await api.submitProject(submitForm);
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitModalOpen(false);
      setSubmitted(false);
    }, 1500);
  };

  const hackathonWinners = [
    {
      edition: 'Africa Builds 2026',
      team: 'Team FarmPulse',
      prize: '₦2,500,000 Grand Prize', // PLACEHOLDER
      project: 'IoT Soil & Weather Telemetry for Rural Cassava Farmers'
    },
    {
      edition: 'CleanTech Challenge 2026',
      team: 'KioskGrid Labs',
      prize: '₦1,500,000 Clean Energy Award', // PLACEHOLDER
      project: 'Pay-as-you-go Lithium Battery Swaps for Street Food Vendors'
    },
    {
      edition: 'HealthTech Sprint 2025',
      team: 'MediCheck Naija',
      prize: '₦1,000,000 Impact Grant', // PLACEHOLDER
      project: 'SMS Anti-Counterfeit Pharmaceutical Verification Engine'
    }
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
            Alumni & Student Showcase
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight">
            Built by <span className="text-[#ffcc00]">BILDAHUB</span> members.
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
            From smart hardware probes deployed in northern farmlands to acoustic AI models fluent in Nigerian Pidgin. Explore what our youth are shipping.
          </p>

          {/* Action trigger */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button
              variant="primary"
              size="md"
              onClick={() => setSubmitModalOpen(true)}
              icon={<PlusCircle className="w-4 h-4" />}
            >
              Submit Your Project
            </Button>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 bg-[#04146a]/80 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#ffcc00] text-[#010e52] shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid (9 cards) */}
      <section className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                data-cursor="view"
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Visual Header / Mockup Banner */}
                <div className="h-48 bg-gradient-to-br from-[#010e52] via-[#04146a] to-[#0025ff] p-6 flex flex-col justify-between relative overflow-hidden text-white">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 text-xs font-bold bg-[#ffcc00] text-[#010e52] rounded-full">
                      {proj.category}
                    </span>
                    <span className="text-xs text-slate-300">{proj.builder.location}</span>
                  </div>

                  <div className="z-10">
                    <h3 className="text-2xl font-display font-black text-white group-hover:text-[#ffcc00] transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,#ffcc00_0%,transparent_60%)]" />
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[#0025ff] font-semibold mb-1">
                      {proj.tagline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {proj.summary}
                    </p>

                    {/* Tech tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium bg-white border border-slate-200 text-slate-700 px-2.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer with Builder info & CTAs */}
                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Builder</span>
                      <span className="text-xs font-bold text-[#010e52]">
                        {proj.builder.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveModalProject(proj)}
                        className="px-3 py-1.5 text-xs font-bold bg-white text-[#010e52] border border-slate-300 rounded-lg hover:border-[#0025ff] hover:text-[#0025ff] transition-colors"
                      >
                        Quick View
                      </button>
                      <Link
                        to={`/projects/${proj.slug}`}
                        className="p-2 bg-[#010e52] text-white rounded-lg hover:bg-[#0025ff] transition-colors"
                        aria-label={`View full case study for ${proj.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons & Challenges Section (Past Winners) */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Competitions & Sprints"
            title="Hackathon Hall of Fame"
            highlightWord="Fame"
            subtext="Recognizing breakthrough student solutions backed by industry grant awards."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {hackathonWinners.map((win, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/15 flex flex-col justify-between glow-yellow-hover"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#ffcc00]/20 text-[#ffcc00] flex items-center justify-center mb-4">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8ea4ff]">
                    {win.edition}
                  </span>
                  <h4 className="text-xl font-display font-bold text-white mt-1">
                    {win.team}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {win.project}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-xs font-extrabold text-[#ffcc00]">
                    {win.prize}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {activeModalProject && (
        <Modal
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
          title={activeModalProject.title}
          maxWidth="xl"
        >
          <div className="space-y-5 text-sm">
            <div>
              <span className="px-2.5 py-1 text-xs font-bold bg-[#ffcc00] text-[#010e52] rounded-full inline-block mb-2">
                {activeModalProject.category}
              </span>
              <p className="text-xs text-slate-300 font-semibold">{activeModalProject.tagline}</p>
            </div>

            <div className="bg-[#000830] p-4 rounded-xl border border-white/10 space-y-3">
              <div>
                <span className="text-xs font-bold uppercase text-[#ffcc00] block mb-1">
                  The Problem
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeModalProject.problem}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-[#8ea4ff] block mb-1">
                  The Solution
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeModalProject.solution}
                </p>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase text-slate-300 block mb-2">
                Technology Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-white/10 text-white text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 block">Lead Builder</span>
                <span className="font-bold text-white">{activeModalProject.builder.name}</span>
                <span className="text-xs text-slate-400 block">{activeModalProject.builder.role}</span>
              </div>

              <Link
                to={`/projects/${activeModalProject.slug}`}
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 bg-[#ffcc00] text-[#010e52] text-xs font-bold rounded-lg hover:bg-[#e6b800] transition-colors"
              >
                Full Case Study →
              </Link>
            </div>
          </div>
        </Modal>
      )}

      {/* Submit Project Modal */}
      <Modal
        isOpen={submitModalOpen}
        onClose={() => setSubmitModalOpen(false)}
        title="Submit Your Project to BILDAHUB"
      >
        <form onSubmit={handleProjectSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
              Project Title *
            </label>
            <input
              type="text"
              required
              value={submitForm.title}
              onChange={(e) => setSubmitForm({ ...submitForm, title: e.target.value })}
              placeholder="e.g. SolarGrid Remote Telemetry"
              className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Category *
              </label>
              <select
                value={submitForm.category}
                onChange={(e) => setSubmitForm({ ...submitForm, category: e.target.value })}
                className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
              >
                <option value="Web">Web Application</option>
                <option value="Mobile">Mobile Application</option>
                <option value="AI">Data & AI</option>
                <option value="Hardware">Hardware / IoT</option>
                <option value="Social Impact">Social Impact</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Builder Name *
              </label>
              <input
                type="text"
                required
                value={submitForm.builderName}
                onChange={(e) => setSubmitForm({ ...submitForm, builderName: e.target.value })}
                placeholder="Your Name"
                className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                GitHub Repo URL *
              </label>
              <input
                type="url"
                required
                value={submitForm.githubUrl}
                onChange={(e) => setSubmitForm({ ...submitForm, githubUrl: e.target.value })}
                placeholder="https://github.com/..."
                className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Live Demo / APK URL (Optional)
              </label>
              <input
                type="url"
                value={submitForm.liveUrl}
                onChange={(e) => setSubmitForm({ ...submitForm, liveUrl: e.target.value })}
                placeholder="https://..."
                className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
              Brief Description & What Problem It Solves *
            </label>
            <textarea
              required
              rows={3}
              value={submitForm.description}
              onChange={(e) => setSubmitForm({ ...submitForm, description: e.target.value })}
              placeholder="Tell us what inspired this project and the tech stack you used..."
              className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none resize-none"
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
              {submitting ? 'Submitting...' : 'Submit for Review'}
            </Button>
          </div>

          {submitted && (
            <p className="text-xs text-[#ffcc00] text-center font-bold">
              ✓ Project received! Our curation team will review and publish it.
            </p>
          )}
        </form>
      </Modal>
    </div>
  );
};
