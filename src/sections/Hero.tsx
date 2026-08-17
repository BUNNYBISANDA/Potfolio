import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { buttonVariants } from '@/components/Button'
import { content } from '@/data/content'
import { smoothScrollTo } from '@/lib/scroll'

function AnimatedValue({ value }: { value: string }) {
  const numeric = value.match(/^([\d.]+)(.*)$/)
  const [display, setDisplay] = useState(numeric ? '0' : value)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!numeric || prefersReducedMotion) {
      setDisplay(value)
      return
    }
    const target = parseFloat(numeric[1])
    const suffix = numeric[2]
    const isDecimal = numeric[1].includes('.')
    const duration = 1100
    const start = performance.now()

    let frame: number
    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased
      setDisplay(`${isDecimal ? current.toFixed(2) : Math.round(current)}${suffix}`)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return <>{display}</>
}

export default function Hero() {
  const { profile } = content
  const prefersReducedMotion = useReducedMotion()
  const cvUrl = `${import.meta.env.BASE_URL}${profile.resumePath}`

  return (
    <section id="hero" aria-labelledby="hero-title" className="scroll-mt-28 pt-14 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-eyebrow inline-flex items-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-violet-300 to-transparent" aria-hidden="true" />
            Hello, I&apos;m
          </span>

          <h1 id="hero-title" className="mt-5 font-serif text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-[1.02] text-white">
            {profile.name}
          </h1>

          <p className="mt-4 font-display text-xl font-semibold text-gradient sm:text-2xl">{profile.role}</p>

          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-300/10 px-3.5 py-1.5 text-xs font-semibold text-violet-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            {profile.status}
          </span>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300/78 sm:text-lg">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              onClick={(event) => {
                event.preventDefault()
                smoothScrollTo('work')
              }}
              className={buttonVariants({ variant: 'primary', size: 'lg' })}
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                smoothScrollTo('contact')
              }}
              className={buttonVariants({ variant: 'secondary', size: 'lg' })}
            >
              Let&apos;s Collaborate
            </a>
            <a href={cvUrl} download className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={profile.socials.email}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-slate-300 hover:border-violet-300/30 hover:text-white"
            >
              <Mail size={16} />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-slate-300 hover:border-violet-300/30 hover:text-white"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-slate-300 hover:border-violet-300/30 hover:text-white"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {content.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              >
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                  <AnimatedValue value={stat.value} />
                </dt>
                <dd className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.38),rgba(125,211,252,0.14)_46%,transparent_72%)] blur-2xl"
          />

          {!prefersReducedMotion && (
            <svg
              aria-hidden="true"
              viewBox="0 0 400 400"
              className="portrait-ring pointer-events-none absolute inset-0 -z-10 h-full w-full"
            >
              <circle cx="200" cy="200" r="188" fill="none" stroke="rgba(167,139,250,0.28)" strokeWidth="1" strokeDasharray="2 10" strokeLinecap="round" />
            </svg>
          )}

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10">
            <img
              src={profile.avatar}
              alt={`${profile.name} portrait`}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141830]/70 via-transparent to-violet-400/10" aria-hidden="true" />
          </div>

          <p className="pointer-events-none absolute -bottom-3 -right-2 rotate-[-4deg] select-none font-script text-4xl text-violet-100/85 sm:text-5xl">
            {profile.shortName === 'BJ' ? 'Bisanda' : profile.name}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
