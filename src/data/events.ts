import { EventItem } from '../types';

export const eventsData: EventItem[] = [
  {
    id: 'evt-africa-build-hackathon',
    slug: 'africa-build-hackathon-2026',
    title: 'Africa Builds 2026: 48-Hour Open Source Hackathon',
    type: 'Hackathons',
    date: 'November 14–16, 2026',
    time: '09:00 AM WAT',
    status: 'Upcoming',
    location: 'BILDAHUB Lagos Tech Campus + Virtual Discord Hub',
    speaker: {
      name: 'Dr. Kelechi Okafor', // PLACEHOLDER
      role: 'Keynote Judge & AI Scientist',
      company: 'AI Africa Labs' // PLACEHOLDER
    },
    description: '48 hours of rapid prototyping, mentorship, and pizza. ₦5,000,000 in equity-free prize pools across Fintech, Climate, and Public Health.',
    spotsLeft: 42,
    rsvpLink: '#register',
    isFeatured: true
  },
  {
    id: 'evt-offline-first-systems',
    slug: 'offline-first-architectures-workshop',
    title: 'Masterclass: Designing Offline-First Distributed Systems for African Realities',
    type: 'Workshops',
    date: 'October 24, 2026',
    time: '04:00 PM WAT',
    status: 'Upcoming',
    location: 'Live Zoom Stream + BILDAHUB YouTube Studio',
    speaker: {
      name: 'Emeka Nwosu', // PLACEHOLDER
      role: 'Principal Mobile Architect',
      company: 'Moniepoint' // PLACEHOLDER
    },
    description: 'Learn how to architect SQLite sync, CRDT conflict resolution, and USSD fallbacks for apps operating over erratic 2G/3G connectivity.',
    spotsLeft: 110,
    rsvpLink: '#register',
    isFeatured: false
  },
  {
    id: 'evt-lagos-builder-meetup-q4',
    slug: 'lagos-builder-meetup-q4',
    title: 'BILDAHUB Lagos Community Mixer & Project Pitch Night',
    type: 'Meetups',
    date: 'November 07, 2026',
    time: '05:30 PM WAT',
    status: 'Upcoming',
    location: 'The Zone Tech Park, Gbagada, Lagos',
    speaker: {
      name: 'Amina Bello', // PLACEHOLDER
      role: 'Product Lead',
      company: 'PiggyVest' // PLACEHOLDER
    },
    description: 'Connect with fellow student builders, design founders, and angel scouts. Features 5 lightning 3-minute project demos and casual networking.',
    spotsLeft: 25,
    rsvpLink: '#register',
    isFeatured: false
  },
  {
    id: 'evt-intro-web3-africa',
    slug: 'fintech-rails-api-mastery',
    type: 'Workshops',
    title: 'Hands-on Workshop: Building Resilient Micro-Payment Rails with Paystack & Flutterwave',
    date: 'December 05, 2026',
    time: '02:00 PM WAT',
    status: 'Upcoming',
    location: 'Virtual Workshop',
    speaker: {
      name: 'Tunde Adeleke', // PLACEHOLDER
      role: 'Fintech Specialist',
      company: 'Ex-Paystack' // PLACEHOLDER
    },
    description: 'Live code review of payment webhooks, idempotency keys, and reconciliation pipelines that never double-debit customer accounts.',
    spotsLeft: 75,
    rsvpLink: '#register',
    isFeatured: false
  },
  {
    id: 'evt-abuja-ai-symposium',
    slug: 'abuja-ai-symposium-past',
    title: 'Abuja AI & Data Innovation Summit',
    type: 'Meetups',
    date: 'August 18, 2026',
    time: '10:00 AM WAT',
    status: 'Past',
    location: 'Baze University Auditorium, Abuja',
    speaker: {
      name: 'Damilola Shonubi', // PLACEHOLDER
      role: 'Applied AI Fellow',
      company: 'BILDAHUB AI Lead' // PLACEHOLDER
    },
    description: 'Over 400 young students gathered to explore indigenous language modeling and satellite climate data.',
    spotsLeft: 0,
    isFeatured: false
  },
  {
    id: 'evt-past-hackathon-solarpower',
    slug: 'clean-energy-hackathon-past',
    title: 'Hack The Sun: CleanTech & Smart Energy Challenge',
    type: 'Hackathons',
    date: 'June 20, 2026',
    time: '08:00 AM WAT',
    status: 'Past',
    location: 'BILDAHUB Yaba Hub, Lagos',
    speaker: {
      name: 'Farouk Usman', // PLACEHOLDER
      role: 'CleanTech Innovator',
      company: 'KioskGrid Pay' // PLACEHOLDER
    },
    description: '24 hardware engineering teams competed to construct solar monitoring firmware on open microcontroller devkits.',
    spotsLeft: 0,
    isFeatured: false
  }
];

export const pastEventPhotos = [
  {
    id: 'past-1',
    title: 'Lagos Demo Day 2026',
    caption: '180 young builders demonstrating capstone products to technology industry investors.',
    badge: 'Demo Day'
  },
  {
    id: 'past-2',
    title: 'Hardware Lab Hack Night',
    caption: 'Tinkering with microcontrollers, soldering stations, and LoRa antenna arrays.',
    badge: 'Hardware Hack'
  },
  {
    id: 'past-3',
    title: 'Teen Coders Graduation',
    caption: 'Celebrating our summer high-school cohort shipping their first 2D web arcade games.',
    badge: 'Youth Track'
  },
  {
    id: 'past-4',
    title: 'UI/UX Design Sprint',
    caption: 'Intensive user mapping on sticky walls solving informal trade financial friction.',
    badge: 'Design Sprint'
  }
];
