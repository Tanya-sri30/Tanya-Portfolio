import Container from './Container.jsx'
import { cn } from '../utils/cn.js'

const spacingStyles = {
  compact: 'py-16 lg:py-24',
  default: 'py-16 lg:py-24',
  spacious: 'py-16 lg:py-28',
}

function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  fullScreen = false,
  spacing = 'default',
}) {
  return (
    <section
      id={id}
      className={cn(
        fullScreen
          ? 'flex min-h-[100svh] items-center py-24 lg:py-32'
          : spacingStyles[spacing],
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

export default Section
