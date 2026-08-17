import { Github, Globe, Linkedin, Mail } from 'lucide-react'
import { content } from '@/data/content'
import { smoothScrollTo } from '@/lib/scroll'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
]

const moreLinks = [
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const { profile, footerNote } = content

  function go(id: string) {
    smoothScrollTo(id)
  }

  return (
    <footer className="relative z-10 border-t border-white/8 pb-8 pt-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_repeat(2,minmax(0,0.8fr))_minmax(0,1fr)]">
          <div>
            <a
              href="#hero"
              onClick={(event) => {
                event.preventDefault()
                go('hero')
              }}
              className="flex items-center gap-2.5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-violet-300/25 bg-gradient-to-br from-violet-400/25 to-cyan-300/15 font-mono text-xs font-semibold text-violet-50">
                {content.profile.shortName}
              </span>
              <span className="font-display text-sm font-semibold text-white">{profile.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">{footerNote}</p>
          </div>

          <div>
            <p className="section-eyebrow !text-slate-500">Navigation</p>
            <ul className="mt-4 grid gap-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => {
                      event.preventDefault()
                      go(link.id)
                    }}
                    className="text-sm text-slate-400 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-eyebrow !text-slate-500">Credentials</p>
            <ul className="mt-4 grid gap-2.5">
              {moreLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => {
                      event.preventDefault()
                      go(link.id)
                    }}
                    className="text-sm text-slate-400 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-eyebrow !text-slate-500">Let&apos;s Connect</p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <a
                href={profile.socials.email}
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-slate-300 hover:border-violet-300/25 hover:text-white"
              >
                <Mail size={15} />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-slate-300 hover:border-violet-300/25 hover:text-white"
              >
                <Github size={15} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-slate-300 hover:border-violet-300/25 hover:text-white"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={profile.socials.website}
                target="_blank"
                rel="noreferrer"
                aria-label="Portfolio"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-slate-300 hover:border-violet-300/25 hover:text-white"
              >
                <Globe size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">Copyright {year} {profile.name}. All rights reserved.</p>
          <p className="text-sm text-slate-500">{profile.location}</p>
        </div>
      </div>
    </footer>
  )
}
