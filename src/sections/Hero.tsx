import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import { buttonVariants } from '@/components/Button'
import { content } from '@/data/content'
import { smoothScrollTo } from '@/lib/scroll'

export default function Hero() {
  const { profile } = content
  const prefersReducedMotion = useReducedMotion()
  const cvUrl = `${import.meta.env.BASE_URL}${profile.resumePath}`

  return (
    <section id="hero" aria-labelledby="hero-title" className="section-shell scroll-mt-28 pt-10 md:pt-14">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.18fr)_360px]">
        <motion.div
          className="surface-strong relative overflow-hidden p-8 sm:p-10 lg:p-12"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_28%)]" aria-hidden="true" />

          <div className="relative min-w-0">
            <Badge className="border-cyan-300/20 bg-cyan-300/12 text-cyan-50">{profile.status}</Badge>

            <p className="section-eyebrow mt-8">Hiring-focused portfolio</p>

            <h1 id="hero-title" className="section-title mt-5 max-w-4xl">
              <span className="text-gradient">{profile.headline}</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200/78 sm:text-xl">{profile.subheadline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(event) => {
                  event.preventDefault()
                  smoothScrollTo('projects')
                }}
                className={buttonVariants({ variant: 'primary', size: 'lg' })}
              >
                View Projects
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
                <Mail size={18} />
                Contact Me
              </a>
              <a href={cvUrl} download className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
                <Download size={18} />
                Download CV
              </a>
            </div>

            <dl className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              {profile.quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4">
                  <dt className="text-sm uppercase tracking-[0.18em] text-slate-400">{fact.label}</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-4"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-cyan-300/18 bg-cyan-300/10">
                <img
                  src={profile.avatar}
                  alt={`${profile.name} portrait`}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{profile.name}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                  <MapPin size={15} />
                  {profile.location}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-300/78">{profile.heroNote}</p>
          </Card>

          <Card className="p-6">
            <p className="section-eyebrow">Current focus</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.focusAreas.map((area) => (
                <Badge key={area} className="text-[0.68rem] tracking-[0.16em] text-slate-200">
                  {area}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <p className="section-eyebrow">What recruiters should see fast</p>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-300/78">
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                <span>Project cards explain the problem, the solution, and the stack instead of only naming technologies.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                <span>Work spans websites, backend systems, dashboards, and Python-based problem solving.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                <span>Open to internship and freelance opportunities where practical execution matters.</span>
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
