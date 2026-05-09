import { cn } from '../../utils/cn.js'

function SectionLabel({ children, className = '' }) {
  return (
    <p
      className={cn(
        'inline-flex items-center rounded-full border border-gray-600',
        'bg-[#1a1a1a] px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.32em]',
        'text-gray-300 shadow-lg backdrop-blur-md',
        'transition duration-500 ease-out hover:border-cyan-400 hover:text-cyan-400 hover:shadow-xl',
        className,
      )}
    >
      {children}
    </p>
  )
}

export default SectionLabel
