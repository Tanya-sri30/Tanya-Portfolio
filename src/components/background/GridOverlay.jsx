import { cn } from '../../utils/cn.js'

function GridOverlay({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute inset-0 bg-[image:linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)]',
        'bg-[size:48px_48px] opacity-35 [mask-image:radial-gradient(circle_at_50%_32%,black_0%,transparent_72%)] sm:bg-[size:64px_64px]',
        className,
      )}
    />
  )
}

export default GridOverlay
