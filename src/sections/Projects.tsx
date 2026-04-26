import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { content } from '@/data/content'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Selected projects with clearer context and stronger proof of work"
      description="Each project highlights the problem, the solution, the tech stack, and the outcome so a recruiter can understand the work quickly."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {content.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
