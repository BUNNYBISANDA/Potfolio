import Card from '@/components/Card'
import Section from '@/components/Section'
import { content } from '@/data/content'

export default function About() {
  const { profile, aboutHighlights } = content

  return (
    <Section
      id="about"
      eyebrow="About"
      title="A practical builder focused on websites, backend systems, and data-driven work"
      description="Short professional context for hiring managers: what I focus on, how I build, and why these projects matter."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <Card className="p-6 md:p-8">
          <div className="grid gap-5">
            {profile.summary.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-200/78 md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>

        <div className="grid gap-4">
          {aboutHighlights.map((item) => (
            <Card key={item.title} className="p-5">
              <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/75">{item.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
