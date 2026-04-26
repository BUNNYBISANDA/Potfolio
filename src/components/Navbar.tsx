import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { content } from '@/data/content'
import { smoothScrollTo } from '@/lib/scroll'
import { buttonVariants } from './Button'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ active }: { active: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  function onNavigate(id: string) {
    setMobileOpen(false)
    smoothScrollTo(id)
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-[1180px] px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="surface flex items-center justify-between px-4 py-3 md:px-6" aria-label="Primary">
          <a
            href="#hero"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('hero')
            }}
            className="flex items-center gap-3"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/18 bg-cyan-300/10 font-mono text-sm font-semibold text-cyan-100">
              {content.profile.shortName}
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">{content.profile.name}</span>
              <span className="block text-xs text-slate-400">Web, backend, and data-focused builds</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  onNavigate(link.id)
                }}
                className={[
                  'text-sm text-slate-300 hover:text-white',
                  active === link.id ? 'text-white' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
            <a href={content.profile.socials.email} className={buttonVariants({ variant: 'secondary', size: 'sm' })}>
              Contact Me
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 p-3 text-slate-200 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {mobileOpen && (
          <div id="mobile-navigation" className="surface mt-3 p-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    onNavigate(link.id)
                  }}
                  className={[
                    'rounded-2xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white',
                    active === link.id ? 'bg-white/5 text-white' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-current={active === link.id ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
              <a href={content.profile.socials.email} className={buttonVariants({ variant: 'secondary', size: 'md' })}>
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
