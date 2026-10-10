import { Opportunity } from '../types';

export const opportunitiesData: Opportunity[] = [
  {
    id: 'opp-frontend-intern',
    title: 'Junior Frontend Engineering Intern',
    company: 'Paystack Partner Venture', // PLACEHOLDER
    logoPlaceholder: 'PS',
    location: 'Lagos / Remote',
    type: 'Internships',
    workplace: 'Hybrid',
    compensation: '₦250,000 / month + Mentorship Stipend', // PLACEHOLDER
    deadline: 'Rolling Admission',
    description: 'Join an agile engineering pod building merchant customer portal experiences with modern TypeScript and React.',
    requirements: [
      'Graduated or enrolled in BILDAHUB Web Dev Track',
      'Solid understanding of React hooks, CSS Flexbox/Grid, and Git',
      'Hunger to learn and receive code review feedback gracefully'
    ]
  },
  {
    id: 'opp-flutter-dev',
    title: 'Mobile Engineer (Flutter / React Native)',
    company: 'Kuda Technologies Network', // PLACEHOLDER
    logoPlaceholder: 'KD',
    location: 'Lagos, Nigeria',
    type: 'Jobs',
    workplace: 'Hybrid',
    compensation: '₦600,000 - ₦850,000 / month', // PLACEHOLDER
    deadline: 'November 30, 2026',
    description: 'Lead client-facing feature development for rapid mobile micro-credit flows, emphasizing 60fps UI and battery efficiency.',
    requirements: [
      'Demonstrated portfolio of at least 2 shipped apps on Play Store or TestFlight',
      'Experience with SQLite offline storage and push notifications',
      'Familiarity with financial KYC regulatory UX'
    ]
  },
  {
    id: 'opp-grant-climate',
    title: 'Tony Elumelu Foundation / BILDAHUB Climate Tech Seed Grant',
    company: 'Africa Green Innovation Trust', // PLACEHOLDER
    logoPlaceholder: 'AG',
    location: 'Pan-Africa',
    type: 'Grants & Funding',
    workplace: 'Remote',
    compensation: '$5,000 Equity-Free Seed Capital', // PLACEHOLDER
    deadline: 'December 15, 2026',
    description: 'Direct catalytic grant funding for young African innovators building hardware or software addressing solar mini-grids, agriculture, or clean water.',
    requirements: [
      'Founding team must have at least one BILDAHUB alumnus',
      'Functional MVP tested with early users in Nigeria, Ghana, or Kenya',
      'Clear milestones on how $5k accelerates pilot deployment'
    ]
  },
  {
    id: 'opp-freelance-uiux',
    title: 'UI/UX Contract Designer for Logistics App',
    company: 'Kobo360 Fleet Network', // PLACEHOLDER
    logoPlaceholder: 'KB',
    location: 'Remote (WAT timezone)',
    type: 'Freelance Gigs',
    workplace: 'Remote',
    compensation: '₦900,000 Fixed Contract Project', // PLACEHOLDER
    deadline: 'October 30, 2026',
    description: 'Design a streamlined driver dispatch mobile flow and desktop dispatcher operations dashboard in Figma.',
    requirements: [
      'Strong portfolio case studies showcasing high-density operational software',
      'Ability to design in Figma with auto-layout and design token systems',
      'Estimated 4-week turnaround'
    ]
  },
  {
    id: 'opp-ai-intern',
    title: 'Machine Learning Research Intern',
    company: 'African NLP Collaborative', // PLACEHOLDER
    logoPlaceholder: 'AN',
    location: 'Abuja / Remote',
    type: 'Internships',
    workplace: 'Remote',
    compensation: '₦300,000 / month + Cloud GPU Credits', // PLACEHOLDER
    deadline: 'November 20, 2026',
    description: 'Assist in annotating, preprocessing, and benchmarking local Nigerian dialect datasets for speech-to-text models.',
    requirements: [
      'Proficiency in Python, PyTorch or Scikit-Learn',
      'Passion for linguistic preservation and African machine intelligence',
      'BILDAHUB Data & AI Track alumnus preferred'
    ]
  },
  {
    id: 'opp-backend-job',
    title: 'Backend Engineer (Node.js & Go)',
    company: 'Moniepoint Ecosystem Partner', // PLACEHOLDER
    logoPlaceholder: 'MP',
    location: 'Lagos, Nigeria',
    type: 'Jobs',
    workplace: 'On-site',
    compensation: '₦750,000 - ₦1,100,000 / month', // PLACEHOLDER
    deadline: 'December 01, 2026',
    description: 'Build high-throughput transaction endpoints handling over 250 requests per second with rock-solid SQL consistency.',
    requirements: [
      'Deep knowledge of PostgreSQL indices, query optimization, and transaction locks',
      'Familiarity with Redis caching and distributed task queues',
      'Proven background writing unit and integration tests'
    ]
  }
];
