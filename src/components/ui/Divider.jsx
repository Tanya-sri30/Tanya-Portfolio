import { cn } from '../../utils/cn.js'

function Divider({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent',
        'shadow-[var(--shadow-cyan-line)]',
        className,
      )}
    />
  )
}

export default Divider
