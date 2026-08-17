import { motion, useReducedMotion } from 'framer-motion'
import { BarChart3, Database, LayoutGrid, Server, Wrench } from 'lucide-react'
import Badge from '@/components/Badge'
import TiltCard from '@/components/TiltCard'
import Section from '@/components/Section'
import { content } from '@/data/content'

const icons = [LayoutGrid, Server, Database, BarChart3, Wrench]

export default function Skills() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
    >
      <motion.div
        className="grid gap-5 lg:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {content.skills.map((category, index) => {
          const Icon = icons[index]
          const isLast = index === content.skills.length - 1 && content.skills.length % 2 === 1

          return (
            <motion.div
              key={category.name}
              className={isLast ? 'lg:col-span-2' : ''}
              variants={{
                hidden: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              <TiltCard className="h-full p-6 md:p-7" strength={6}>
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-400/18 to-cyan-300/12 text-violet-100">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{category.name}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300/74">{category.summary}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item} className="text-[0.68rem] tracking-[0.16em] text-slate-200">
                      {item}
                    </Badge>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
