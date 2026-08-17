import { motion, useReducedMotion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import Section from '@/components/Section'
import { content } from '@/data/content'

export default function Projects() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section id="work" eyebrow="Selected Work" title="Three projects, three different problems">
      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {content.projects.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: prefersReducedMotion ? {} : { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
