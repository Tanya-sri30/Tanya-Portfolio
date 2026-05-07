import { cn } from '../../utils/cn.js'

const intensityStyles = {
  subtle: 'hover:-translate-y-0.5 hover:scale-[1.01]',
  default: 'hover:-translate-y-1 hover:scale-[1.02]',
  strong: 'hover:-translate-y-1.5 hover:scale-[1.03]',
}

function InteractiveWrapper({
  as,
  children,
  className = '',
  intensity = 'default',
  ...props
}) {
  const Component = as || 'div'

  return (
    <Component
      className={cn(
        'transition duration-500 ease-out will-change-transform active:translate-y-0 active:scale-[0.99]',
        intensityStyles[intensity],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default InteractiveWrapper
