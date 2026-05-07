import { cn } from '../../utils/cn.js'
import MagneticHover from '../interactions/MagneticHover.jsx'

function FloatingPanel({ children, className = '', contentClassName = '' }) {
  return (
    <MagneticHover
      className={cn(
        'relative w-full overflow-hidden rounded-2xl border border-[rgba(232,237,242,0.1)] sm:rounded-3xl',
        'bg-[linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))]',
        'shadow-[var(--shadow-floating-panel)] backdrop-blur-2xl',
        'transition duration-500 hover:border-[color:var(--color-cyan-border)] hover:shadow-[var(--shadow-floating-panel-hover)] motion-reduce:transform-none',
        className,
      )}
      strength={0.06}
      max={7}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,212,255,0.1),transparent_30%)]" />
      <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[rgba(0,212,255,0.28)]" />
      <div className={cn('relative p-4 sm:p-6 lg:p-7', contentClassName)}>{children}</div>
    </MagneticHover>
  )
}

export default FloatingPanel
