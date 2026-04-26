import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import { observeActiveSections } from './lib/scroll'

const sectionIds = ['hero', 'about', 'skills', 'services', 'projects', 'journey', 'certifications', 'contact']

export default function App() {
  const [active, setActive] = useState<string>('hero')

  useEffect(() => {
    const unobserve = observeActiveSections(sectionIds, setActive)
    return () => unobserve()
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-10rem] h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-16 h-80 w-80 rounded-full bg-accent2/15 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <Navbar active={active} />

      <main id="main-content" className="relative z-10 mx-auto max-w-[1180px] px-4 pb-20 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
