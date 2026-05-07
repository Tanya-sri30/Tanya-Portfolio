import { cn } from '../../utils/cn.js'

function SectionTitle({ children, className = '' }) {
  return (
    <h1
      className={cn(
        'max-w-6xl text-balance font-display text-[clamp(3rem,14vw,5.25rem)] font-semibold leading-[0.98] tracking-normal text-[color:var(--color-text-primary)]',
        'sm:text-7xl sm:leading-[0.95] lg:text-8xl xl:text-9xl',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export default SectionTitle
