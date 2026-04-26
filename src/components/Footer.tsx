import { Github, Globe, Linkedin, Mail } from 'lucide-react'
import { content } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  const { profile, footerNote } = content

  return (
    <footer className="relative z-10 pb-8 pt-4">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="surface flex flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">{profile.name}</p>
            <p className="mt-2 max-w-xl text-sm text-slate-400">{footerNote}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={profile.socials.email}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:border-cyan-300/20 hover:text-white"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:border-cyan-300/20 hover:text-white"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:border-cyan-300/20 hover:text-white"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={profile.socials.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:border-cyan-300/20 hover:text-white"
            >
              <Globe size={16} />
              Portfolio
            </a>
          </div>
        </div>

        <p className="px-2 pt-5 text-sm text-slate-500">Copyright {year} {profile.name}.</p>
      </div>
    </footer>
  )
}
