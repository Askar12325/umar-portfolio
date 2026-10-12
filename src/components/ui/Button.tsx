import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: ReactNode
  icon?: ReactNode
  className?: string
  href?: string
}

export const Button = ({
  variant = 'primary',
  children,
  icon,
  className = '',
  href,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase font-semibold transition-all duration-300 cursor-pointer select-none focus:outline-none min-h-[46px]'

  const variants = {
    primary:
      'bg-white text-black hover:bg-neutral-200 shadow-[0_0_24px_rgba(255,255,255,0.25)] border border-white',
    secondary:
      'bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/15 backdrop-blur-xl hover:border-white/30 shadow-lg',
    outline:
      'bg-transparent text-neutral-300 hover:text-white border border-white/10 hover:border-white/25 hover:bg-white/[0.03]',
  }

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`group ${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`group ${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </motion.button>
  )
}
