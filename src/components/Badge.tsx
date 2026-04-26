import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'span'>

export default function Badge({ className = '', ...props }: Props) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 shadow-[0_0_0_1px_rgba(148,163,184,0.06)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}
