import Card from '@/components/Card'
import Section from '@/components/Section'
import { content } from '@/data/content'

export default function Experience() {
  return (
    <Section
      id="journey"
      eyebrow="Learning Journey"
      title="A learning path shaped by practical building"
      description="The progression is straightforward: fundamentals first, then websites, backend systems, data work, and stronger project delivery."
    >
      <div className="relative">
        <div className="absolute bottom-4 left-5 top-4 hidden w-px bg-white/10 md:block" aria-hidden="true" />

        <div className="grid gap-4">
          {content.journey.map((step, index) => (
            <Card key={step.title} className="relative p-6 md:ml-12">
              <div className="absolute left-[-3.3rem] top-7 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-300/18 bg-cyan-300/10 font-mono text-sm font-semibold text-cyan-100 md:flex">
                {String(index + 1).padStart(2, '0')}
              </div>

              <p className="section-eyebrow">{step.stage}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300/78">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
