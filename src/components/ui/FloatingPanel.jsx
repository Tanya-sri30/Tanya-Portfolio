import { cn } from '../../utils/cn.js'
import MagneticHover from '../interactions/MagneticHover.jsx'

function FloatingPanel({ children, className = '', contentClassName = '' }) {
  return (
    <MagneticHover
      className={cn(
        'relative overflow-hidden rounded-3xl border border-white/10',
        'bg-[linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))]',
        'shadow-[var(--shadow-floating-panel)] backdrop-blur-2xl',
        'transition duration-500 hover:border-[color:var(--color-cyan-border)] hover:shadow-[var(--shadow-floating-panel-hover)]',
        className,
      )}
      strength={0.06}
      max={7}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(103,232,249,0.12),transparent_30%)]" />
      <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-cyan-100/30" />
      <div className={cn('relative p-5 sm:p-6 lg:p-7', contentClassName)}>{children}</div>
    </MagneticHover>
  )
}

export default FloatingPanel
