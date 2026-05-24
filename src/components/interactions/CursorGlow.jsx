import { cn } from '../../utils/cn.js'
import { forwardRef } from 'react'

const CursorGlow = forwardRef(function CursorGlow({ className = '', style }, ref) {
  return (
    <span
      ref={ref}
      className={cn(
        'pointer-events-none fixed left-0 top-0 z-[60] hidden h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 lg:block',
        'bg-[radial-gradient(circle,rgba(125,211,252,0.1),rgba(125,211,252,0.035)_42%,transparent_70%)]',
        className,
      )}
      style={style}
      aria-hidden="true"
    />
  )
})

export default CursorGlow
