import { cn } from '../../utils/cn.js'

function GradientOrb({
  className = '',
  color = 'rgba(34, 211, 238, 0.16)',
  size = 'h-72 w-72',
  delay = '0s',
  duration = '18s',
}) {
  return (
    <span
      className={cn(
        'ambient-orb absolute rounded-full blur-3xl will-change-transform',
        size,
        className,
      )}
      style={{
        '--orb-color': color,
        '--orb-delay': delay,
        '--orb-duration': duration,
      }}
    />
  )
}

export default GradientOrb
