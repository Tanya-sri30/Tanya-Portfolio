import { cn } from '../../utils/cn.js'
import SectionLabel from './SectionLabel.jsx'
import SectionTitle from './SectionTitle.jsx'

function SectionIntro({
  as,
  eyebrow,
  title,
  titleAs,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}) {
  const Component = as || 'div'

  return (
    <Component className={cn('flex flex-col items-start text-left', className)}>
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}

      {title && (
        <SectionTitle as={titleAs} className={cn(eyebrow && 'mt-4', titleClassName)}>
          {title}
        </SectionTitle>
      )}

      {description && (
        <p
          className={cn(
            'mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg',
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
