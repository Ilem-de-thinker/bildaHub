import { Program } from '../types';

export const programsData: Program[] = [
  {
    id: 'web-dev-flagship',
    slug: 'web-development',
    title: 'Full-Stack Web Development',
    tagline: 'From foundational HTML & React to production cloud deployments.',
    category: 'Tech',
    level: 'Beginner',
    duration: '12 Weeks',
    format: 'Hybrid (Lagos Hub)',
    price: 'Free (Scholarship Supported)', // PLACEHOLDER
    badge: 'Most Popular',
    overview: 'An intensive, hands-on immersive bootcamp where you master modern JavaScript, React, Node.js, databases, and deployment. You build 4 production apps solving African infrastructure and fintech challenges.',
    whoIsItFor: [
      'Complete beginners with grit and hunger to learn',
      'University students and graduates seeking employment-ready skills',
      'Self-taught coders looking for structured engineering discipline'
    ],
    tools: ['HTML5/CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Git & GitHub'],
    curriculum: [
      {
        week: 'Weeks 1-3',
        title: 'Core Foundations & Modern JavaScript',
        description: 'Semantic HTML, CSS Flexbox/Grid, responsive design, and deep dive into JavaScript async patterns and DOM manipulation.',
        topics: ['Semantic markup & accessibility', 'Modern CSS layout engines', 'JS closures, promises, async/await', 'Git workflow & branch hygiene']
      },
      {
        week: 'Weeks 4-6',
        title: 'Component Architecture with React & TypeScript',
        description: 'Building dynamic, resilient user interfaces with React hooks, state management, and type safety.',
        topics: ['React lifecycle & hooks', 'TypeScript for component props & state', 'Client-side routing', 'REST API consumption & error handling']
      },
      {
        week: 'Weeks 7-9',
        title: 'Backend Systems, Databases & Authentication',
        description: 'Designing RESTful APIs with Node.js, Express, relational databases, JWT auth, and secure sessions.',
        topics: ['Node & Express server architecture', 'PostgreSQL schema modeling & migrations', 'Secure auth & password hashing', 'API rate limiting & validation']
      },
      {
        week: 'Weeks 10-12',
        title: 'Capstone Project, Testing & Cloud Deployment',
        description: 'Team capstone build, CI/CD automated deployment, performance profiling, and demo day pitching.',
        topics: ['End-to-end testing basics', 'Docker containerization & cloud hosting', 'Performance optimization', 'Pitching to partner hiring managers']
      }
    ],
    projectsBuilt: [
      {
        title: 'NaijaPay QR POS',
        description: 'A low-latency merchant point-of-sale web application generating instant offline-resilient payment QR codes.'
      },
      {
        title: 'AgriMarket Direct',
        description: 'Peer-to-peer commodity logistics connecting rural farmers in Oyo State with Lagos wholesale buyers.'
      }
    ],
    instructors: [
      {
        name: 'Tunde Adeleke', // PLACEHOLDER
        role: 'Lead Engineering Mentor',
        company: 'Ex-Paystack Engineer' // PLACEHOLDER
      },
      {
        name: 'Chioma Okonkwo', // PLACEHOLDER
        role: 'Frontend Instructor',
        company: 'Frontend Lead at Kuda' // PLACEHOLDER
      }
    ],
    outcomes: [
      'Graduate with 4 verified production repos on your GitHub',
      'Direct intro to BILDAHUB partner hiring network across Africa & remote',
      'Lifetime access to BILDAHUB alumni masterclasses and tech hubs'
    ],
    faqs: [
      {
        question: 'Do I need a high-end laptop to participate?',
        answer: 'Any laptop with at least 8GB RAM running Windows, Linux, or macOS will work. If you lack electricity or hardware, our Lagos physical hub provides power, workspace, and workstations for admitted students.'
      },
      {
        question: 'Is this program completely free?',
        answer: 'Yes! Selected cohort fellows receive full scholarship coverage funded by our partner network. In return, we expect 100% commitment and attendance.'
      }
    ]
  },
  {
    id: 'mobile-app-dev',
    slug: 'mobile-app-development',
    title: 'Mobile App Development (React Native & Flutter)',
    tagline: 'Ship native iOS & Android applications tailored for low-bandwidth African networks.',
    category: 'Tech',
    level: 'Intermediate',
    duration: '10 Weeks',
    format: 'Hybrid (Lagos Hub)',
    price: 'Free (Scholarship Supported)', // PLACEHOLDER
    badge: 'High Demand',
    overview: 'Learn cross-platform mobile engineering. Focus on offline-first state synchronization, push notifications, and device hardware integration designed for emerging markets.',
    whoIsItFor: [
      'Coders with foundational JavaScript or Dart experience',
      'Web developers seeking transition into mobile ecosystems',
      'Builders creating smartphone apps for everyday African consumers'
    ],
    tools: ['React Native', 'Flutter & Dart', 'Expo', 'SQLite', 'Firebase', 'Redux Toolkit', 'App Store Connect', 'Google Play Console'],
    curriculum: [
      {
        week: 'Weeks 1-3',
        title: 'Mobile UI Systems & Navigation',
        description: 'Building smooth mobile navigation stacks, gestures, bottom sheets, and native style primitives.',
        topics: ['Component layout & flexbox on mobile', 'React Navigation / Flutter Navigator', 'Handling device safe areas & notches', 'State management']
      },
      {
        week: 'Weeks 4-6',
        title: 'Offline-First Architectures & Local Storage',
        description: 'Handling unstable network connectivity, local database caching with SQLite, and background task sync.',
        topics: ['Offline queuing patterns', 'SQLite & WatermelonDB integration', 'Background fetch & battery considerations', 'REST & GraphQL sync']
      },
      {
        week: 'Weeks 7-10',
        title: 'Hardware APIs, Push Notifications & App Stores',
        description: 'Camera, GPS geolocation, biometric authentication (FaceID / Fingerprint), and publishing to Google Play.',
        topics: ['Camera & barcode scanning', 'Push notification pipelines', 'App bundling & signing', 'Play Store deployment guidelines']
      }
    ],
    projectsBuilt: [
      {
        title: 'TransitTrack Lagos',
        description: 'Crowdsourced BRT and danfo commuter wait-time estimator operating with offline SMS fallback.'
      },
      {
        title: 'MedRemind Africa',
        description: 'Multi-lingual voice and push medication compliance tracker for chronic patient care.'
      }
    ],
    instructors: [
      {
        name: 'Emeka Nwosu', // PLACEHOLDER
        role: 'Staff Mobile Engineer',
        company: 'Lead Mobile Architect at Moniepoint' // PLACEHOLDER
      }
    ],
    outcomes: [
      'Publish at least one verified app on Google Play',
      'Deep mastery of offline-first mobile design patterns',
      'Portfolio ready for mobile engineering roles'
    ],
    faqs: [
      {
        question: 'Do I need a Mac to develop iOS apps in this cohort?',
        answer: 'No. We use cloud build runners and Expo EAS build pipelines so you can build and test cross-platform apps on Linux or Windows.'
      }
    ]
  },
  {
    id: 'product-design-uiux',
    slug: 'product-design',
    title: 'Product Design (UI/UX & Systems)',
    tagline: 'Craft human-centered digital experiences solving real African user friction.',
    category: 'Design',
    level: 'Beginner',
    duration: '8 Weeks',
    format: 'Online',
    price: 'Free (Scholarship Supported)', // PLACEHOLDER
    badge: 'Design Track',
    overview: 'Step beyond pretty screens. Learn user research in low-literacy contexts, user flows, design systems in Figma, rapid prototyping, and usability testing with real users.',
    whoIsItFor: [
      'Visual artists, graphic designers, and creative thinkers',
      'Tech enthusiasts eager to shape product feel without deep coding',
      'Entrepreneurs wanting to design prototypes before engineering'
    ],
    tools: ['Figma', 'FigJam', 'Design Systems', 'Notion', 'Maze Testing', 'Whimsical', 'Design Tokens'],
    curriculum: [
      {
        week: 'Weeks 1-2',
        title: 'User Research & Problem Framing in Africa',
        description: 'Qualitative user interviews, empathy maps, journey mapping, and designing for varying digital literacy.',
        topics: ['Contextual inquiry & interview protocols', 'Personas & user mental models', 'Problem statements & "How Might We"', 'Accessibility & contrast']
      },
      {
        week: 'Weeks 3-5',
        title: 'Information Architecture & Wireframing',
        description: 'Structuring intuitive product flows, low-fidelity wireframes, and interaction patterns.',
        topics: ['Site maps & navigation trees', 'Wireframing techniques in Figma', 'Rapid paper prototyping', 'Card sorting & usability benchmarks']
      },
      {
        week: 'Weeks 6-8',
        title: 'Design Systems, High-Fidelity & Developer Handoff',
        description: 'Building scalable Figma component libraries, auto-layout, interactive prototypes, and developer specs.',
        topics: ['Figma variables & tokens', 'Interactive component states', 'Usability testing sessions', 'Handoff documentation & design specs']
      }
    ],
    projectsBuilt: [
      {
        title: 'SaveCircle App Design',
        description: 'Modernized digital "Ajo / Esusu" rotational savings app design tailored for informal traders.'
      },
      {
        title: 'CleanGrid Dashboard',
        description: 'Solar mini-grid monitoring interface for off-grid communities in Northern Nigeria.'
      }
    ],
    instructors: [
      {
        name: 'Amina Bello', // PLACEHOLDER
        role: 'Senior Product Designer',
        company: 'Design Systems Lead at PiggyVest' // PLACEHOLDER
      }
    ],
    outcomes: [
      'Case study portfolio showcasing 2 deep problem-solving products',
      'Mastery of Figma design system architecture and variables',
      'Portfolio review by top product designers across Africa'
    ],
    faqs: [
      {
        question: 'Do I need drawing skills?',
        answer: 'Not at all. Product design is about empathy, logic, usability, and systems thinking.'
      }
    ]
  },
  {
    id: 'data-and-ai',
    slug: 'data-and-ai',
    title: 'Data Science & Applied AI',
    tagline: 'Harness machine learning, Python, and LLMs to extract insights from raw data.',
    category: 'Tech',
    level: 'Intermediate',
    duration: '10 Weeks',
    format: 'Hybrid (Lagos Hub)',
    price: 'Free (Scholarship Supported)', // PLACEHOLDER
    badge: 'Emerging Tech',
    overview: 'Learn Python, pandas, data cleaning, statistical modeling, machine learning, and how to build generative AI solutions grounded in African language datasets and realities.',
    whoIsItFor: [
      'Students with mathematics or programming background',
      'Software engineers transitioning into AI/ML engineering',
      'Analysts wanting to automate insights and predictive modeling'
    ],
    tools: ['Python', 'Pandas & NumPy', 'Scikit-Learn', 'SQL', 'Hugging Face', 'FastAPI', 'Gemini API', 'Jupyter'],
    curriculum: [
      {
        week: 'Weeks 1-3',
        title: 'Python for Data Analysis & Exploratory Analytics',
        description: 'Cleaning messy local datasets, data wrangling, and interactive visual reporting.',
        topics: ['NumPy array operations', 'Pandas DataFrame manipulation', 'Handling missing data in African census reports', 'Seaborn & Matplotlib']
      },
      {
        week: 'Weeks 4-7',
        title: 'Machine Learning Algorithms & Pipelines',
        description: 'Supervised and unsupervised learning, classification models, regression, and model validation.',
        topics: ['Scikit-Learn pipelines', 'Classification metrics (Precision, Recall, ROC)', 'Feature engineering', 'Deploying models as lightweight APIs']
      },
      {
        week: 'Weeks 8-10',
        title: 'Applied Generative AI & Fine-Tuning',
        description: 'Building RAG (Retrieval Augmented Generation) pipelines and integrating LLM APIs into practical tools.',
        topics: ['Prompt engineering for African contexts', 'Vector databases & embeddings', 'Local language speech-to-text datasets', 'AI ethics & bias mitigation']
      }
    ],
    projectsBuilt: [
      {
        title: 'AfriCrop Disease Detector',
        description: 'Computer vision model identifying cassava and yam leaf blight from smartphone photos.'
      },
      {
        title: 'PidginTranslate Assistant',
        description: 'Nigerian Pidgin customer support semantic query router using contextual embeddings.'
      }
    ],
    instructors: [
      {
        name: 'Dr. Kelechi Okafor', // PLACEHOLDER
        role: 'AI Research Scientist',
        company: 'AI Africa Labs' // PLACEHOLDER
      }
    ],
    outcomes: [
      'Build and deploy machine learning models accessible via public APIs',
      'Confidence working with real-world African messy datasets',
      'End-to-end applied AI portfolio piece'
    ],
    faqs: [
      {
        question: 'Is prior math knowledge necessary?',
        answer: 'High school algebra and basic probability are sufficient. We teach the intuitions behind linear algebra and statistics step-by-step.'
      }
    ]
  },
  {
    id: 'cybersecurity-foundations',
    slug: 'cybersecurity-foundations',
    title: 'Cybersecurity Foundations & Defense',
    tagline: 'Protect systems, secure fintech infrastructure, and master ethical defense.',
    category: 'Tech',
    level: 'Beginner',
    duration: '8 Weeks',
    format: 'Online',
    price: 'Free (Scholarship Supported)', // PLACEHOLDER
    overview: 'Learn defensive cybersecurity, network penetration fundamentals, cloud security hygiene, and incident response tailored to Africa’s soaring digital payments sector.',
    whoIsItFor: [
      'IT support staff and network administrators',
      'Developers wishing to build secure software by design',
      'Anyone curious about ethical hacking and infosec careers'
    ],
    tools: ['Linux CLI', 'Wireshark', 'Nmap', 'Burp Suite', 'OWASP ZAP', 'Splunk', 'Bash Scripting'],
    curriculum: [
      {
        week: 'Weeks 1-2',
        title: 'Linux Systems & Network Architecture',
        description: 'Mastering bash, permissions, OSI model, packet routing, and firewall configurations.',
        topics: ['Linux command line administration', 'TCP/IP and packet sniffing with Wireshark', 'Port scanning and reconnaissance', 'SSH and public key security']
      },
      {
        week: 'Weeks 3-5',
        title: 'Web Application Security & OWASP Top 10',
        description: 'Identifying SQL injection, XSS, CSRF, insecure direct object references, and API vulnerabilities.',
        topics: ['OWASP Top 10 breakdown', 'Burp Suite proxy configuration', 'Authentication flaw detection', 'Remediation and secure code review']
      },
      {
        week: 'Weeks 6-8',
        title: 'Incident Response, SIEM & Defense Strategies',
        description: 'Log analysis, threat detection, blue teaming simulations, and industry compliance standards.',
        topics: ['SIEM monitoring basics', 'Simulated incident response drills', 'NDPR & GDPR privacy fundamentals', 'Preparing for CompTIA Security+']
      }
    ],
    projectsBuilt: [
      {
        title: 'SME Vulnerability Scanner',
        description: 'Automated light audit tool checking small business domains for SSL, DNS, and header leaks.'
      }
    ],
    instructors: [
      {
        name: 'Oluwaseun Balogun', // PLACEHOLDER
        role: 'Information Security Lead',
        company: 'Stanbic IBTC Infosec' // PLACEHOLDER
      }
    ],
    outcomes: [
      'Security mindset applied to all technical engineering work',
      'Preparedness for introductory security certifications',
      'Vulnerability audit portfolio report'
    ],
    faqs: [
      {
        question: 'Is ethical hacking legal to practice in this course?',
        answer: 'Yes! All exercises take place strictly within isolated lab environments and authorized sandboxes.'
      }
    ]
  },
  {
    id: 'digital-marketing-growth',
    slug: 'digital-marketing',
    title: 'Growth Marketing & Content Strategy',
    tagline: 'Drive measurable customer acquisition, brand storytelling, and viral reach.',
    category: 'Business',
    level: 'Beginner',
    duration: '6 Weeks',
    format: 'Online',
    price: 'Free (Scholarship Supported)', // PLACEHOLDER
    overview: 'Learn how modern African startups scale: performance marketing, SEO, TikTok/social video storytelling, analytics tracking, and automated email nurturing funnels.',
    whoIsItFor: [
      'Content creators looking to monetize and professionalize',
      'Small business founders wanting to grow online revenue',
      'Aspiring digital marketers and growth associates'
    ],
    tools: ['Meta Ads Manager', 'Google Analytics 4', 'Mailchimp/Brevo', 'Canva & CapCut', 'Ahrefs/SEMrush', 'Notion'],
    curriculum: [
      {
        week: 'Weeks 1-2',
        title: 'Brand Positioning & Organic Audience Building',
        description: 'Crafting compelling value propositions and organic reach on X, LinkedIn, and TikTok.',
        topics: ['African cultural resonance in copy', 'Content calendar workflows', 'Short-form video creation', 'SEO keyword fundamentals']
      },
      {
        week: 'Weeks 3-4',
        title: 'Paid Acquisition & Campaign Optimization',
        description: 'Setting up high-ROI Meta and Google ads campaigns with proper pixel tracking.',
        topics: ['Ad creative testing frameworks', 'Audience segmentation & lookalikes', 'Conversion rate optimization (CRO)', 'Budget allocation on Naira/USD']
      },
      {
        week: 'Weeks 5-6',
        title: 'Email Automation & Retention Funnels',
        description: 'Automated drip sequences, subscriber segmentation, and customer lifetime value.',
        topics: ['Welcome sequences that convert', 'Retention loops and referral tactics', 'Full analytics reporting dashboards', 'Client pitch decks']
      }
    ],
    projectsBuilt: [
      {
        title: 'Zero-Budget Startup Launch Plan',
        description: 'Comprehensive acquisition playbook generating 1,000 real email signups for an African app.'
      }
    ],
    instructors: [
      {
        name: 'Folake Adeyemi', // PLACEHOLDER
        role: 'Head of Growth',
        company: 'African Tech Media' // PLACEHOLDER
      }
    ],
    outcomes: [
      'Live execution of a growth campaign with real metrics',
      'Agency-ready portfolio and client pitch deck',
      'Certification in Google Analytics and Meta Ads basics'
    ],
    faqs: [
      {
        question: 'Do I get a budget to test ads?',
        answer: 'Cohorts receive shared sandbox test ad credits to experiment with real campaigns.'
      }
    ]
  },
  {
    id: 'entrepreneurship-startups',
    slug: 'entrepreneurship-startups',
    title: 'Tech Entrepreneurship & Startup Launchpad',
    tagline: 'Validate your problem, build an MVP, and pitch to angel investors.',
    category: 'Business',
    level: 'Advanced',
    duration: '10 Weeks',
    format: 'Hybrid (Lagos Hub)',
    price: 'Free (Scholarship Supported)', // PLACEHOLDER
    badge: 'Venture Track',
    overview: 'Transform your technical project into an investable, revenue-generating company. Learn customer discovery, unit economics, regulatory compliance in Nigeria, and fundraising mechanics.',
    whoIsItFor: [
      'Founders with a working MVP or strong prototype',
      'Engineers wanting to commercialize their side projects',
      'Operators looking to build venture-backed African solutions'
    ],
    tools: ['Lean Canvas', 'Pitch Decks', 'Cap Table Modeling', 'CAC/LTV Spreadsheets', 'CAC Registration', 'Stripe Atlas'],
    curriculum: [
      {
        week: 'Weeks 1-3',
        title: 'Customer Discovery & Problem Validation',
        description: 'Interviewing paying customers, testing willingness to pay, and pivoting rapidly.',
        topics: ['The Mom Test framework', 'B2B vs B2C monetization in Africa', 'TAM/SAM/SOM market sizing', 'Lean experimentation']
      },
      {
        week: 'Weeks 4-6',
        title: 'Unit Economics & Financial Projections',
        description: 'Pricing models, gross margins, currency inflation hedging, and cash flow runways.',
        topics: ['SaaS & transaction fee mechanics', 'Financial model construction', 'CAC, LTV, churn metrics', 'Banking & compliance in Nigeria']
      },
      {
        week: 'Weeks 7-10',
        title: 'Fundraising, Term Sheets & Demo Day',
        description: 'Crafting pitch decks, approaching angel investors, understanding SAFEs, and pitching.',
        topics: ['Angel vs VC expectations', 'SAFE notes and convertible debt', 'Storytelling that commands attention', 'Demo Day live pitches']
      }
    ],
    projectsBuilt: [
      {
        title: 'Complete Investor Data Room',
        description: 'Pitch deck, financial model, cap table, and customer validation interviews ready for checks.'
      }
    ],
    instructors: [
      {
        name: 'Babatunde Fashina', // PLACEHOLDER
        role: 'Venture Partner & Founder',
        company: 'Savannah Seed Fund' // PLACEHOLDER
      }
    ],
    outcomes: [
      'Pitch directly to accredited angels and VC scouts on Demo Day',
      'Legal guidance for business incorporation and compliance',
      'Up to $5,000 equity-free pilot grant pool for top cohort teams'
    ],
    faqs: [
      {
        question: 'Do I have to give up equity to join?',
        answer: 'Zero equity! BILDAHUB is mission-driven and takes 0% equity from cohort startups.'
      }
    ]
  },
  {
    id: 'tech-for-teens',
    slug: 'tech-for-teens',
    title: 'Tech for Teens (Ages 13–18)',
    tagline: 'Ignite computational curiosity early through game building, web, and robotics.',
    category: 'Tech',
    level: 'Beginner',
    duration: '6 Weeks (Weekend / Holiday)',
    format: 'Hybrid (Lagos Hub)',
    price: 'Free (Scholarship Supported)', // PLACEHOLDER
    badge: 'Youth Special',
    overview: 'A high-energy, supportive weekend program introducing high school students to coding logic, creative game design, and building web pages that solve neighbourhood issues.',
    whoIsItFor: [
      'High school students passionate about technology and problem-solving',
      'Young tinkerers who love games and want to learn how they work',
      'Parents seeking structured, empowering tech education for their teens'
    ],
    tools: ['Scratch 3.0', 'HTML & CSS', 'JavaScript Basics', 'Micro:bit Simulators', 'Canva'],
    curriculum: [
      {
        week: 'Weeks 1-2',
        title: 'Creative Logic & 2D Game Development',
        description: 'Variables, loops, conditionals, collision detection, and interactive game mechanics.',
        topics: ['Computational thinking concepts', 'Character animation and physics', 'Designing retro arcade games', 'Storyboarding']
      },
      {
        week: 'Weeks 3-4',
        title: 'Building Your Very First Web Page',
        description: 'Learning HTML tags, CSS styling, adding videos and audio, and hosting online.',
        topics: ['HTML elements and formatting', 'Colors, fonts, and responsiveness', 'Publishing with GitHub Pages', 'Internet safety principles']
      },
      {
        week: 'Weeks 5-6',
        title: 'Mini Hackathon & Teen Showcase',
        description: 'Working in small teams to build an environmental or community project and presenting to parents.',
        topics: ['Team collaboration and brainstorm', 'Building the teen showcase project', 'Presentation confidence', 'Graduation certificates']
      }
    ],
    projectsBuilt: [
      {
        title: 'LitterPatrol Game',
        description: 'A cheerful arcade game rewarding players for recycling plastic waste across Lagos beaches.'
      }
    ],
    instructors: [
      {
        name: 'Blessing Udoh', // PLACEHOLDER
        role: 'STEM Education Coordinator',
        company: 'BILDAHUB Youth Lead' // PLACEHOLDER
      }
    ],
    outcomes: [
      'Foundational computational mindset before university',
      'Certificate of STEM Achievement',
      'Confidence to code independent personal projects'
    ],
    faqs: [
      {
        question: 'Do parents need to attend sessions?',
        answer: 'Parents are welcome on orientation day and the final graduation demo day showcase!'
      }
    ]
  }
];
