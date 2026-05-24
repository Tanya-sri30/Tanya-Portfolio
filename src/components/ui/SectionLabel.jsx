import { cn } from '../../utils/cn.js'

function SectionLabel({ children, className = '' }) {
  return (
    <p
      className={cn(
        'text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]',
        className,
      )}
    >
      {children}
    </p>
  )
}

export default SectionLabel
