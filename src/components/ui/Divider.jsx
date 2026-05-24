import { cn } from '../../utils/cn.js'

function Divider({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-[rgba(17,17,17,0.14)] to-transparent',
        className,
      )}
    />
  )
}

export default Divider
