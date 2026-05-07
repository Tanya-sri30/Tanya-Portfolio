import Container from './Container.jsx'
import { cn } from '../utils/cn.js'

const spacingStyles = {
  compact: 'py-16 sm:py-20 lg:py-24',
  default: 'py-20 sm:py-28 lg:py-36',
  spacious: 'py-24 sm:py-32 lg:py-44',
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
          ? 'flex min-h-[100svh] items-center py-28 sm:py-32 lg:py-36'
          : spacingStyles[spacing],
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

export default Section
