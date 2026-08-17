import { content } from '@/data/content'

export default function TechStrip() {
  const items = [...content.techStack, ...content.techStack]

  return (
    <div className="mt-14 border-y border-white/8 py-5">
      <p className="section-eyebrow !text-slate-500">Currently building with</p>
      <div className="relative mt-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#171c33] to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#171c33] to-transparent" aria-hidden="true" />
        <div className="marquee-track gap-12">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="shrink-0 font-display text-lg font-semibold tracking-tight text-slate-400/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
