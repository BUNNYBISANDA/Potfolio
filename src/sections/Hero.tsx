import Section from '@/components/Section'
import Button from '@/components/Button'
import { content } from '@/data/content'
import { smoothScrollTo } from '@/lib/scroll'

export default function Hero() {
  const { profile } = content
  const imgSrc = content.profileImage || '/avatar.jpg'
  const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`
  return (
    <Section id="hero" className="pt-10 md:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h1 className="type-display">Hi, I'm {profile.nickname} â€” {profile.role}.</h1>
          <p className="type-body text-muted mt-4 max-w-prose">{profile.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={cvUrl} download>
              <Button>Download CV</Button>
            </a>
            <Button variant="secondary" onClick={() => smoothScrollTo('contact')}>Contact Me</Button>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="relative w-40 h-40 md:w-56 md:h-56">
            <div className="absolute -inset-1 rounded-full blur-xl accent-ring opacity-70" aria-hidden="true"></div>
            <img
              src={imgSrc}
              alt={`${profile.name} avatar`}
              className="relative rounded-full w-full h-full object-cover border-4 border-card shadow-soft"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
