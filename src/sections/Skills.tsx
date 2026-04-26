import { BarChart3, LayoutGrid, Server, Wrench } from 'lucide-react'
import Badge from '@/components/Badge'
import Card from '@/components/Card'
import Section from '@/components/Section'
import { content } from '@/data/content'

const icons = [LayoutGrid, Server, BarChart3, Wrench]

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Grouped for fast scanning and better readability"
      description="The stack is organized into the areas I use most often: frontend delivery, backend workflows, data work, and development tools."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {content.skills.map((category, index) => {
          const Icon = icons[index]

          return (
            <Card key={category.name} className="p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/16 bg-cyan-300/10 text-cyan-100">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">{category.name}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300/74">{category.summary}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item} className="text-[0.68rem] tracking-[0.16em] text-slate-200">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
