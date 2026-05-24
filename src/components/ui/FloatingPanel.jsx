import { cn } from '../../utils/cn.js'
import MagneticHover from '../interactions/MagneticHover.jsx'

function FloatingPanel({ children, className = '', contentClassName = '' }) {
  return (
    <MagneticHover
      className={cn(
        'relative w-full overflow-hidden rounded-2xl border border-[rgba(17,17,17,0.08)]',
        'bg-[rgba(255,255,255,0.55)] shadow-[var(--shadow-soft)]',
        'transition duration-500 ease-out hover:-translate-y-1 hover:border-[rgba(217,107,43,0.2)] hover:bg-[rgba(255,255,255,0.7)] hover:shadow-[0_16px_34px_rgba(0,0,0,0.06)] motion-reduce:transform-none',
        className,
      )}
      strength={0.03}
      max={4}
    >
      <div className={cn('relative p-5 sm:p-6', contentClassName)}>{children}</div>
    </MagneticHover>
  )
}

export default FloatingPanel
