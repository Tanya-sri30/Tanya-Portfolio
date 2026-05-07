import { cn } from '../../utils/cn.js'
import SectionLabel from './SectionLabel.jsx'
import SectionTitle from './SectionTitle.jsx'

function SectionIntro({
  eyebrow,
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}

      {title && (
        <SectionTitle className={cn('mt-7 sm:mt-8', titleClassName)}>
          {title}
        </SectionTitle>
      )}

      {description && (
        <p
          className={cn(
            'mt-7 max-w-3xl text-pretty text-base leading-8 text-slate-300/90 sm:text-lg sm:leading-9',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionIntro
