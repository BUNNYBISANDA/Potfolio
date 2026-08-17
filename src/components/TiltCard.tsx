import { PropsWithChildren, useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

type Props = PropsWithChildren<{
  className?: string
  strength?: number
}>

export default function TiltCard({ className = '', strength = 10, children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 220, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 220, damping: 20 })
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.16), transparent 55%)`

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * strength)
    rotateX.set((0.5 - py) * strength)
    glareX.set(px * 100)
    glareY.set(py * 100)
  }

  function onMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <div className="tilt-wrap">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX: springX, rotateY: springY }}
        className={['tilt-card surface relative min-w-0', className].filter(Boolean).join(' ')}
      >
        {children}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-200 hover:opacity-100"
          style={{ background: glareBg }}
        />
      </motion.div>
    </div>
  )
}
