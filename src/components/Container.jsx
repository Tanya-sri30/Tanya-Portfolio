import { cn } from '../utils/cn.js'

function Container({ children, className = '', ...props }) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-6 md:px-10', className)} {...props}>
      {children}
    </div>
  )
}

export default Container
