export interface Program {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Tech' | 'Design' | 'Business';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  format: 'Online' | 'Hybrid (Lagos Hub)' | 'Self-paced + Cohort';
  price: string;
  badge?: string;
  overview: string;
  whoIsItFor: string[];
  tools: string[];
  curriculum: {
    week: string;
    title: string;
    description: string;
    topics: string[];
  }[];
  projectsBuilt: {
    title: string;
    description: string;
  }[];
  instructors: {
    name: string;
    role: string;
    company: string; // PLACEHOLDER
  }[];
  outcomes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Web' | 'Mobile' | 'AI' | 'Hardware' | 'Social Impact';
  builder: {
    name: string;
    role: string;
    location: string;
    avatarInitials: string;
  };
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  metrics?: string;
  githubUrl?: string; // PLACEHOLDER
  liveUrl?: string; // PLACEHOLDER
  featured?: boolean;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  type: 'Workshops' | 'Hackathons' | 'Meetups';
  date: string;
  time: string;
  status: 'Upcoming' | 'Past';
  location: string;
  speaker: {
    name: string;
    role: string;
    company: string;
  };
  description: string;
  spotsLeft?: number;
  rsvpLink?: string;
  isFeatured?: boolean;
}

export interface Opportunity {
  id: string;
  title: string;
  company: string; // PLACEHOLDER
  logoPlaceholder: string;
  location: string;
  type: 'Internships' | 'Jobs' | 'Grants & Funding' | 'Freelance Gigs';
  workplace: 'Remote' | 'Hybrid' | 'On-site';
  compensation: string; // PLACEHOLDER
  deadline: string;
  description: string;
  requirements: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  publishedAt: string;
  readTime: string;
  content: string[];
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  location: string;
  socials: {
    x?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  cohort: string;
  quote: string;
  outcome: string;
  location: string;
}
