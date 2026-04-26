import Badge from '@/components/Badge'
import Card from '@/components/Card'
import Section from '@/components/Section'
import { content } from '@/data/content'

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Current proof points, with space ready for the next ones"
      description="One certification is live now, and the layout stays ready for future cloud, infrastructure, or analytics credentials."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {content.certifications.map((certificate) => (
          <Card
            key={`${certificate.name}-${certificate.note}`}
            className={[
              'p-6',
              certificate.upcoming ? 'border border-dashed border-white/12 bg-white/[0.02]' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-eyebrow">{certificate.issuer}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">{certificate.name}</h3>
              </div>
              <Badge className={certificate.upcoming ? 'text-slate-300' : 'border-cyan-300/18 bg-cyan-300/10 text-cyan-50'}>
                {certificate.status}
              </Badge>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300/76">{certificate.note}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
