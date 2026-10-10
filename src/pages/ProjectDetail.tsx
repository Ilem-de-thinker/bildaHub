import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, MapPin, User, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Button } from '../components/Button';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug) || projectsData[0];

  return (
    <div className="w-full bg-white text-[#010e52]">
      {/* Header Banner */}
      <section className="bg-[#010e52] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#ffcc00] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all projects
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#ffcc00] text-[#010e52] text-xs font-black uppercase tracking-wider rounded-md">
              {project.category}
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#ffcc00]" /> {project.builder.location}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-slate-200 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="primary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                View Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="secondary"
                size="md"
                icon={<Github className="w-4 h-4" />}
              >
                Inspect GitHub Code
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main 8 cols */}
        <div className="lg:col-span-8 space-y-12">
          {/* Executive Summary */}
          <div>
            <h2 className="text-2xl font-display font-bold text-[#010e52] mb-4">
              Project Summary
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem & Solution Deep Dive */}
          <div className="space-y-6">
            <div className="bg-red-50/50 p-6 sm:p-8 rounded-2xl border border-red-100">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-2">
                The Ground Reality (Problem Statement)
              </span>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-emerald-50/50 p-6 sm:p-8 rounded-2xl border border-emerald-100">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                Engineered Solution
              </span>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture / Tech Stack */}
          <div>
            <h3 className="text-xl font-display font-bold text-[#010e52] mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#0025ff]" /> Technical Architecture & Dependencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-[#010e52] text-white text-xs font-semibold rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics & Impact */}
          {project.metrics && (
            <div className="bg-[#0025ff]/5 p-6 rounded-2xl border border-[#0025ff]/20">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0025ff] block mb-1">
                Verified Field Impact
              </span>
              <span className="text-xl font-display font-bold text-[#010e52]">
                {project.metrics}
              </span>
            </div>
          )}
        </div>

        {/* Sidebar 4 cols: Builder Profile */}
        <div className="lg:col-span-4">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#010e52] text-[#ffcc00] font-black text-xl flex items-center justify-center">
                {project.builder.avatarInitials}
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-[#010e52]">
                  {project.builder.name}
                </h3>
                <p className="text-xs text-slate-600">{project.builder.role}</p>
                <p className="text-[11px] text-[#0025ff] font-semibold mt-0.5">
                  {project.builder.location}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
              Built as part of the BILDAHUB intensive capstone program with peer code review and mentor validation.
            </p>

            <div className="pt-2">
              <Link
                to="/community#join-form"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-[#010e52] text-white text-xs font-bold rounded-lg hover:bg-[#0025ff] transition-colors"
              >
                Build Like This at BILDAHUB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
