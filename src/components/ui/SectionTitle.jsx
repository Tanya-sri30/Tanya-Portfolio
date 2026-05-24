import { cn } from '../../utils/cn.js'

function SectionTitle({ as, children, className = '' }) {
  const Component = as || 'h2'

  return (
    <Component
      className={cn(
        'max-w-3xl text-balance font-display text-3xl font-semibold leading-tight tracking-normal text-[color:var(--color-text-primary)] sm:text-4xl',
        className,
      )}
    >
      {children}
    </Component>
  )
}

export default SectionTitle
