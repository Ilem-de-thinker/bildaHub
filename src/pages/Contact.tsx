import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  HelpCircle,
  Twitter,
  Instagram,
  Facebook,
  CheckCircle2
} from 'lucide-react';
import { FluidCanvas } from '../components/FluidCanvas';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { generalFaqData } from '../data/faq';
import { api } from '../lib/api';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Admissions & Cohorts',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await api.submitContact(form);
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: 'Admissions & Cohorts', message: '' });
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-[#010e52] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <FluidCanvas className="z-0 opacity-60" intensity={0.7} />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#ffcc00] text-xs font-bold uppercase tracking-widest border border-white/20 mb-6">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight">
            We'd love to <span className="text-[#ffcc00]">hear from you.</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
            Whether you have questions about cohort admissions, hosting an event, or visiting our Lagos tech campus, reach out below.
          </p>
        </div>
      </section>

      {/* Split Layout Section */}
      <section className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md">
            <h2 className="text-2xl font-display font-bold text-[#010e52] mb-2">
              Send Us a Direct Message
            </h2>
            <p className="text-xs text-slate-600 mb-8">
              We respond to all student and partner inquiries within 24 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Babatunde Fashola"
                  className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="babatunde@example.com"
                  className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Subject *
                </label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-white text-slate-900 text-sm rounded-lg p-3.5 border border-slate-300 focus:border-[#0025ff] outline-none"
                >
                  <option value="Admissions & Cohorts">Admissions & Cohorts</option>
                  <option value="Partnerships & Sponsorships">Partnerships & Sponsorships</option>
                  <option value="Hiring Talent">Hiring BILDAHUB Builders</option>
                  <option value="Mentorship Inquiry">Becoming a Mentor</option>
                  <option value="Event Collaboration">Event Collaboration</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we assist you today?"
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
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold text-center animate-in fade-in">
                  ✓ Your message has been received! Our Lagos office will contact you shortly.
                </div>
              )}
            </form>
          </div>

          {/* Right: Contact Details + Socials + Office Hours + Map Placeholder (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Contact Details Card */}
            <div className="bg-[#010e52] text-white p-8 rounded-3xl border border-white/10 shadow-xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffcc00] block">
                Direct Channels
              </span>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ffcc00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Physical Headquarters</span>
                    <span className="text-slate-300">24 Commercial Avenue, Sabo, Yaba, Lagos, Nigeria</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#ffcc00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Email Dispatch</span>
                    <span className="text-slate-300">hello@bildahub.africa</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#ffcc00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Telephone / Helpdesk</span>
                    <span className="text-slate-300">+234 (0) 802 000 2453</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Instant WhatsApp Support</span>
                    <a
                      href="https://chat.whatsapp.com/bildahub"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#ffcc00] hover:underline"
                    >
                      Chat with Admissions Team →
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-[#ffcc00] font-bold mb-2">
                  <Clock className="w-4 h-4" /> Office & Co-Working Hours
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Monday – Friday:</span>
                    <span className="text-white font-medium">8:00 AM – 8:00 PM WAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday (Hack Jams):</span>
                    <span className="text-white font-medium">9:00 AM – 6:00 PM WAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-slate-400">Closed for Hub Maintenance</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href="https://x.com/bildahub"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/10 text-white rounded-lg hover:bg-[#ffcc00] hover:text-[#010e52] transition-colors"
                  aria-label="BILDAHUB on X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/bildahub"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/10 text-white rounded-lg hover:bg-[#ffcc00] hover:text-[#010e52] transition-colors"
                  aria-label="BILDAHUB on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/share/1C9XpbCSKa/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/10 text-white rounded-lg hover:bg-[#ffcc00] hover:text-[#010e52] transition-colors"
                  aria-label="BILDAHUB on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Embedded Map Visual Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 p-6 flex flex-col justify-between h-48 relative">
              <div className="z-10">
                <span className="text-xs font-bold text-[#0025ff] uppercase block">
                  Campus Navigation
                </span>
                <p className="text-sm font-bold text-[#010e52] mt-1">
                  Yaba Innovation Corridor, Lagos
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  5 minutes walk from Sabo roundabout and Yaba Tech gate.
                </p>
              </div>

              <div className="z-10 flex items-center justify-between text-xs font-semibold text-[#0025ff]">
                <span>Coordinates: 6.5186° N, 3.3792° E</span>
                <span className="text-slate-500">Solar Powered 24/7</span>
              </div>

              {/* Stylized geometric background representing map grid */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0025ff_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Below */}
      <section className="py-20 bg-slate-50 text-[#010e52] px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Quick Answers"
            title="Common Questions Before Visiting"
            highlightWord="Questions"
            subtext="Everything you need to know about dropped-in visits, tours, and hub regulations."
            theme="light"
          />

          <div className="mt-12 space-y-4">
            {generalFaqData.slice(0, 4).map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base text-[#010e52] hover:text-[#0025ff] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-[#0025ff] font-mono shrink-0">
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
