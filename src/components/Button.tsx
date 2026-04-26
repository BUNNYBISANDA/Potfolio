import { ComponentPropsWithoutRef, forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type VariantOptions = {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
}

type Props = ComponentPropsWithoutRef<'button'> & VariantOptions

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full border font-medium tracking-[0.01em] transition duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60'

const variantStyles: Record<Variant, string> = {
  primary:
    'border-cyan-300/20 bg-cyan-300/12 text-white shadow-[0_0_0_1px_rgba(103,232,249,0.10),0_14px_30px_rgba(8,47,73,0.22)] hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/18',
  secondary:
    'border-white/12 bg-white/5 text-white hover:-translate-y-0.5 hover:border-cyan-300/22 hover:bg-white/8',
  ghost:
    'border-transparent bg-transparent text-slate-300 hover:text-white',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function buttonVariants({ variant = 'primary', size = 'md', fullWidth = false }: VariantOptions = {}) {
  return [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
  ]
    .filter(Boolean)
    .join(' ')
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = 'primary', size = 'md', fullWidth = false, className = '', ...props },
  ref,
) {
  const classes = [buttonVariants({ variant, size, fullWidth }), className].filter(Boolean).join(' ')
  return <button ref={ref} className={classes} {...props} />
})

export default Button
