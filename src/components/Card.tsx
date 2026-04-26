import { ComponentPropsWithoutRef } from 'react'

export default function Card({ className = '', ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={['surface', 'min-w-0', className].filter(Boolean).join(' ')} {...props} />
}
