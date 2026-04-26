import { HTMLAttributes, PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Props = PropsWithChildren<{
  id: string
  eyebrow?: string
  title?: string
  description?: string
  contentClassName?: string
}> &
  HTMLAttributes<HTMLElement>

export default function Section({
  id,
  eyebrow,
  title,
  description,
  className = '',
  contentClassName = '',
  children,
  ...props
}: Props) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id={id} aria-labelledby={title ? `${id}-title` : undefined} className={['section-shell scroll-mt-28', className].join(' ')} {...props}>
      {(eyebrow || title || description) && (
        <div className="mb-10 md:mb-12">
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          {title && (
            <h2 id={`${id}-title`} className="section-title mt-4">
              {title}
            </h2>
          )}
          {description && <p className="section-copy mt-4">{description}</p>}
        </div>
      )}

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={contentClassName}
      >
        {children}
      </motion.div>
    </section>
  )
}
