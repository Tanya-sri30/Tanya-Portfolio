import { cn } from '../../utils/cn.js'
import MagneticHover from '../interactions/MagneticHover.jsx'

function GlassCard({ children, className = '', contentClassName = '' }) {
  return (
    <MagneticHover
      className={cn(
        'group relative w-full overflow-hidden rounded-2xl border border-[color:var(--color-glass-border)]',
        'bg-[color:var(--color-glass-surface)] shadow-[var(--shadow-glass)] backdrop-blur-xl',
        'transition duration-500 ease-out hover:border-[color:var(--color-cyan-border-strong)] hover:shadow-[var(--shadow-glass-hover)] motion-reduce:transform-none',
        className,
      )}
      strength={0.08}
      max={8}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.45)] to-transparent opacity-70" />
      <span className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[rgba(0,212,255,0.1)] blur-3xl transition duration-500 group-hover:bg-[rgba(0,212,255,0.16)]" />
      <div className={cn('relative p-4 sm:p-6', contentClassName)}>{children}</div>
    </MagneticHover>
  )
}

export default GlassCard
