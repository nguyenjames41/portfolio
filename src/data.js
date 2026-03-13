export const projects = [
  {
    id: 'enertrade',
    title: 'EnerTrade',
    badge: '1st Place Nationally / $24,000 AUD',
    role: 'Team Lead',
    org: 'UAVS Startup Competition',
    period: 'Feb 2024 – Jun 2025',
    featured: true,
    description: 'A battery recycling app built on circular economy principles. Led the startup from a napkin sketch to the national stage — pitching to industry leaders and walking away with first place and $24,000.',
    challenge: 'Australia recycles less than 10% of its lithium-ion batteries. The infrastructure exists, but the friction between consumers and recycling facilities is enormous — no incentives, no visibility, no trust.',
    stack: ['Startup Strategy', 'App Prototyping', 'Environmental Modelling', 'Pitch Delivery'],
    image: '/images/enerTrade won comp.webp',
    pdfs: [
      { name: 'EnerTrade Pitch Deck', url: '/images/EnerTrade PDF.pdf' },
      { name: 'Case Study', url: '/images/Final Case Study EnerTrade.pdf' },
      { name: 'Business Proposal', url: '/images/Final busines proposal enerTrade.pdf' },
    ],
  },
  {
    id: 'cocuna',
    title: 'Cocuna — AI Maternal Support',
    badge: null,
    role: 'Founder / Product Lead',
    org: 'GEN1500',
    period: 'Sep 2025 – Present',
    featured: false,
    description: 'An AI-powered app supporting mothers through pregnancy and postpartum care — rapidly prototyped using Cursor, Lovable, ChatGPT, and Gemini.',
    challenge: '1 in 5 Australian mothers experience postnatal depression. Access to timely, personalised support during pregnancy and postpartum is fragmented and expensive.',
    stack: ['AI Prototyping', 'Cursor', 'Lovable', 'Value Proposition'],
    image: '/images/cocuna pitching.webp',
    pdfs: [
      { name: 'Cocuna Pitch Deck', url: '/images/Cocuna PDF Gen1500.pdf' },
    ],
  },
  {
    id: 'ironman',
    title: 'Iron Man Mark V Mask',
    badge: null,
    role: 'Solo Project',
    org: null,
    period: '2024',
    featured: false,
    description: 'Designed and built a fully operational Iron Man mask from scratch — hand-drawn sketches to CAD to a working motorised prototype with LED lighting.',
    challenge: 'Replicating the mechanical faceplate mechanism from the film with consumer-grade components — achieving smooth servo-driven movement within tight dimensional constraints.',
    stack: ['SolidWorks', 'Arduino Nano', 'C++', 'Circuit Wiring'],
    image: '/images/iron man mask.webp',
    pdfs: [],
  },
  {
    id: 'easyup',
    title: 'Easy Up — Assistive Device',
    badge: null,
    role: 'Team Member',
    org: 'DESN2000',
    period: 'T3 2025',
    featured: false,
    description: 'A gas-spring powered sit-to-stand device for elderly users that reduces peak joint load by 40–50%.',
    challenge: 'Elderly individuals with mobility limitations face significant risk and discomfort when transitioning from seated to standing. Existing assistive devices are bulky, expensive, or require significant upper-body strength.',
    stack: ['Axiomatic Design', 'Ashby Selection', 'Mechanical Analysis', 'UN SDG 3'],
    image: null,
    pdfs: [
      { name: 'Final Report', url: '/images/Easy up final report.pdf' },
      { name: 'Presentation', url: '/images/DESN2000 Presentation.pptx' },
    ],
  },
  {
    id: 'pilldispenser',
    title: 'Smart Pill Dispenser',
    badge: '1st Place',
    role: 'Team Lead',
    org: 'BIOM1010',
    period: 'Jul 2023',
    featured: false,
    description: 'An Arduino-based pill dispenser tailored for elderly users — custom CAD housing, C++ logic, and a user-centred design approach that earned first place.',
    challenge: 'Medication non-adherence in the elderly leads to hospitalisations and worse health outcomes. Manual pill organisers provide no reminders and are easy to confuse.',
    stack: ['Arduino', 'C++', 'CAD', 'User-Centred Design'],
    image: '/images/Pill dispenser.jpg',
    pdfs: [
      { name: 'Group Report', url: '/images/BIOM1010 Group Report.pdf' },
    ],
  },
  {
    id: 'openbridge',
    title: 'Open-Bridge',
    badge: '1st Place / 30+ teams',
    role: 'Design Lead',
    org: 'DESN1000',
    period: 'Nov 2022',
    featured: false,
    description: 'A fully functional model bridge with pulleys and hydraulic systems that opens for ship clearance. Won 1st among 30+ teams.',
    challenge: 'Design and build a working drawbridge model that supports load while incorporating a reliable opening mechanism — within strict material and budget constraints.',
    stack: ['Structural Design', 'Hydraulics', 'Prototyping'],
    image: null,
    pdfs: [],
  },
]

export const experience = [
  {
    current: true,
    date: '2025 / 10-Week Internship',
    title: 'Research Intern',
    org: 'RadAIology — ML/AI in Radiology',
    desc: 'Working alongside a PhD researcher to explore how machine learning can improve radiology workflows and diagnostic accuracy.',
  },
  {
    current: false,
    date: '2025 – Present',
    title: 'Founder',
    org: 'Cocuna — AI-Enabled Maternal Support App',
    desc: 'Building an AI-powered app that supports mothers through pregnancy and postpartum care. Leading product design, AI prototyping with Cursor and Lovable, and pitch strategy.',
  },
  {
    current: false,
    date: '2022 – Present',
    title: 'Founder & Owner',
    org: 'LQ Tutoring',
    desc: 'Built a tutoring business from zero to 50+ students and 3 tutors across all high school subjects. Grown entirely through word of mouth.',
  },
  {
    current: false,
    date: 'Present',
    title: 'Bartender',
    org: 'Casula Powerhouse Arts Centre — Liverpool Council',
    desc: 'Customer service during events and exhibitions. POS operations, venue presentation, and the kind of work where you actually get to enjoy talking to people.',
  },
]

export const skills = [
  { group: 'Programming', items: ['Python', 'C / C++', 'JavaScript'] },
  { group: 'CAD & Design', items: ['SolidWorks', 'Fusion 360', 'AutoCAD'] },
  { group: 'AI Tools', items: ['Cursor', 'Lovable', 'ChatGPT', 'Claude', 'Gemini', 'Copilot'] },
  { group: 'Cloud & Analytics', items: ['Microsoft Azure', 'Power BI'] },
  { group: 'Hardware & Tools', items: ['Arduino', 'Soldering', 'Git', 'Notion'] },
  { group: 'Languages', items: ['English — Fluent', 'Vietnamese — Fluent'] },
]

export const awards = [
  { icon: '1st', title: 'Winner — UAVS Startup Competition ($24,000 AUD)', sub: 'National / 2024' },
  { icon: '1st', title: '1st Place — Smart Pill Dispenser (BIOM1010)', sub: 'UNSW / 2023' },
  { icon: '1st', title: '1st Place — Open-Bridge Project (DESN1000)', sub: 'UNSW / 30+ teams / 2022' },
  { icon: 'MS', title: 'Enterprise Product Management Fundamentals', sub: 'Microsoft / Coursera / 2025', microsoft: true },
  { icon: 'MS', title: 'Market Research & Competitive Analysis', sub: 'Microsoft / Coursera / 2025', microsoft: true },
  { icon: 'D', title: 'Certificate of Distinction — Australian Mathematics Competition', sub: '2018' },
  { icon: 'WWC', title: 'Working With Children Check', sub: 'WWC2395041V' },
]

export const funFacts = [
  { img: '/images/running.webp', alt: 'Half marathon finish', title: 'Half Marathon Finisher', sub: 'Hoka 26km / 2025' },
  { img: '/images/bellbird.webp', alt: 'Bartending at events', title: 'Bartender Who Loves a Chat', sub: 'Events at Casula Powerhouse' },
  { img: '/images/cookie.webp', alt: 'Cookie the cat', title: 'Cat Dad to Cookie', sub: 'She runs the house' },
  { img: '/images/vietnamese.webp', alt: 'Vietnamese culture', title: 'Fluent in Vietnamese', sub: 'Bilingual since day one' },
]

export const blogPosts = [
  {
    date: 'March 4, 2026',
    title: 'Welcome to My Blog',
    excerpt: 'This is where I\'ll share my journey — the wins, the failures, and everything in between. Building in public, one post at a time.',
  },
  {
    date: 'March 3, 2026',
    title: 'What I Learned at RadAIology',
    excerpt: 'Ten weeks of AI research, medical imaging, and working alongside brilliant people. Here\'s what surprised me the most.',
  },
  {
    date: 'March 2, 2026',
    title: 'Building Cocuna from Scratch',
    excerpt: 'How I went from an idea to a working prototype in weeks using AI tools. The future of rapid product development.',
  },
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]
