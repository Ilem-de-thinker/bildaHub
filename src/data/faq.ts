export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'programs' | 'community' | 'partners';
}

export const generalFaqData: FAQItem[] = [
  {
    category: 'general',
    question: 'What exactly is BILDAHUB?',
    answer: 'BILDAHUB is a pan-African tech community and learning hub headquartered in Nigeria. We empower young people with real technical skills, peer mentorship, physical workspace access, and career launchpads to build practical, technology-driven solutions to African challenges.'
  },
  {
    category: 'programs',
    question: 'How much do BILDAHUB training programs cost?',
    answer: 'Our flagship tracks are fully covered by corporate partner scholarships, making them free for selected fellows. We evaluate applicants based on demonstrated passion, logic, hunger to learn, and commitment rather than financial capability.'
  },
  {
    category: 'programs',
    question: 'Can I participate if I don’t live in Lagos?',
    answer: 'Yes! Several of our tracks are 100% online with virtual workshops, mentorship pods, and peer coding rooms. For our hybrid cohorts, we also operate regional partner chapters in Abuja, Port Harcourt, Ibadan, Calabar, and Kano.'
  },
  {
    category: 'programs',
    question: 'What hardware/laptop requirements do I need?',
    answer: 'A functional laptop with at least 8GB of RAM and an internet connection. For admitted students in our physical hubs, we provide 24/7 solar electricity, high-speed Starlink broadband, and lab workstations.'
  },
  {
    category: 'community',
    question: 'How do I join the BILDAHUB community without enrolling in a bootcamp?',
    answer: 'You can join as an "Explorer" member immediately for free! This gives you access to our active WhatsApp, Discord, and Telegram groups, open weekend workshops, monthly pitch nights, and our open-source project directory.'
  },
  {
    category: 'partners',
    question: 'How can companies hire talent from BILDAHUB?',
    answer: 'Companies can partner with us to access vetted junior and mid-level software engineers, mobile developers, product designers, and data analysts. We host private hiring showcases and offer direct referrals with zero recruiter placement markups.'
  },
  {
    category: 'partners',
    question: 'Can organizations sponsor a cohort or fund hardware kits?',
    answer: 'Absolutely. Philanthropic foundations and tech companies sponsor student cohorts, provide cloud credits, and fund physical IoT/hardware prototyping kits through our Partnership Office.'
  },
  {
    category: 'general',
    question: 'Do you offer certificates upon graduation?',
    answer: 'Yes. Every fellow who completes their capstone project and passes peer code review receives a verifiable BILDAHUB Certificate of Engineering Excellence backed by on-chain verification and a public portfolio page.'
  }
];
