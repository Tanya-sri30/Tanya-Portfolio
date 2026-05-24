import { cn } from '../../utils/cn.js'
import MagneticHover from '../interactions/MagneticHover.jsx'

function FloatingPanel({ children, className = '', contentClassName = '' }) {
  return (
    <MagneticHover
      className={cn(
        'relative w-full overflow-hidden rounded-2xl border border-white/10',
        'bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.25)]',
        'transition duration-500 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.045] hover:shadow-[0_16px_48px_rgba(0,0,0,0.28)] motion-reduce:transform-none',
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
