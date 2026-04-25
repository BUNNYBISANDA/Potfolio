import { useEffect } from 'react'

type SkillGroup = {
  title: string
  items: string[]
}

type Project = {
  title: string
  problem: string
  solution: string
  tech: string[]
  features: string[]
  links: {
    live?: string
    github?: string
    caseStudy?: string
  }
}

const skillGroups: SkillGroup[] = [
  { title: 'Cloud & DevOps', items: ['AWS', 'Linux', 'Git', 'GitHub', 'CLI', 'Deployment'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'REST APIs'] },
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { title: 'Tools', items: ['VS Code', 'Postman', 'GitHub Pages', 'Power BI'] }
]

const projects: Project[] = [
  {
    title: 'Housing Management System',
    problem: 'Property operations relied on manual updates, causing delayed responses and inconsistent tenant records.',
    solution: 'Built a centralized management platform with workflow visibility for tenants, maintenance, and payment status.',
    tech: ['Node.js', 'Express', 'MongoDB', 'React'],
    features: ['Role-aware dashboard', 'Maintenance ticket tracking', 'Payment lifecycle visibility'],
    links: { github: 'https://github.com/BUNNYBISANDA' }
  },
  {
    title: 'Face Recognition Attendance System',
    problem: 'Manual attendance checks consumed class time and made audit history difficult.',
    solution: 'Implemented a recognition-based attendance process with timestamped logging and export support.',
    tech: ['Python', 'OpenCV', 'Flask', 'SQLite'],
    features: ['Automated check-ins', 'Timestamped attendance logs', 'CSV export for reporting'],
    links: { github: 'https://github.com/BUNNYBISANDA' }
  },
  {
    title: 'LCIC Student Tracking System',
    problem: 'Student progress data was siloed across files and difficult for mentors to evaluate quickly.',
    solution: 'Designed a backend-focused tracking system that organizes milestones, feedback, and trend snapshots in one portal.',
    tech: ['Node.js', 'Express', 'MySQL', 'Bootstrap'],
    features: ['Progress timeline', 'Mentor feedback notes', 'Performance snapshot views'],
    links: { github: 'https://github.com/BUNNYBISANDA' }
  },
  {
    title: 'Villa de Jojo Website',
    problem: 'The business lacked a polished web presence to communicate services and trust to potential customers.',
    solution: 'Shipped a responsive brand website with a clearer service hierarchy and stronger call-to-action flow.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive layout', 'Service-focused content structure', 'Direct inquiry pathways'],
    links: {
      live: 'https://bunnybisanda.github.io/Villadejojo/',
      github: 'https://github.com/BUNNYBISANDA/Villadejojo',
      caseStudy: 'https://github.com/BUNNYBISANDA/Villadejojo'
    }
  },
  {
    title: 'Barista Sri Lanka Website Redesign',
    problem: 'The previous interface felt outdated and made the brand experience feel inconsistent across devices.',
    solution: 'Delivered a modern visual redesign with improved content hierarchy and a cleaner mobile-first structure.',
    tech: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    features: ['Modernized visual language', 'Usability-focused layout', 'Improved mobile clarity'],
    links: { github: 'https://github.com/BUNNYBISANDA' }
  },
  {
    title: 'Cloud DevOps Journal',
    problem: 'Cloud/DevOps learning can become fragmented without documented practice and reflection.',
    solution: 'Maintained a structured journal of labs, deployment experiments, and cloud-ready architecture notes.',
    tech: ['GitHub', 'AWS', 'Linux CLI', 'Markdown'],
    features: ['Progressive lab notes', 'Deployment checklists', 'Repeatable environment setup logs'],
    links: { github: 'https://github.com/BUNNYBISANDA' }
  }
]

const journey = [
  ['Python Fundamentals', 'Started with scripting, debugging, and automation tasks to build practical engineering discipline.'],
  ['Backend Development', 'Built API-first applications using Node.js and Express with clear route/service structure.'],
  ['Database Systems', 'Modeled application data with MySQL and MongoDB for reliable storage and retrieval.'],
  ['Cloud/DevOps Learning', 'Focused on Linux workflows, version control, deployment basics, and cloud-ready project thinking.'],
  ['Client-Style Delivery', 'Applied technical skills to practical, outcome-oriented projects with real constraints and deadlines.']
]

function LinkButton({ href, label, ariaLabel }: { href?: string; label: string; ariaLabel: string }) {
  if (!href) {
    return (
      <span className="btn btn-small btn-disabled" aria-hidden="true" title="Link coming soon">
        {label}
      </span>
    )
  }

  return (
    <a href={href} className="btn btn-small" target="_blank" rel="noreferrer noopener" aria-label={ariaLabel}>
      {label}
    </a>
  )
}

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-bg" aria-hidden="true" />

      <header className="top-nav">
        <a href="#hero" className="brand" aria-label="Go to top">Bisanda Jayathilaka</a>
        <nav aria-label="Primary">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Journey</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="container">
        <section id="hero" className="hero reveal" data-reveal aria-labelledby="hero-title">
          <span className="status-pill">Open to Internship Opportunities</span>
          <h1 id="hero-title">Aspiring Cloud &amp; DevOps Engineer</h1>
          <p>
            I build practical web systems, automation tools, and cloud-ready applications using Python,
            backend technologies, and modern frontend design.
          </p>

          <ul className="quick-facts" aria-label="Quick profile highlights">
            <li>Backend-focused project builder</li>
            <li>Cloud-ready engineering mindset</li>
            <li>Internship-ready and delivery-driven</li>
          </ul>

          <div className="cta-row">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="./cv.pdf" className="btn btn-secondary" download>Download CV</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
        </section>

        <section id="about" className="panel reveal" data-reveal aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          <p>
            I am an IT student focused on backend, cloud, and DevOps pathways. I enjoy turning practical
            problems into clear, maintainable systems—from API logic and database design to deployment-ready
            interfaces. My goal is to keep building real-world systems that are useful, measurable, and reliable.
          </p>
        </section>

        <section id="skills" className="panel reveal" data-reveal aria-labelledby="skills-title">
          <h2 id="skills-title">Skills</h2>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="glass-card" aria-label={group.title}>
                <h3>{group.title}</h3>
                <div className="pill-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="skill-pill">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="panel reveal" data-reveal aria-labelledby="projects-title">
          <h2 id="projects-title">Featured Projects</h2>
          <p className="section-intro">
            Recruiter-friendly case studies that highlight problem framing, implementation decisions, and practical outcomes.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p><strong>Problem:</strong> {project.problem}</p>
                <p><strong>Solution:</strong> {project.solution}</p>
                <p><strong>Tech Stack:</strong> {project.tech.join(' • ')}</p>
                <ul>
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <div className="project-actions">
                  <LinkButton href={project.links.live} label="Live Demo" ariaLabel={`${project.title} live demo`} />
                  <LinkButton href={project.links.github} label="GitHub" ariaLabel={`${project.title} GitHub`} />
                  <LinkButton href={project.links.caseStudy} label="Case Study" ariaLabel={`${project.title} case study`} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="panel reveal" data-reveal aria-labelledby="experience-title">
          <h2 id="experience-title">Experience &amp; Learning Journey</h2>
          <ol className="timeline">
            {journey.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="certifications" className="panel reveal" data-reveal aria-labelledby="certifications-title">
          <h2 id="certifications-title">Certifications</h2>
          <div className="cert-grid">
            <article className="glass-card cert-card">
              <h3>Power BI Mastery – Advanced</h3>
              <p>Certification Program</p>
              <span>Completed</span>
            </article>
            <article className="glass-card cert-card cert-placeholder">
              <h3>Next Certification</h3>
              <p>Reserved for upcoming cloud or DevOps credentials</p>
              <span>Planned</span>
            </article>
          </div>
        </section>

        <section id="contact" className="panel contact-panel reveal" data-reveal aria-labelledby="contact-title">
          <h2 id="contact-title">Let&apos;s build something useful.</h2>
          <p>If you&apos;re hiring for cloud, backend, or full-stack internship roles, I&apos;d be glad to connect.</p>
          <div className="cta-row">
            <a href="mailto:bunnybisanda05@gmail.com" className="btn btn-primary">Email Me</a>
            <a href="https://github.com/BUNNYBISANDA" className="btn btn-secondary" target="_blank" rel="noreferrer noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/bisanda-jayathilaka-373635311/" className="btn btn-ghost" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Bisanda Jayathilaka. Built for internship and early-career opportunities.</p>
      </footer>
    </>
  )
}
