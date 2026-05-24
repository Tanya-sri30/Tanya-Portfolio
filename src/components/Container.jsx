import { cn } from '../utils/cn.js'

function Container({ children, className = '' }) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12', className)}>
      {children}
    </div>
  )
}

export default Container
