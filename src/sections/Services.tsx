import { BarChart3, LayoutTemplate, PenTool, ServerCog } from 'lucide-react'
import Card from '@/components/Card'
import Section from '@/components/Section'
import { content } from '@/data/content'

const icons = [LayoutTemplate, ServerCog, BarChart3, PenTool]

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Services"
      description="Kept minimal so it supports the portfolio without competing with the project section."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {content.services.map((service, index) => {
          const Icon = icons[index]

          return (
            <Card key={service.title} className="p-6 transition-transform duration-200 hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/16 bg-cyan-300/10 text-cyan-100">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/76">{service.description}</p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
