import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Rohan Joshi',
  role: 'Help Desk Analyst',
  tagline: 'First responder for every tech issue',
  photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  email: 'rohan@helpdesk.pro',
  phone: '+91 97650 24680',
  location: 'Pune, India',
  languages: ['English', 'Hindi', 'Marathi'],
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Email', href: 'mailto:rohan@helpdesk.pro' },
  ],
  about: [
    'I am a help desk analyst who answers the call when systems fail. I triage, diagnose and resolve issues across phones, apps and hardware — calmly and quickly.',
    'The help desk is the front line of trust. I combine technical know-how with clear communication so every user leaves confident, not confused.',
  ],
  services: [
    { title: 'Incident Resolution', desc: 'Fast, accurate diagnosis and fixing of hardware, software and network issues on first contact.', icon: '🛠️' },
    { title: 'Remote Support', desc: 'Secure remote sessions that get users back to work without waiting for a desk visit.', icon: '💻' },
    { title: 'Password & Access', desc: 'Self-service resets, SSO fixes and access requests completed right — and securely verified.', icon: '🔐' },
    { title: 'Hardware Deployment', desc: 'Imaging, setup and onboarding of laptops and peripherals ready for day one.', icon: '🖥️' },
    { title: 'Knowledge Base', desc: 'Plain-language guides and articles that let users help themselves before they raise a ticket.', icon: '📖' },
    { title: 'Escalation & Follow-up', desc: 'Clear, tracked escalation to L2, L3 and vendors when an issue needs more firepower.', icon: '📞' },
  ],
  skills: [
    { name: 'Troubleshooting', level: 96, note: 'First-line fixes' },
    { name: 'Ticketing Systems', level: 95, note: 'ServiceNow, Zendesk' },
    { name: 'Software & Apps', level: 92, note: 'OS, Office, SaaS' },
    { name: 'Hardware Setup', level: 90, note: 'Deploy & maintain' },
    { name: 'Incident Triage', level: 94, note: 'Priority & SLA' },
  ],
  skillsIcons: [
    { name: 'Triage', note: 'Fast & accurate', icon: '⚡' },
    { name: 'Remote Help', note: 'Live support', icon: '🖥️' },
    { name: 'Knowledge Base', note: 'Self-serve guides', icon: '📖' },
    { name: 'Customer Care', note: 'Patient & clear', icon: '💬' },
  ],
  stats: [
    { label: 'Tickets solved', value: 18000, suffix: '+' },
    { label: 'First-contact fix', value: 86, suffix: '%' },
    { label: 'CSAT', value: 95, suffix: '%' },
    { label: 'SLA met', value: 98, suffix: '%' },
  ],
  experience: [
    {
      role: 'Help Desk Analyst',
      company: 'Innova Systems',
      period: '2021 — Present',
      desc: 'Resolve 70+ incidents daily across a finance client, maintaining a 95% CSAT and 98% SLA adherence.',
    },
    {
      role: 'IT Support Analyst',
      company: 'CoreBridge',
      period: '2019 — 2021',
      desc: 'Provided first-line support for 800+ staff, cutting average handling time 25% with better triage.',
    },
    {
      role: 'Service Desk Associate',
      company: 'HelpCare',
      period: '2018 — 2019',
      desc: 'Learned the craft of fast, friendly resolution in a high-volume contact centre.',
    },
  ],
  education: [
    {
      degree: 'BCA — Computer Applications',
      school: 'Fergusson College, Pune',
      period: '2014 — 2017',
      desc: 'Programming, networks and operating systems with a focus on applied, practical support skills.',
    },
    {
      degree: 'Diploma — IT Infrastructure & Support',
      school: 'C-DAC Pune',
      period: '2017 — 2018',
      desc: 'Hands-on training in system administration, help desk tooling and service management.',
    },
  ],
  certificates: [
    'HDAA Certified Help Desk Analyst',
    'Lean Six Sigma White Belt',
    'Microsoft Certified: Azure Fundamentals (AZ-900)',
    'ITIL 4 Foundation',
  ],
  awards: [
    { title: 'Agent of the Month', detail: 'Highest CSAT in the team — awarded four times across service teams.', year: '2022' },
    { title: 'Client Appreciation Award', detail: 'Recognised by the finance client for calm handling of a city-wide network outage.', year: '2023' },
    { title: 'Rising Star', detail: 'Promoted to a senior role after 18 months for technical breadth and peer mentoring.', year: '2021' },
  ],
  cards: [
    {
      title: 'SLA Turnaround',
      desc: 'Re-worked triage priorities that lifted first-contact resolution to 86% and kept SLA at 98%.',
      stack: 'Process · Triage',
      metric: '98% SLA',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop',
    },
    {
      title: 'Service Portal',
      desc: 'Built a guided self-service portal that resolved 30% of common issues without an agent.',
      stack: 'Self-service',
      metric: '-30% calls',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=400&fit=crop',
    },
    {
      title: 'Onboarding Kit',
      desc: 'Created a one-page setup guide for new hires that cut device return time from days to hours.',
      stack: 'Docs',
      metric: 'hours not days',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'Service Portal',
      desc: 'A guided self-service portal that resolved 30% of common requests without an agent joining the call.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      tags: ['Self-service', 'Portal'],
    },
    {
      title: 'Smart Triage Rules',
      desc: 'Impact-based priority rules that routed incidents to the right team, cutting response time for critical issues by 40%.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop',
      tags: ['Process', 'Automation'],
    },
    {
      title: 'Onboarding Automation',
      desc: 'Imaged devices and account flows that took a new hire from signed offer to a working laptop in under a day.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop',
      tags: ['Onboarding', 'Docs'],
    },
  ],
  hobbies: [
    { name: 'Gaming', note: 'Co-op and strategy nights', icon: '🎮' },
    { name: 'Cricket', note: 'Gully team all-rounder', icon: '🏏' },
    { name: 'Podcasts', note: 'Tech and true-crime queues', icon: '🎧' },
    { name: 'Photography', note: 'Street shots around the city', icon: '📷' },
  ],
  testimonials: [
    {
      quote:
        'Rohan answers like the call actually matters to him. Fast, clear, and he follows up until it is truly fixed.',
      author: 'Sneha Kulkarni',
      role: 'OPS Manager, Innova',
    },
    {
      quote:
        'Our users ask for him by name. That says everything about a help desk analyst.',
      author: 'Marcus Webb',
      role: 'IT Director',
    },
  ],
  footnote: '© Rohan Joshi · React, TypeScript & Framer Motion',
  ticker: ['Triage', 'Incident Resolution', 'Troubleshooting', 'Remote Support', 'SLA Adherence', 'Customer Care'],

  blogPosts: [
    { title: 'IT Service Management Best Practices', excerpt: 'Implementing ITIL frameworks for efficient help desk operations.', date: '2024-01-03', tags: ['ITSM', 'ITIL'], readTime: '8 min' },
    { title: 'Automating Help Desk Operations', excerpt: 'Using AI and automation to improve support efficiency and response times.', date: '2023-12-20', tags: ['Automation', 'AI'], readTime: '9 min' },
  ],

  faqItems: [
    { question: 'What IT systems do you support?', answer: 'I support Windows/Mac environments, Office 365, active directory, VPN, and enterprise applications.' },
    { question: 'What is your ticket resolution process?', answer: 'I follow ITIL practices: categorize, prioritize, diagnose, resolve, and close with proper documentation.' },
    { question: 'How do you handle VIP support?', answer: 'I provide priority response for critical issues and maintain SLAs for executive and key user support.' },
    { question: 'What help desk tools do you use?', answer: 'I use ServiceNow, Jira Service Desk, and Freshservice for ticket management and SLA tracking.' },
  ],

  skillsDetailed: [
    { category: 'IT Support', items: [
      { name: 'Windows/Mac Support', level: 95 },
      { name: 'Active Directory', level: 90 },
      { name: 'Office 365', level: 92 },
    ]},
    { category: 'Service Management', items: [
      { name: 'ITIL Framework', level: 88 },
      { name: 'Ticketing Systems', level: 90 },
      { name: 'SLA Management', level: 85 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'helpdesk@company.com', icon: '📧', href: 'mailto:helpdesk@company.com' },
    { type: 'Phone', value: 'IT Help Desk', icon: '📞', href: 'tel:+15550001234' },
  ],
};