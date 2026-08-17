import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TechStrip from './components/TechStrip'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import { observeActiveSections } from './lib/scroll'

const sectionIds = ['hero', 'work', 'skills', 'experience', 'certifications', 'contact']

export default function App() {
  const [active, setActive] = useState<string>('hero')
  const { scrollY } = useScroll()
  const blobOneY = useTransform(scrollY, [0, 1600], [0, 220])
  const blobTwoY = useTransform(scrollY, [0, 1600], [0, -180])
  const blobThreeY = useTransform(scrollY, [0, 1600], [0, 140])

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
        <motion.div
          style={{ y: blobOneY }}
          className="absolute left-[-8rem] top-[-10rem] h-72 w-72 rounded-full bg-violet-400/20 blur-3xl"
        />
        <motion.div
          style={{ y: blobTwoY }}
          className="absolute right-[-6rem] top-16 h-80 w-80 rounded-full bg-cyan-300/16 blur-3xl"
        />
        <motion.div
          style={{ y: blobThreeY }}
          className="absolute bottom-[-10rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-300/12 blur-3xl"
        />
      </div>

      <Navbar active={active} />

      <main id="main-content" className="relative z-10 mx-auto max-w-[1180px] px-4 pb-20 sm:px-6 lg:px-8">
        <Hero />
        <TechStrip />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
