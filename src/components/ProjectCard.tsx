import { ExternalLink, Github } from 'lucide-react'
import TiltCard from './TiltCard'
import Badge from './Badge'
import type { Project } from '@/data/content'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="flex h-full flex-col overflow-hidden p-0" strength={5}>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8">
        <div className="browser-chrome absolute inset-x-0 top-0 z-10">
          <span />
          <span />
          <span />
        </div>
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="section-eyebrow text-[0.65rem]">{project.tag}</p>
          <Badge className="shrink-0 border-violet-300/25 bg-violet-300/12 text-[0.62rem] text-violet-50">
            {project.status}
          </Badge>
        </div>

        <h3 className="mt-2 font-display text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-300/78">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <Badge key={item} className="text-[0.62rem] tracking-[0.14em] text-slate-200">
              {item}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-violet-300/25 hover:bg-white/8"
            >
              <ExternalLink size={13} />
              Live
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-violet-300/25 hover:bg-white/8"
            >
              <Github size={13} />
              Code
            </a>
          )}
        </div>

        {project.accessNote && <p className="mt-3 text-[0.7rem] leading-5 text-slate-500">{project.accessNote}</p>}
      </div>
    </TiltCard>
  )
}
