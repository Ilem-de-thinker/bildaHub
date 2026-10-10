import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Eye,
  Layers,
  LayoutGrid
} from 'lucide-react';
import { FluidCanvas } from '../components/FluidCanvas';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { eventsData, pastEventPhotos } from '../data/events';
import { EventItem } from '../types';
import { api } from '../lib/api';

export const Events: React.FC = () => {
  const [filter, setFilter] = useState<string>('Upcoming');
  const [selectedEventForRsvp, setSelectedEventForRsvp] = useState<EventItem | null>(null);
  const [hostModalOpen, setHostModalOpen] = useState(false);
  const [calendarView, setCalendarView] = useState<'cards' | 'calendar'>('cards');
  const [lightboxPhoto, setLightboxPhoto] = useState<any | null>(null);

  // Featured event (Africa Builds 2026)
  const featuredEvent = eventsData.find((e) => e.isFeatured) || eventsData[0];

  // Countdown timer calculations
  const [timeLeft, setTimeLeft] = useState({ days: 36, hours: 14, minutes: 22, seconds: 40 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const filterTabs = ['All', 'Upcoming', 'Past', 'Workshops', 'Hackathons', 'Meetups'];

  const filteredEvents = eventsData.filter((evt) => {
    if (filter === 'All') return true;
    if (filter === 'Upcoming') return evt.status === 'Upcoming';
    if (filter === 'Past') return evt.status === 'Past';
    return evt.type === filter;
  });

  // RSVP Form state
  const [rsvpForm, setRsvpForm] = useState({
    name: '',
    email: '',
    phone: '',
    attendanceType: 'In-person' as 'In-person' | 'Virtual'
  });
  const [rsvpSubmitting, setRsvpSubmitting] = useState(false);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEventForRsvp) return;
    setRsvpSubmitting(true);
    await api.rsvpEvent({
      eventId: selectedEventForRsvp.id,
      ...rsvpForm
    });
    setRsvpSubmitting(false);
    setRsvpSuccess(true);
    setTimeout(() => {
      setSelectedEventForRsvp(null);
      setRsvpSuccess(false);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-[#010e52] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <FluidCanvas className="z-0 opacity-60" intensity={0.7} />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#ffcc00] text-xs font-bold uppercase tracking-widest border border-white/20 mb-6">
            Where Builders Convene
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight">
            Hackathons, Masterclasses & <span className="text-[#ffcc00]">Mixers.</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
            Experience the electricity of in-person collaboration, competitive coding sprints, and direct feedback from African engineering legends.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button
              variant="primary"
              size="md"
              onClick={() => setSelectedEventForRsvp(featuredEvent)}
            >
              RSVP for Africa Builds 2026
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => setHostModalOpen(true)}
            >
              Host an Event with Us
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Event Banner with Live Countdown Timer */}
      <section className="py-12 bg-[#0025ff] text-white px-4 sm:px-6 lg:px-8 border-b border-white/20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="px-3 py-1 text-xs font-black bg-[#ffcc00] text-[#010e52] rounded-full uppercase tracking-wider mb-3 inline-block">
              Marquee Event
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black leading-tight">
              {featuredEvent.title}
            </h2>
            <p className="mt-2 text-sm text-white/90 leading-relaxed">
              {featuredEvent.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/80">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#ffcc00]" /> {featuredEvent.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#ffcc00]" /> {featuredEvent.location}
              </span>
            </div>
          </div>

          {/* Countdown block */}
          <div className="flex flex-col items-center bg-[#010e52] p-6 rounded-2xl border border-white/20 shadow-2xl shrink-0">
            <span className="text-xs uppercase font-bold tracking-widest text-[#ffcc00] mb-3">
              Event Starts In:
            </span>
            <div className="flex items-center gap-3 text-center">
              <div className="bg-white/10 p-3 rounded-xl min-w-[60px]">
                <span className="text-2xl sm:text-3xl font-black font-display text-white block">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] uppercase text-slate-300 font-bold">Days</span>
              </div>
              <span className="text-xl font-bold text-[#ffcc00]">:</span>
              <div className="bg-white/10 p-3 rounded-xl min-w-[60px]">
                <span className="text-2xl sm:text-3xl font-black font-display text-white block">
                  {timeLeft.hours}
                </span>
                <span className="text-[10px] uppercase text-slate-300 font-bold">Hours</span>
              </div>
              <span className="text-xl font-bold text-[#ffcc00]">:</span>
              <div className="bg-white/10 p-3 rounded-xl min-w-[60px]">
                <span className="text-2xl sm:text-3xl font-black font-display text-white block">
                  {timeLeft.minutes}
                </span>
                <span className="text-[10px] uppercase text-slate-300 font-bold">Mins</span>
              </div>
              <span className="text-xl font-bold text-[#ffcc00]">:</span>
              <div className="bg-white/10 p-3 rounded-xl min-w-[60px]">
                <span className="text-2xl sm:text-3xl font-black font-display text-[#ffcc00] block">
                  {timeLeft.seconds}
                </span>
                <span className="text-[10px] uppercase text-slate-300 font-bold">Secs</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="sm"
              className="mt-4 w-full justify-center"
              onClick={() => setSelectedEventForRsvp(featuredEvent)}
            >
              Claim Your Free Pass
            </Button>
          </div>
        </div>
      </section>

      {/* Event Listings & Calendar Toggle */}
      <section className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-200">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    filter === tab
                      ? 'bg-[#0025ff] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* View switcher */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setCalendarView('cards')}
                className={`p-2 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  calendarView === 'cards'
                    ? 'bg-white text-[#010e52] shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <LayoutGrid className="w-4 h-4" /> Grid
              </button>
              <button
                onClick={() => setCalendarView('calendar')}
                className={`p-2 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  calendarView === 'calendar'
                    ? 'bg-white text-[#010e52] shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Calendar className="w-4 h-4" /> Month View
              </button>
            </div>
          </div>

          {/* Cards View */}
          {calendarView === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {filteredEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-xl transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="px-2.5 py-1 font-bold bg-[#0025ff]/10 text-[#0025ff] rounded-md">
                        {evt.type}
                      </span>
                      <span
                        className={`font-semibold ${
                          evt.status === 'Upcoming' ? 'text-emerald-600' : 'text-slate-400'
                        }`}
                      >
                        {evt.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-[#010e52] leading-snug">
                      {evt.title}
                    </h3>

                    <div className="mt-4 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#0025ff] shrink-0" />
                        <span>{evt.date} · {evt.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#0025ff] shrink-0" />
                        <span>{evt.location}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <span className="text-[11px] text-slate-400 block mb-0.5">Keynote / Host:</span>
                      <p className="text-xs font-bold text-[#010e52]">{evt.speaker.name}</p>
                      <p className="text-[11px] text-slate-500">{evt.speaker.role} · {evt.speaker.company}</p>
                    </div>

                    <p className="mt-4 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200">
                    {evt.status === 'Upcoming' ? (
                      <button
                        onClick={() => setSelectedEventForRsvp(evt)}
                        className="w-full py-2.5 px-4 bg-[#010e52] text-white text-xs font-bold rounded-lg hover:bg-[#0025ff] transition-colors"
                      >
                        Register for Event
                      </button>
                    ) : (
                      <span className="w-full inline-block text-center py-2 text-xs font-semibold text-slate-400 bg-slate-200 rounded-lg">
                        Concluded Event
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Month Calendar View */
            <div className="mt-8 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
              <h3 className="text-lg font-bold font-display text-[#010e52] mb-4">
                November / December 2026 Schedule
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {eventsData.map((e) => (
                  <div
                    key={e.id}
                    onClick={() => e.status === 'Upcoming' && setSelectedEventForRsvp(e)}
                    className="p-4 bg-white rounded-xl border border-slate-200 hover:border-[#0025ff] cursor-pointer transition-all shadow-sm"
                  >
                    <span className="text-xs font-bold text-[#0025ff] block">{e.date}</span>
                    <h4 className="text-sm font-bold text-[#010e52] mt-1 line-clamp-2">{e.title}</h4>
                    <span className="text-[11px] text-slate-500 mt-2 block">{e.location}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Past Events Gallery (Masonry style with Lightbox) */}
      <section className="py-24 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Moments in Time"
            title="Past Event Highlights"
            highlightWord="Highlights"
            subtext="Glimpses of energy, late-night code deploys, and community joy from our campus gatherings."
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pastEventPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setLightboxPhoto(photo)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-[#04146a] to-[#0025ff] border border-white/15 p-6 flex flex-col justify-between hover:shadow-2xl transition-all"
              >
                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 text-[11px] font-bold bg-[#ffcc00] text-[#010e52] rounded-full">
                    {photo.badge}
                  </span>
                  <Eye className="w-4 h-4 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="z-10">
                  <h4 className="text-lg font-bold font-display text-white group-hover:text-[#ffcc00] transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <Modal
          isOpen={!!lightboxPhoto}
          onClose={() => setLightboxPhoto(null)}
          title={lightboxPhoto.title}
        >
          <div className="p-4 bg-[#000830] rounded-xl text-center space-y-3">
            <div className="aspect-video bg-gradient-to-r from-[#010e52] to-[#0025ff] rounded-lg flex items-center justify-center text-white font-display font-black text-xl">
              [ BILDAHUB Archive Footage: {lightboxPhoto.title} ]
            </div>
            <p className="text-xs text-slate-300">{lightboxPhoto.caption}</p>
          </div>
        </Modal>
      )}

      {/* Event RSVP Modal */}
      {selectedEventForRsvp && (
        <Modal
          isOpen={!!selectedEventForRsvp}
          onClose={() => setSelectedEventForRsvp(null)}
          title={`RSVP: ${selectedEventForRsvp.title}`}
        >
          <form onSubmit={handleRsvpSubmit} className="space-y-4">
            <div className="text-xs text-slate-300 space-y-1 pb-3 border-b border-white/10">
              <p>📅 {selectedEventForRsvp.date} at {selectedEventForRsvp.time}</p>
              <p>📍 {selectedEventForRsvp.location}</p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={rsvpForm.name}
                onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
                placeholder="e.g. Victor Okafor"
                className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
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
                  value={rsvpForm.email}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, email: e.target.value })}
                  placeholder="victor@example.com"
                  className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={rsvpForm.phone}
                  onChange={(e) => setRsvpForm({ ...rsvpForm, phone: e.target.value })}
                  placeholder="+234 800 000 0000"
                  className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                Attendance Mode *
              </label>
              <select
                value={rsvpForm.attendanceType}
                onChange={(e) => setRsvpForm({ ...rsvpForm, attendanceType: e.target.value as any })}
                className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
              >
                <option value="In-person">In-Person at Physical Venue</option>
                <option value="Virtual">Virtual via Live Stream & Discord</option>
              </select>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={rsvpSubmitting}
                className="w-full justify-center"
              >
                {rsvpSubmitting ? 'Confirming Seat...' : 'Confirm Registration'}
              </Button>
            </div>

            {rsvpSuccess && (
              <p className="text-xs text-[#ffcc00] text-center font-bold">
                ✓ Seat confirmed! Calendar invite dispatched to your email.
              </p>
            )}
          </form>
        </Modal>
      )}

      {/* Host Event Modal */}
      <Modal
        isOpen={hostModalOpen}
        onClose={() => setHostModalOpen(false)}
        title="Host or Co-Organize an Event with BILDAHUB"
      >
        <div className="space-y-4 text-xs text-slate-300">
          <p>
            Do you represent a tech company, developer community, or university student society looking to host a hackathon or technical meetup at our Lagos or regional hubs?
          </p>
          <input
            type="text"
            placeholder="Organization / Community Name"
            className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
          />
          <input
            type="email"
            placeholder="Contact Email"
            className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none"
          />
          <textarea
            rows={3}
            placeholder="Event concept, target attendees, and preferred date..."
            className="w-full bg-[#010e52] text-white text-sm rounded-lg p-3 border border-white/20 outline-none resize-none"
          />
          <Button
            variant="primary"
            size="md"
            className="w-full justify-center"
            onClick={() => {
              alert('Inquiry received! Our events coordinator will contact you.');
              setHostModalOpen(false);
            }}
          >
            Submit Event Proposal
          </Button>
        </div>
      </Modal>
    </div>
  );
};
