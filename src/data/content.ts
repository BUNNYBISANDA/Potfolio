import avatarUrl from '@/assets/avatar.jpg'

export type SocialLinks = {
  github: string
  linkedin: string
  email: string
  website: string
}

export type QuickFact = {
  value: string
  label: string
}

export type Profile = {
  name: string
  shortName: string
  headline: string
  subheadline: string
  status: string
  location: string
  email: string
  resumePath: string
  heroNote: string
  summary: string[]
  focusAreas: string[]
  quickFacts: QuickFact[]
  socials: SocialLinks
  avatar: string
}

export type AboutHighlight = {
  title: string
  body: string
}

export type SkillCategory = {
  name: string
  summary: string
  items: string[]
}

export type Service = {
  title: string
  description: string
}

export type Project = {
  title: string
  tag: string
  status: string
  overview: string
  problem: string
  solution: string
  outcome: string
  tech: string[]
  features: string[]
  caseStudy: string[]
  accessNote?: string
  links: {
    live?: string
    github?: string
  }
  accent: string
}

export type JourneyStep = {
  stage: string
  title: string
  description: string
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
  aboutHighlights: AboutHighlight[]
  skills: SkillCategory[]
  services: Service[]
  projects: Project[]
  journey: JourneyStep[]
  certifications: Certification[]
  contactBlurb: string
  footerNote: string
}

export const content: Content = {
  profile: {
    name: 'Bisanda Jayathilaka',
    shortName: 'BJ',
    headline: 'Web Developer | Backend Developer | Data Analysis Enthusiast',
    subheadline: 'Building modern websites, backend systems, and data-driven solutions.',
    status: 'Open to Internship / Freelance Opportunities',
    location: 'Bangkok, Thailand',
    email: 'bunnybisanda05@gmail.com',
    resumePath: 'cv.pdf',
    heroNote:
      'Focused on practical delivery through clean websites, backend workflows, and dashboards that communicate clearly.',
    summary: [
      'I am an IT student focused on web development, backend systems, and data-driven work. I enjoy building practical websites, admin-style tools, APIs, dashboards, and automation projects that solve a clear problem.',
      'This portfolio is intentionally structured around proof of work. Instead of only listing skills, it shows the problem, solution, stack, and reasoning behind the projects I am building.',
    ],
    focusAreas: [
      'Responsive website development',
      'Backend systems and APIs',
      'Dashboard and data presentation',
      'Python automation practice',
    ],
    quickFacts: [
      { value: '6', label: 'Featured case studies' },
      { value: 'Web + Backend + Data', label: 'Primary focus' },
      { value: 'Internship / Freelance', label: 'Current availability' },
    ],
    socials: {
      github: 'https://github.com/BUNNYBISANDA',
      linkedin: 'https://www.linkedin.com/in/bisanda-jayathilaka-373635311/',
      email: 'mailto:bunnybisanda05@gmail.com',
      website: 'https://bunnybisanda.github.io/Potfolio/',
    },
    avatar: avatarUrl,
  },
  aboutHighlights: [
    {
      title: 'Practical project builder',
      body: 'I prefer work that solves a real problem, whether that means building a marketing website, improving a backend workflow, or making reporting easier to understand.',
    },
    {
      title: 'Backend and data direction',
      body: 'My strongest learning direction is where application logic, data handling, and usability meet: APIs, admin systems, analytics, and cleaner technical delivery.',
    },
    {
      title: 'Recruiter-friendly presentation',
      body: 'The site is designed so a recruiter can understand my role focus, technical stack, and project value in a quick one to two minute scan.',
    },
  ],
  skills: [
    {
      name: 'Frontend',
      summary: 'Clean, responsive user interfaces for landing pages, portfolio sites, and business-focused web experiences.',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    },
    {
      name: 'Backend',
      summary: 'Application logic and database-backed workflows for practical systems and internal tools.',
      items: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
    },
    {
      name: 'Data',
      summary: 'Reporting and presentation skills for turning raw information into cleaner dashboards and useful business insight.',
      items: ['Excel', 'Power BI', 'Dashboarding', 'Data Cleaning'],
    },
    {
      name: 'Tools',
      summary: 'Everyday tools used for version control, development workflow, debugging, and delivery.',
      items: ['Git', 'GitHub', 'VS Code', 'Postman'],
    },
  ],
  services: [
    {
      title: 'Website Development',
      description: 'Responsive websites for portfolios, brands, and business ideas with clean structure and modern presentation.',
    },
    {
      title: 'Backend API Development',
      description: 'Backend-focused application logic, REST-style APIs, and database workflows for practical systems.',
    },
    {
      title: 'Dashboard & Data Analysis',
      description: 'Clear dashboards and reporting views using cleaned data, useful KPIs, and readable visual structure.',
    },
    {
      title: 'UI/UX Improvements',
      description: 'Layout cleanup, stronger hierarchy, and interface refinements that make products easier to scan and use.',
    },
  ],
  projects: [
    {
      title: 'Housing Management System',
      tag: 'Full-stack system concept',
      status: 'Case Study',
      overview:
        'Admin-focused housing platform for rooms, occupants, payments, and maintenance requests.',
      problem:
        'Housing operations often live across spreadsheets and chat messages, which makes billing, room status, and issue follow-up hard to manage consistently.',
      solution:
        'I designed the system around the real admin workflow: one place to track room inventory, resident records, payment status, and service requests.',
      outcome:
        'This project shows how I think about CRUD architecture, business rules, and practical internal tooling rather than only surface-level UI.',
      tech: ['Node.js', 'Express', 'MySQL', 'REST API', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Resident and room records with clear status filters',
        'Payment logging with due-date tracking',
        'Maintenance request flow for follow-up and accountability',
      ],
      caseStudy: [
        'Started by mapping the core entities first: rooms, residents, payments, and maintenance tasks.',
        'Structured the screens around admin actions instead of decorative pages.',
        'Planned the workflow so it can later move into hosted databases, backups, and access control.',
      ],
      accessNote:
        'The public code and demo are not attached yet, so the portfolio keeps the case study visible without overstating availability.',
      links: {},
      accent: 'linear-gradient(135deg, rgba(37, 99, 235, 0.34), rgba(14, 165, 233, 0.12))',
    },
    {
      title: 'Face Recognition Attendance System',
      tag: 'Python automation',
      status: 'GitHub',
      overview:
        'Python attendance workflow with face recognition, SQLite storage, and analytics exports for reporting.',
      problem:
        'Manual attendance is slow and inconsistent when sessions need both identity confirmation and reliable reporting output.',
      solution:
        'I built a Python CLI application that registers students, captures face data, records attendance into SQLite, and exports clean datasets for Power BI.',
      outcome:
        'The project demonstrates automation, data handling, fallback engineering decisions, and a direct connection between backend logic and usable analytics.',
      tech: ['Python', 'OpenCV', 'face_recognition', 'SQLite', 'CLI', 'Power BI'],
      features: [
        'Student registration and face capture flow',
        'SQLite-backed attendance records with duplicate protection',
        'Export-ready analytics files for reporting dashboards',
      ],
      caseStudy: [
        'Used a local database as the source of truth so attendance stays consistent and queryable.',
        'Added a fallback recognition path so the project can still run when the preferred package is unavailable.',
        'Designed exports intentionally so reporting does not require manual cleanup before analysis.',
      ],
      accessNote:
        'Live hosting is not attached because the workflow depends on a local camera and desktop Python environment.',
      links: {
        github: 'https://github.com/BUNNYBISANDA/Attendance-Tracking-App',
      },
      accent: 'linear-gradient(135deg, rgba(8, 145, 178, 0.34), rgba(14, 116, 144, 0.12))',
    },
    {
      title: 'Villa de Jojo Website',
      tag: 'Client-style website',
      status: 'Live',
      overview:
        'Responsive hospitality website that gives a villa property a clearer brand presence and room discovery flow.',
      problem:
        'Smaller hospitality brands need a trustworthy website that helps visitors understand the property quickly and move toward booking decisions.',
      solution:
        'I built a multi-page marketing site with clearer content hierarchy, room browsing pages, and a layout that works well across devices.',
      outcome:
        'The site shows that I can ship polished frontend work, respond to business-style needs, and deploy a static project publicly.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'GitHub Pages'],
      features: [
        'Multi-page room browsing and property information',
        'Responsive layout tuned for mobile visitors',
        'Public deployment through GitHub Pages',
      ],
      caseStudy: [
        'Improved the browsing flow so visitors reach room details faster.',
        'Used straightforward front-end tooling to keep deployment easy and maintenance light.',
        'Treated the work like a client delivery rather than a one-screen classroom demo.',
      ],
      links: {
        live: 'https://bunnybisanda.github.io/Villadejojo/',
        github: 'https://github.com/BUNNYBISANDA/Villadejojo',
      },
      accent: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94), rgba(6, 95, 70, 0.24))',
    },
    {
      title: 'Barista Sri Lanka Website Redesign',
      tag: 'UI/UX case study',
      status: 'Redesign Concept',
      overview:
        'A cleaner, premium redesign direction for a coffee brand web presence with stronger structure and visual credibility.',
      problem:
        'Brand websites lose trust when the experience feels dated, cluttered, or inconsistent across mobile and desktop layouts.',
      solution:
        'I rethought the structure around story, product atmosphere, and stronger calls to action so the site feels more premium and easier to navigate.',
      outcome:
        'This case study highlights UI/UX judgment, responsive layout planning, and the ability to improve business presentation through design.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive UI', 'Content hierarchy'],
      features: [
        'Premium visual direction with cleaner section flow',
        'Mobile-first CTA placement and layout decisions',
        'Reusable styling approach for future scale-up',
      ],
      caseStudy: [
        'Focused first on information hierarchy: what a visitor should notice in the first minute.',
        'Used spacing, typography, and contrast to make the brand feel more serious and modern.',
        'Planned the redesign so it could later be turned into a lightweight static deployment.',
      ],
      accessNote:
        'This portfolio card represents a redesign case study. Public source and live links are not attached yet.',
      links: {},
      accent: 'linear-gradient(135deg, rgba(120, 53, 15, 0.26), rgba(15, 23, 42, 0.9))',
    },
    {
      title: 'Brand & Data Dashboard',
      tag: 'Dashboard case study',
      status: 'Data Project',
      overview:
        'A dashboard-focused project for organizing brand or business metrics into cleaner reporting views and decision-friendly visuals.',
      problem:
        'Performance data often sits in spreadsheets without a clear structure, which makes it harder to read trends, compare periods, or communicate results quickly.',
      solution:
        'I approached the project by cleaning the data, structuring the metrics, and designing a dashboard that surfaces key numbers in a clearer and more usable format.',
      outcome:
        'The project demonstrates data cleaning, KPI thinking, and the ability to turn raw data into something a stakeholder can understand fast.',
      tech: ['Power BI', 'Excel', 'Dashboarding', 'Data Cleaning'],
      features: [
        'Clean KPI layout for faster reporting',
        'Visual comparisons that make trends easier to understand',
        'Structured data preparation before dashboard design',
      ],
      caseStudy: [
        'Started from the reporting questions first so the dashboard focused on decisions instead of decoration.',
        'Cleaned and structured the data before building visuals to keep the dashboard readable and reliable.',
        'Used a minimal layout so the important numbers stay visible at a glance.',
      ],
      accessNote:
        'This project is currently presented as a case study because the source files and final dashboard are not linked publicly.',
      links: {},
      accent: 'linear-gradient(135deg, rgba(22, 78, 99, 0.34), rgba(15, 23, 42, 0.92))',
    },
    {
      title: 'Python Automation Practice',
      tag: 'Python workflow practice',
      status: 'Ongoing',
      overview:
        'A growing set of small Python-based automation exercises focused on saving time and improving repetitive workflows.',
      problem:
        'Manual tasks become slow and error-prone when repetitive steps have to be done by hand across files, data, or simple reporting workflows.',
      solution:
        'I use Python practice projects to automate small tasks, clean data, and reinforce problem-solving habits that are useful for backend and data-focused work.',
      outcome:
        'This project area shows consistent practice, scripting confidence, and a practical approach to automation rather than learning only through theory.',
      tech: ['Python', 'CLI', 'Automation', 'File Handling', 'Data Processing'],
      features: [
        'Small scripts for repetitive workflow tasks',
        'Practice with data cleanup and file handling',
        'A simple way to strengthen Python problem-solving through practical use cases',
      ],
      caseStudy: [
        'Keep the scope small so each script solves one real task clearly.',
        'Use the practice to improve logic, input handling, and confidence with Python-based tooling.',
        'Treat each exercise as a step toward stronger backend and automation habits.',
      ],
      accessNote:
        'This is an active practice stream rather than one finished application, so the value is in the consistency and problem-solving approach.',
      links: {},
      accent: 'linear-gradient(135deg, rgba(8, 47, 73, 0.36), rgba(15, 23, 42, 0.92))',
    },
  ],
  journey: [
    {
      stage: 'Step 01',
      title: 'Python fundamentals',
      description:
        'Built confidence with core programming concepts, problem solving, and scripting through Python-based practice and small utilities.',
    },
    {
      stage: 'Step 02',
      title: 'Web development foundations',
      description:
        'Built confidence with HTML, CSS, JavaScript, responsive layouts, and cleaner front-end structure for real website projects.',
    },
    {
      stage: 'Step 03',
      title: 'Backend development',
      description:
        'Moved into Node.js and Express to understand application flow, API structure, and the logic behind more useful backend systems.',
    },
    {
      stage: 'Step 04',
      title: 'Database and reporting systems',
      description:
        'Worked with MySQL, Power BI, and structured reporting ideas so data stays useful for dashboards, tracking, and decision-making.',
    },
    {
      stage: 'Step 05',
      title: 'Real project delivery',
      description:
        'Applied the stack to client-style websites, backend case studies, dashboard work, and practical project presentation that feels more hiring-ready.',
    },
  ],
  certifications: [
    {
      name: 'Power BI Mastery - Advanced',
      issuer: 'Professional training',
      status: 'Completed',
      note: 'Supports reporting, analytics storytelling, and cleaner presentation of project and attendance data.',
    },
    {
      name: 'Next certification slot',
      issuer: 'Planned',
      status: 'Ready for future update',
      note: 'Reserved for the next cloud or infrastructure-focused certification.',
      upcoming: true,
    },
    {
      name: 'Next certification slot',
      issuer: 'Planned',
      status: 'Ready for future update',
      note: 'Reserved for future progress in AWS, Linux, or deployment tooling.',
      upcoming: true,
    },
  ],
  contactBlurb:
    'Open to internship opportunities, freelance work, and collaborative project discussions.',
  footerNote:
    'Built to present practical websites, backend systems, and data-focused project work clearly.',
}
