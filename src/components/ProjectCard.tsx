import { useId, useState } from 'react'
import { ChevronDown, ExternalLink, FileText, Github } from 'lucide-react'
import Card from './Card'
import Badge from './Badge'
import Button, { buttonVariants } from './Button'
import type { Project } from '@/data/content'

type ActionLinkProps = {
  href?: string
  label: string
  icon: 'live' | 'github'
}

function ActionLink({ href, label, icon }: ActionLinkProps) {
  const iconNode = icon === 'github' ? <Github size={16} /> : <ExternalLink size={16} />

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-500"
      >
        {iconNode}
        {label}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={buttonVariants({ variant: 'secondary', size: 'sm' })}
    >
      {iconNode}
      {label}
    </a>
  )
}

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const detailsId = useId()

  return (
    <Card className="group flex h-full flex-col p-5 transition-transform duration-200 hover:-translate-y-1 md:p-6">
      <div
        className="relative overflow-hidden rounded-[1.35rem] border border-white/10 p-6 shadow-[0_20px_70px_rgba(2,6,23,0.26)]"
        style={{ background: project.accent }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_38%)]" aria-hidden="true" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="section-eyebrow !text-cyan-100/90">{project.tag}</p>
            <h3 className="mt-4 font-display text-[1.65rem] font-semibold leading-tight text-white">{project.title}</h3>
          </div>
          <Badge className="border-cyan-100/18 bg-slate-950/20 text-cyan-50">{project.status}</Badge>
        </div>
        <p className="relative mt-5 max-w-2xl text-sm leading-7 text-slate-100/82">{project.overview}</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
          <p className="section-eyebrow !text-slate-400">Problem</p>
          <p className="mt-3 text-sm leading-7 text-slate-200/80">{project.problem}</p>
        </div>
        <div className="rounded-[1.2rem] border border-cyan-300/12 bg-cyan-300/[0.03] p-4">
          <p className="section-eyebrow">Solution</p>
          <p className="mt-3 text-sm leading-7 text-slate-200/85">{project.solution}</p>
        </div>
      </div>

      <div className="mt-4 rounded-[1.2rem] border border-white/8 bg-slate-950/45 p-4">
        <p className="section-eyebrow !text-slate-400">Why it matters</p>
        <p className="mt-3 text-sm leading-7 text-slate-200/80">{project.outcome}</p>
      </div>

      <div className="mt-5">
        <p className="section-eyebrow !text-slate-400">Tech Stack</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <Badge key={item} className="text-[0.68rem] tracking-[0.16em] text-slate-200">
              {item}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="section-eyebrow !text-slate-400">Key Features</p>
        <ul className="mt-4 grid gap-3">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm leading-7 text-slate-200/80">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div id={detailsId} className="mt-6 rounded-[1.2rem] border border-cyan-300/12 bg-cyan-300/[0.04] p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
            <FileText size={16} />
            Case study notes
          </div>
          <ul className="mt-4 grid gap-3">
            {project.caseStudy.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-7 text-slate-200/82">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <ActionLink href={project.links.live} label="Live Demo" icon="live" />
        <ActionLink href={project.links.github} label="GitHub" icon="github" />
        <Button
          type="button"
          variant="secondary"
          size="sm"
          aria-expanded={open}
          aria-controls={detailsId}
          onClick={() => setOpen((value) => !value)}
        >
          <ChevronDown className={open ? 'rotate-180' : ''} size={16} />
          {open ? 'Hide Case Study' : 'Case Study'}
        </Button>
      </div>

      {project.accessNote && <p className="mt-4 text-sm leading-7 text-slate-500">{project.accessNote}</p>}
    </Card>
  )
}
