import { cn } from '../../utils/cn.js'
import { forwardRef } from 'react'

const CursorGlow = forwardRef(function CursorGlow({ className = '', style }, ref) {
  return (
    <span
      ref={ref}
      className={cn(
        'pointer-events-none fixed left-0 top-0 z-[60] hidden h-20 w-20 rounded-full opacity-0 blur-xl transition-opacity duration-500 lg:block',
        'bg-[radial-gradient(circle,rgba(217,107,43,0.12),rgba(239,141,84,0.04)_42%,transparent_70%)]',
        className,
      )}
      style={style}
      aria-hidden="true"
    />
  )
})

export default CursorGlow
