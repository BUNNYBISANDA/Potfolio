import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { buttonVariants } from '@/components/Button'
import { content } from '@/data/content'

export default function Contact() {
  const { profile, contactBlurb } = content
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-shell scroll-mt-28">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="surface-strong relative grid gap-10 overflow-hidden p-8 sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:p-14"
      >
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(167,139,250,0.16),transparent_38%)]"
          aria-hidden="true"
        />

        <div className="relative">
          <p className="section-eyebrow">Let&apos;s Create Something Great</p>
          <h2 id="contact-title" className="section-title mt-4">
            Have a project, internship, or role in mind?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-slate-300/80 sm:text-lg">{contactBlurb}</p>

          <div className="mt-8 grid gap-3 sm:max-w-md">
            <a href={profile.socials.email} className="flex items-center gap-3 text-sm text-slate-200 hover:text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5">
                <Mail size={15} />
              </span>
              {profile.email}
            </a>
            <p className="flex items-center gap-3 text-sm text-slate-200">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5">
                <MapPin size={15} />
              </span>
              {profile.location}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.socials.email} className={buttonVariants({ variant: 'primary', size: 'lg' })}>
              Start a Conversation
              <ArrowRight size={18} />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              <Github size={18} />
              GitHub
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          {!prefersReducedMotion && (
            <svg aria-hidden="true" viewBox="0 0 320 320" className="h-72 w-72">
              <ellipse
                className="orbit-ring"
                cx="160"
                cy="160"
                rx="150"
                ry="60"
                fill="none"
                stroke="rgba(167,139,250,0.3)"
                strokeWidth="1"
              />
              <ellipse
                cx="160"
                cy="160"
                rx="110"
                ry="110"
                fill="url(#planet-gradient)"
                opacity="0.9"
              />
              <defs>
                <radialGradient id="planet-gradient" cx="35%" cy="30%" r="75%">
                  <stop offset="0%" stopColor="#c4b5fd" />
                  <stop offset="55%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#2e1065" />
                </radialGradient>
              </defs>
            </svg>
          )}
          <div className="absolute inset-0 rounded-full bg-violet-400/10 blur-3xl" aria-hidden="true" />
        </div>
      </motion.div>
    </section>
  )
}
