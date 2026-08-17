import { motion, useReducedMotion } from 'framer-motion'
import Badge from '@/components/Badge'
import TiltCard from '@/components/TiltCard'
import Section from '@/components/Section'
import { content } from '@/data/content'

export default function Certifications() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications"
    >
      <motion.div
        className="grid gap-5 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {content.certifications.map((certificate) => (
          <motion.div
            key={`${certificate.name}-${certificate.note}`}
            variants={{
              hidden: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
            }}
          >
            <TiltCard
              className={['h-full p-6', certificate.upcoming ? 'border border-dashed !border-white/12 bg-white/[0.02]' : ''].filter(Boolean).join(' ')}
              strength={certificate.upcoming ? 0 : 8}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-eyebrow">{certificate.issuer}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-white">{certificate.name}</h3>
                </div>
                <Badge className={certificate.upcoming ? 'text-slate-300' : 'border-violet-300/25 bg-violet-300/12 text-violet-50'}>
                  {certificate.status}
                </Badge>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300/76">{certificate.note}</p>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
