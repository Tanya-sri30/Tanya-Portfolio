import { cn } from '../../utils/cn.js'
import MagneticHover from '../interactions/MagneticHover.jsx'

function GlassCard({ children, className = '', contentClassName = '' }) {
  return (
    <MagneticHover
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-[color:var(--color-glass-border)]',
        'bg-[color:var(--color-glass-surface)] shadow-[var(--shadow-glass)] backdrop-blur-xl',
        'transition duration-500 ease-out hover:border-[color:var(--color-cyan-border-strong)] hover:shadow-[var(--shadow-glass-hover)]',
        className,
      )}
      strength={0.08}
      max={8}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/45 to-transparent opacity-70" />
      <span className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-200/10 blur-3xl transition duration-500 group-hover:bg-cyan-200/16" />
      <div className={cn('relative p-5 sm:p-6', contentClassName)}>{children}</div>
    </MagneticHover>
  )
}

export default GlassCard
