import { cn } from '../../utils/cn.js'

function SectionLabel({ children, className = '' }) {
  return (
    <p
      className={cn(
        'inline-flex items-center rounded-full border border-[color:var(--color-cyan-border)]',
        'bg-[color:var(--color-surface)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.32em]',
        'text-[color:var(--color-cyan-soft)] shadow-[var(--shadow-cyan-soft)] backdrop-blur-md',
        'transition duration-500 ease-out hover:border-cyan-100/35 hover:text-cyan-50 hover:shadow-[var(--shadow-cyan)]',
        className,
      )}
    >
      {children}
    </p>
  )
}

export default SectionLabel
