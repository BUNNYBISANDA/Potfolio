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
    'border-violet-300/25 bg-gradient-to-r from-violet-400/25 via-fuchsia-300/15 to-cyan-300/20 text-white shadow-[0_0_0_1px_rgba(167,139,250,0.14),0_14px_30px_rgba(30,20,70,0.28)] hover:-translate-y-0.5 hover:scale-[1.02] hover:border-violet-300/40 hover:shadow-[0_0_0_1px_rgba(167,139,250,0.22),0_18px_40px_rgba(30,20,70,0.36)]',
  secondary:
    'border-white/12 bg-white/5 text-white hover:-translate-y-0.5 hover:border-violet-300/25 hover:bg-white/8',
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
