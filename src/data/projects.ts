import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'proj-farmpulse',
    slug: 'farmpulse-africa',
    title: 'FarmPulse Africa',
    tagline: 'IoT soil moisture telemetry and USSD weather advisory for smallholder cassava farmers.',
    category: 'Hardware',
    builder: {
      name: 'Ibrahim Danjuma', // PLACEHOLDER
      role: 'Cohort 3 Fellow · Embedded Systems',
      location: 'Kano, Nigeria',
      avatarInitials: 'ID'
    },
    summary: 'A solar-powered IoT probe transmitting live moisture and nitrogen telemetry via cellular 2G networks to a web dashboard with SMS fallback in Hausa and Yoruba.',
    problem: 'Smallholder farmers in Northern Nigeria lose up to 40% of their harvest due to erratic rainfall and over-irrigation, while lacking internet access to modern meteorological forecasts.',
    solution: 'Engineered a low-cost $14 hardware probe built with ESP32 and solar harvesting that queries micro-weather patterns and pushes automated SMS instructions in native languages.',
    techStack: ['C++ / ESP32', 'LoRaWAN', 'Python', 'FastAPI', 'Tailwind CSS', 'Twilio SMS'],
    metrics: '1,200+ Farmers Deployed · 28% Yield Increase', // PLACEHOLDER
    githubUrl: 'https://github.com/bildahub/farmpulse-africa', // PLACEHOLDER
    liveUrl: 'https://farmpulse.africa', // PLACEHOLDER
    featured: true
  },
  {
    id: 'proj-medichain',
    slug: 'medichain-counterfeit-tracker',
    title: 'MediCheck Naija',
    tagline: 'Cryptographic scratch-card verification safeguarding against fake pharmaceuticals.',
    category: 'Mobile',
    builder: {
      name: 'Amaka Chibuzor', // PLACEHOLDER
      role: 'Cohort 2 Fellow · Mobile Engineer',
      location: 'Enugu, Nigeria',
      avatarInitials: 'AC'
    },
    summary: 'A lightweight mobile and USSD utility enabling shoppers in open markets to verify drug authenticity via zero-cost dial codes or camera scans.',
    problem: 'Counterfeit prescription medicines account for over 15% of circulating drugs in West Africa, causing preventable fatalities among vulnerable families.',
    solution: 'Built an encrypted hash verification pipeline with NAFDAC batch matching, allowing rapid verification within 1.2 seconds even on edge 2G networks.',
    techStack: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL', 'Redis', 'Africa\'s Talking API'],
    metrics: '85,000+ Drug Packs Verified · 450+ Counterfeits Blocked', // PLACEHOLDER
    githubUrl: 'https://github.com/bildahub/medicheck-naija', // PLACEHOLDER
    liveUrl: 'https://medicheck.bildahub.org', // PLACEHOLDER
    featured: true
  },
  {
    id: 'proj-afrivoice',
    slug: 'afrivoice-pidgin-ai',
    title: 'AfriVoice Pidgin AI',
    tagline: 'Open-weights acoustic speech recognition tailored for Nigerian Pidgin and accented English.',
    category: 'AI',
    builder: {
      name: 'Damilola Shonubi', // PLACEHOLDER
      role: 'Cohort 4 Fellow · Applied AI Lead',
      location: 'Lagos, Nigeria',
      avatarInitials: 'DS'
    },
    summary: 'Crowdsourced 300+ hours of localized speech datasets across 12 Nigerian states to train high-accuracy STT models for banking chatbots and healthcare voice assistants.',
    problem: 'Commercial voice models from global tech giants suffer 65%+ error rates on Nigerian accented English and West African Pidgin English.',
    solution: 'Fine-tuned Whisper and open transformer models using clean labeled community speech, lowering the word error rate (WER) to under 11%.',
    techStack: ['PyTorch', 'Hugging Face', 'FastAPI', 'React', 'Docker'],
    metrics: '91.4% Recognition Accuracy · 12 Banking Pilots', // PLACEHOLDER
    githubUrl: 'https://github.com/bildahub/afrivoice-pidgin-ai', // PLACEHOLDER
    liveUrl: 'https://afrivoice.ai', // PLACEHOLDER
    featured: true
  },
  {
    id: 'proj-solarkiosk',
    slug: 'solargrid-monitor',
    title: 'KioskGrid Pay',
    tagline: 'Pay-as-you-go solar battery swapping and remote telemetry for street vendors.',
    category: 'Hardware',
    builder: {
      name: 'Farouk Usman', // PLACEHOLDER
      role: 'Cohort 3 Fellow · CleanTech Engineer',
      location: 'Kaduna, Nigeria',
      avatarInitials: 'FU'
    },
    summary: 'Modular lithium battery packs fitted with cellular telemetry enabling market stall owners to replace loud, hazardous petrol generators with clean solar rent-to-own power.',
    problem: 'Street vendors in Lagos and Kaduna spend over 45% of daily profits fueling micro petrol generators, inhaling toxic carbon monoxide in dense markets.',
    solution: 'Engineered a smart swap station with automated NFC badge checkouts and real-time battery cell health diagnostic sensors.',
    techStack: ['Embedded C', 'STM32', 'MQTT', 'Go (Golang)', 'Next.js'],
    metrics: '320+ Market Vendors Powered · 42 Tons CO2 Averted', // PLACEHOLDER
    githubUrl: 'https://github.com/bildahub/kioskgrid-pay', // PLACEHOLDER
    liveUrl: 'https://kioskgrid.africa', // PLACEHOLDER
    featured: false
  },
  {
    id: 'proj-openbooks',
    slug: 'openbooks-offline-lms',
    title: 'OpenSoma Offline LMS',
    tagline: 'Compressed digital textbook and video curriculum library running on Raspberry Pi local mesh.',
    category: 'Social Impact',
    builder: {
      name: 'Zainab Aliyu', // PLACEHOLDER
      role: 'Cohort 1 Fellow · EdTech Advocate',
      location: 'Ibadan, Nigeria',
      avatarInitials: 'ZA'
    },
    summary: 'A portable battery-backed micro server that broadcasts a high-speed local Wi-Fi hotspot in rural schools, hosting 10,000+ STEM books and interactive video tutorials without internet.',
    problem: 'Over 60% of rural Nigerian public schools have zero broadband connectivity, leaving students detached from modern curriculum standards.',
    solution: 'Repurposed low-cost single-board computers into zero-data local educational intranet nodes with automated quiz grading.',
    techStack: ['Raspberry Pi OS', 'Nginx', 'Vue.js', 'SQLite', 'IndexedDB'],
    metrics: '42 Rural Schools Installed · 14,000+ Students Reached', // PLACEHOLDER
    githubUrl: 'https://github.com/bildahub/opensoma-lms', // PLACEHOLDER
    liveUrl: 'https://opensoma.bildahub.org', // PLACEHOLDER
    featured: false
  },
  {
    id: 'proj-crowdfreight',
    slug: 'crowdfreight-danfo-delivery',
    title: 'DanfoRelay Express',
    tagline: 'Hyperlocal package dispatch coordinating spare capacity on public transit routes.',
    category: 'Web',
    builder: {
      name: 'Victor Obasi', // PLACEHOLDER
      role: 'Cohort 2 Fellow · Full-Stack Builder',
      location: 'Lagos, Nigeria',
      avatarInitials: 'VO'
    },
    summary: 'A dispatch routing engine turning scheduled commercial buses and transit conductors into verified package relay couriers across Lagos island and mainland.',
    problem: 'Last-mile courier delivery across Lagos takes 2–3 days and costs up to ₦5,000 per package due to gridlock and high dispatched rider fuel expenses.',
    solution: 'Optimized transit hub drop-off points using smart route matching, slashing delivery time to 4 hours and lowering merchant dispatch costs by 60%.',
    techStack: ['TypeScript', 'React', 'Express', 'PostgreSQL', 'Mapbox GL'],
    metrics: '₦12M+ Courier Earnings Distributed · 3.5hr Average Delivery', // PLACEHOLDER
    githubUrl: 'https://github.com/bildahub/danforelay-express', // PLACEHOLDER
    liveUrl: 'https://danforelay.ng', // PLACEHOLDER
    featured: false
  },
  {
    id: 'proj-ajodigital',
    slug: 'ajodigital-cooperative',
    title: 'AjoSafe Digital Trust',
    tagline: 'Automated rotational thrift cooperative with fraud-proof multi-sig escrow.',
    category: 'Web',
    builder: {
      name: 'Ngozi Eze', // PLACEHOLDER
      role: 'Cohort 4 Fellow · Fintech Specialist',
      location: 'Abuja, Nigeria',
      avatarInitials: 'NE'
    },
    summary: 'Modernizing traditional African informal savings clubs ("Esusu" / "Ajo") through transparent algorithmic payout rotation and identity verification.',
    problem: 'Traditional thrift organizers occasionally abscond with pooled funds, causing severe financial trauma to micro-market traders.',
    solution: 'Automated smart bank disbursement schedules with dual-approval signatures and SMS contribution notifications.',
    techStack: ['React', 'Node.js', 'Paystack API', 'Tailwind CSS', 'PostgreSQL'],
    metrics: '₦45M+ Rotational Savings Processed · 0 Default Rate', // PLACEHOLDER
    githubUrl: 'https://github.com/bildahub/ajosafe-trust', // PLACEHOLDER
    liveUrl: 'https://ajosafe.ng', // PLACEHOLDER
    featured: false
  },
  {
    id: 'proj-civicwatch',
    slug: 'civicwatch-pothole-mapper',
    title: 'RoadWatch Naija',
    tagline: 'Crowdsourced municipal infrastructure audit logging road potholes and grid bottlenecks.',
    category: 'Social Impact',
    builder: {
      name: 'Kolawole Sanusi', // PLACEHOLDER
      role: 'Cohort 3 Fellow · Civic Tech Builder',
      location: 'Abeokuta, Nigeria',
      avatarInitials: 'KS'
    },
    summary: 'Smartphone accelerometer vibration detection that automatically catalogs dangerous road potholes during commute trips and publishes open GIS maps for works ministries.',
    problem: 'Public infrastructure maintenance in Nigeria suffers from sluggish complaint reporting and lack of geocoded road degradation records.',
    solution: 'Created an automated sensor logger that registers road surface anomalies, aggregating visual heatmap reports sent to local state ministry engineers.',
    techStack: ['React Native', 'GeoJSON', 'Leaflet', 'FastAPI', 'PostGIS'],
    metrics: '4,500km Roads Mapped · 120 Urgent Repairs Triggered', // PLACEHOLDER
    githubUrl: 'https://github.com/bildahub/roadwatch-naija', // PLACEHOLDER
    liveUrl: 'https://roadwatch.bildahub.org', // PLACEHOLDER
    featured: false
  },
  {
    id: 'proj-bloodconnect',
    slug: 'lifeline-donor-match',
    title: 'LifeLine BloodMatch',
    tagline: 'Instant emergency donor notification network connecting Lagos emergency rooms with rare blood types.',
    category: 'Mobile',
    builder: {
      name: 'Chidiebere Umeh', // PLACEHOLDER
      role: 'Cohort 2 Fellow · Mobile Engineer',
      location: 'Port Harcourt, Nigeria',
      avatarInitials: 'CU'
    },
    summary: 'A geo-fenced emergency dispatch alert waking up verified volunteer blood donors within a 5km radius of hospitals experiencing critical shortages.',
    problem: 'Emergency maternal and surgical patients in Nigeria frequently suffer fatal delays while relatives scramble across social media to source blood units.',
    solution: 'A verified database of pre-screened donors that triggers high-priority automated calls and WhatsApp push pings during red-alert requests.',
    techStack: ['React Native', 'Node.js', 'Redis', 'Twilio Voice API', 'MongoDB'],
    metrics: '1,800+ Verified Donors · 340+ Lives Saved in ERs', // PLACEHOLDER
    githubUrl: 'https://github.com/bildahub/lifeline-bloodmatch', // PLACEHOLDER
    liveUrl: 'https://lifelineblood.africa', // PLACEHOLDER
    featured: false
  }
];
