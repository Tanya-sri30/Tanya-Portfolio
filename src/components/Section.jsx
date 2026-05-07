import Container from './Container.jsx'
import { cn } from '../utils/cn.js'

function Section({ id, children, className = '', containerClassName = '' }) {
  return (
    <section id={id} className={cn('py-20 sm:py-24 lg:py-32', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

export default Section
