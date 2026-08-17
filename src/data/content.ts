import avatarUrl from '@/assets/avatar.jpg'
import attendxImage from '@/assets/attendx-dashboard.png'
import lululemonImage from '@/assets/lululemon-vog-dashboard.png'
import villaImage from '@/assets/project-1.png'

export type SocialLinks = {
  github: string
  linkedin: string
  email: string
  website: string
}

export type Profile = {
  name: string
  shortName: string
  role: string
  tagline: string
  status: string
  location: string
  email: string
  resumePath: string
  socials: SocialLinks
  avatar: string
}

export type StatItem = {
  value: string
  label: string
}

export type SkillCategory = {
  name: string
  summary: string
  items: string[]
}

export type Project = {
  title: string
  tag: string
  status: string
  summary: string
  tech: string[]
  accessNote?: string
  links: {
    live?: string
    github?: string
  }
  image: string
}

export type WorkExperience = {
  role: string
  org: string
  period: string
  bullets: string[]
}

export type Education = {
  degree: string
  school: string
  period: string
  gpa: string
  focus: string
}

export type Certification = {
  name: string
  issuer: string
  status: string
  note: string
  upcoming?: boolean
}

export type Content = {
  profile: Profile
  techStack: string[]
  stats: StatItem[]
  skills: SkillCategory[]
  projects: Project[]
  workExperience: WorkExperience[]
  education: Education
  certifications: Certification[]
  languages: { name: string; level: string }[]
  contactBlurb: string
  footerNote: string
}

export const content: Content = {
  profile: {
    name: 'Bisanda Jayathilaka',
    shortName: 'BJ',
    role: 'Junior Full-Stack Developer & Data Analyst',
    tagline: 'React + TypeScript builds, wired to real data with PostgreSQL, REST APIs, and Power BI.',
    status: 'Data Analyst Intern — Open to Full-time & Freelance Opportunities',
    location: 'Bangkok, Thailand',
    email: 'bunnybisanda05@gmail.com',
    resumePath: 'cv.pdf',
    socials: {
      github: 'https://github.com/BUNNYBISANDA',
      linkedin: 'https://www.linkedin.com/in/bisanda-jayathilaka-373635311/',
      email: 'mailto:bunnybisanda05@gmail.com',
      website: 'https://bunnybisanda.github.io/Potfolio/',
    },
    avatar: avatarUrl,
  },
  techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Power BI', 'Python', 'Tailwind CSS', 'REST APIs'],
  stats: [
    { value: '3.84', label: 'GPA — BSc Information Technology' },
    { value: '6', label: 'Shipped & in-progress projects' },
    { value: '2', label: 'Live production dashboards' },
    { value: '2x', label: 'Men’s Singles Champion, HU Kwang Games' },
  ],
  skills: [
    {
      name: 'Frontend',
      summary: 'Responsive, accessible React/TypeScript interfaces.',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      name: 'Backend & APIs',
      summary: 'Application logic, REST APIs, and integrations.',
      items: ['Node.js', 'REST APIs', 'Python', 'PHP', 'Backend Logic', 'App Integration'],
    },
    {
      name: 'Databases & Data',
      summary: 'Schema design, validation, and transformation.',
      items: ['SQL', 'PostgreSQL', 'MongoDB', 'DBMS', 'Data Modeling', 'Data Validation'],
    },
    {
      name: 'BI & Reporting',
      summary: 'Raw data into decision-ready dashboards.',
      items: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Dashboarding', 'KPI Logic'],
    },
    {
      name: 'Tools & Practice',
      summary: 'Everyday workflow for shipping reliable systems.',
      items: ['Git', 'Debugging', 'Requirements Analysis', 'System Design', 'Problem Solving'],
    },
  ],
  projects: [
    {
      title: 'AttendX',
      tag: 'Undergraduate thesis',
      status: 'In Development',
      summary: 'Smart attendance platform with dual-layer QR + face recognition, replacing manual roll-call for academic institutions.',
      tech: ['Python', 'dlib', 'MongoDB', 'React'],
      accessNote: 'Independent study thesis, Siam University — not public yet.',
      links: {},
      image: attendxImage,
    },
    {
      title: 'Lululemon VOG Dashboard',
      tag: 'Independent project',
      status: 'Completed',
      summary: 'Python pipeline that scrapes, dedupes, and visualizes low-star product reviews across three regions into a VP-ready dashboard.',
      tech: ['Python', 'Web Scraping', 'Data Cleaning', 'Dashboard'],
      accessNote: 'Built independently on public review data — source not public yet.',
      links: {},
      image: lululemonImage,
    },
    {
      title: 'Villa de Jojo',
      tag: 'Client-style website',
      status: 'Live',
      summary: 'Responsive hospitality website with a clear brand presence and room-browsing flow, deployed publicly.',
      tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      links: {
        live: 'https://bunnybisanda.github.io/Villadejojo/',
        github: 'https://github.com/BUNNYBISANDA/Villadejojo',
      },
      image: villaImage,
    },
  ],
  workExperience: [
    {
      role: 'Data Analyst Intern',
      org: 'Digital Excellence Department',
      period: '2025 — Present',
      bullets: [
        'Build React web apps and Power BI dashboards for operational reporting.',
        'Run SQL/PostgreSQL data workflows behind KPI and reporting views.',
        'Support production-performance and quality-intelligence solutions end to end.',
      ],
    },
    {
      role: 'Freelance Digital Designer',
      org: 'Independent',
      period: '2023 — Present',
      bullets: ['Responsive digital content, presentations, and branding assets for clients.'],
    },
  ],
  education: {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Siam University',
    period: '2023 — Present',
    gpa: '3.84',
    focus: 'Software development, databases, system analysis, and data analytics.',
  },
  certifications: [
    {
      name: 'Power BI Mastery (Advanced)',
      issuer: 'QBITZ, Sri Lanka',
      status: '2024 — 2025',
      note: 'Advanced reporting and DAX used across production dashboards.',
    },
    {
      name: 'Power Apps',
      issuer: 'QBITZ, Sri Lanka',
      status: '2024 — 2025',
      note: 'Low-code development alongside custom React work.',
    },
    {
      name: 'Next certification slot',
      issuer: 'Planned',
      status: 'Ready for future update',
      note: 'Reserved for the next cloud or full-stack certification.',
      upcoming: true,
    },
  ],
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Sinhala', level: 'Native' },
    { name: 'Thai', level: 'Basic' },
  ],
  contactBlurb: 'Open to full-time, internship, and freelance opportunities.',
  footerNote: 'Full-stack development and data-driven dashboards.',
}
