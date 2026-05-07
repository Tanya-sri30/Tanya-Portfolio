import { cn } from '../../utils/cn.js'
import SectionLabel from './SectionLabel.jsx'
import SectionTitle from './SectionTitle.jsx'

function SectionIntro({
  as,
  eyebrow,
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}) {
  const Component = as || 'div'

  return (
    <Component className={cn('flex flex-col items-center text-center', className)}>
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}

      {title && (
        <SectionTitle className={cn('mt-6 sm:mt-8', titleClassName)}>
          {title}
        </SectionTitle>
      )}

      {description && (
        <p
          className={cn(
            'mt-6 max-w-3xl text-pretty text-[0.95rem] leading-7 text-[color:var(--color-text-primary)]/78 sm:mt-7 sm:text-lg sm:leading-9',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </Component>
  )
}

export default SectionIntro
