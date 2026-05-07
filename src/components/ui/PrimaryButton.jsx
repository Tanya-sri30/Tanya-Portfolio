import { cn } from '../../utils/cn.js'

const variants = {
  primary:
    'border-[color:var(--color-cyan-border-strong)] bg-[color:var(--color-cyan-glass)] text-cyan-50 shadow-[var(--shadow-cyan)] hover:border-cyan-100/70 hover:bg-cyan-200/20 hover:shadow-[var(--shadow-cyan-strong)]',
  secondary:
    'border-white/10 bg-white/[0.035] text-white/78 shadow-[var(--shadow-dark-soft)] hover:border-white/25 hover:bg-white/[0.07] hover:text-white hover:shadow-[var(--shadow-white-soft)]',
}

function PrimaryButton({
  as,
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const Component = as || (href ? 'a' : 'button')

  return (
    <Component
      {...(href ? { href } : {})}
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-7 py-3.5 text-sm font-semibold',
        'transition duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.035] active:scale-[0.99] focus:outline-none',
        'focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090f]',
        variants[variant],
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm transition duration-700 group-hover:left-full" />
      </span>
      <span className="relative">{children}</span>
    </Component>
  )
}

export default PrimaryButton
