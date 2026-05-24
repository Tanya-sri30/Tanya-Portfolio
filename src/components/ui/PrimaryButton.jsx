import { cn } from '../../utils/cn.js'

function PrimaryButton({
  as,
  children,
  href,
  className = '',
  ...props
}) {
  const Component = as || (href ? 'a' : 'button')

  return (
    <Component
      {...(href ? { href } : {})}
      className={cn(
        'inline-flex w-full items-center justify-center rounded-full border border-white/10',
        'min-h-12 bg-[color:var(--color-text-primary)] px-6 py-3.5 text-sm font-semibold tracking-normal text-[color:var(--color-background)] shadow-[0_10px_32px_rgba(0,0,0,0.18)] sm:px-7',
        'transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-white active:translate-y-0 focus:outline-none sm:w-auto',
        'focus-visible:ring-2 focus-visible:ring-[rgba(125,211,252,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)]',
        className,
      )}
      {...props}
    >
      <span className="relative">{children}</span>
    </Component>
  )
}

export default PrimaryButton
