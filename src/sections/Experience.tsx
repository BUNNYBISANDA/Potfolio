import { motion, useReducedMotion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import Card from '@/components/Card'
import Section from '@/components/Section'
import { content } from '@/data/content'

export default function Experience() {
  const prefersReducedMotion = useReducedMotion()
  const { workExperience, education } = content

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="relative">
          <div className="absolute bottom-4 left-5 top-4 hidden w-px bg-gradient-to-b from-violet-300/40 via-cyan-300/20 to-transparent md:block" aria-hidden="true" />

          <motion.div
            className="grid gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            {workExperience.map((job, index) => (
              <motion.div
                key={job.role}
                variants={{
                  hidden: prefersReducedMotion ? {} : { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
              >
                <Card className="relative p-6 md:ml-12">
                  <div className="absolute left-[-3.3rem] top-7 hidden h-10 w-10 items-center justify-center rounded-full border border-violet-300/25 bg-gradient-to-br from-violet-400/25 to-cyan-300/15 font-mono text-sm font-semibold text-violet-100 shadow-[0_8px_18px_rgba(124,58,237,0.24)] md:flex">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl font-semibold text-white">{job.role}</h3>
                    <span className="section-eyebrow">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-300/85">{job.org}</p>

                  <ul className="mt-4 grid gap-3">
                    {job.bullets.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 text-slate-300/78">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-violet-300 to-cyan-300" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <Card className="p-6 md:p-7">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-400/18 to-cyan-300/12 text-violet-100">
              <GraduationCap size={22} />
            </div>
            <p className="section-eyebrow mt-5">Education</p>
            <h3 className="mt-3 font-display text-xl font-semibold text-white">{education.degree}</h3>
            <p className="mt-1 text-sm font-medium text-slate-300/85">{education.school}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-100">
                {education.period}
              </span>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                GPA {education.gpa}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300/76">{education.focus}</p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="section-eyebrow">Languages</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {content.languages.map((lang) => (
                  <span key={lang.name} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {lang.name} · {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
