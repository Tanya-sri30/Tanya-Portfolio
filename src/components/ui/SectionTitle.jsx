import { cn } from '../../utils/cn.js'

function SectionTitle({ children, className = '' }) {
  return (
    <h1
      className={cn(
        'max-w-6xl text-balance text-5xl font-semibold leading-[0.95] tracking-normal text-white',
        'sm:text-7xl lg:text-8xl xl:text-9xl',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export default SectionTitle
