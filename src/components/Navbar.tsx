import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { content } from '@/data/content'
import { smoothScrollTo } from '@/lib/scroll'
import { buttonVariants } from './Button'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ active }: { active: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const logoRef = useRef<HTMLAnchorElement>(null)

  const { scrollYProgress } = useScroll()
  const progressScaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function onNavigate(id: string) {
    setMobileOpen(false)
    smoothScrollTo(id)
  }

  function onLogoMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!logoRef.current) return
    const rect = logoRef.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * 26)
    rotateX.set((0.5 - py) * 26)
  }

  function onLogoLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progressScaleX }} />

      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-[1180px] px-4 pt-4 sm:px-6 lg:px-8">
          <motion.nav
            animate={{
              paddingTop: scrolled ? '0.55rem' : '0.75rem',
              paddingBottom: scrolled ? '0.55rem' : '0.75rem',
              boxShadow: scrolled
                ? '0 18px 46px rgba(10, 12, 30, 0.42), 0 0 0 1px rgba(167, 139, 250, 0.22)'
                : '0 24px 60px rgba(10, 12, 30, 0.24), 0 0 0 1px rgba(199, 210, 254, 0.1)',
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="surface relative flex items-center justify-between overflow-visible px-4 py-3 md:px-6"
            style={{ perspective: 1000 }}
            aria-label="Primary"
          >
            <a
              ref={logoRef}
              href="#hero"
              onClick={(event) => {
                event.preventDefault()
                onNavigate('hero')
              }}
              onMouseMove={onLogoMove}
              onMouseLeave={onLogoLeave}
              className="flex items-center gap-3"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.span
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-300/25 bg-gradient-to-br from-violet-400/25 via-fuchsia-300/15 to-cyan-300/20 font-mono text-sm font-semibold text-violet-50 shadow-[0_8px_18px_rgba(124,58,237,0.28)]"
              >
                {content.profile.shortName}
              </motion.span>
              <span>
                <span className="block text-sm font-semibold text-white">{content.profile.name}</span>
                <span className="block text-xs text-slate-400">Web, backend, and data-focused builds</span>
              </span>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {links.map((link) => {
                const isActive = active === link.id
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(event) => {
                      event.preventDefault()
                      onNavigate(link.id)
                    }}
                    className={[
                      'relative rounded-full px-4 py-2 text-sm transition-colors',
                      isActive ? 'text-white' : 'text-slate-300 hover:text-white',
                    ].join(' ')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full border border-violet-300/30 bg-gradient-to-r from-violet-400/20 via-fuchsia-300/12 to-cyan-300/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                )
              })}
              <a
                href={content.profile.socials.email}
                className={buttonVariants({ variant: 'secondary', size: 'sm' }) + ' ml-2'}
              >
                Let&apos;s Work Together
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
              <motion.span
                animate={{ rotate: mobileOpen ? 90 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </button>
          </motion.nav>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="surface mt-3 origin-top p-4 lg:hidden"
              >
                <motion.div
                  className="flex flex-col gap-2"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.05 } },
                  }}
                >
                  {links.map((link) => (
                    <motion.a
                      key={link.id}
                      href={`#${link.id}`}
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        show: { opacity: 1, x: 0 },
                      }}
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
                    </motion.a>
                  ))}
                  <a href={content.profile.socials.email} className={buttonVariants({ variant: 'secondary', size: 'md' })}>
                    Contact Me
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}
