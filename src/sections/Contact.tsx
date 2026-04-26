import { Github, Linkedin, Mail } from 'lucide-react'
import Card from '@/components/Card'
import Section from '@/components/Section'
import { buttonVariants } from '@/components/Button'
import { content } from '@/data/content'

export default function Contact() {
  const { profile, contactBlurb } = content

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Have a website, system, or dashboard idea? Let’s build it."
      description="Email is the fastest way to reach me for internship, freelance, or project discussions."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Card className="p-6 md:p-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-200/80">{contactBlurb}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.socials.email} className={buttonVariants({ variant: 'primary', size: 'lg' })}>
              <Mail size={18} />
              Email Me
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              <Github size={18} />
              GitHub
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <p className="section-eyebrow">Availability</p>
          <h3 className="mt-4 font-display text-3xl font-semibold text-white">{profile.status}</h3>

          <div className="mt-8 grid gap-4">
            <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Email</p>
              <a href={profile.socials.email} className="mt-2 block text-base font-medium text-white hover:text-cyan-100">
                {profile.email}
              </a>
            </div>

            <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Location</p>
              <p className="mt-2 text-base font-medium text-white">{profile.location}</p>
            </div>

            <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Primary direction</p>
              <p className="mt-2 text-base font-medium text-white">Web development, backend systems, and dashboard-focused work</p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}
