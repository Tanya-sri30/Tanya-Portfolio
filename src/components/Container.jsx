import { cn } from '../utils/cn.js'

function Container({ children, className = '' }) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}

export default Container
