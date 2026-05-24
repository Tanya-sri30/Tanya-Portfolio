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
        'inline-flex w-full items-center justify-center rounded-full border border-[rgba(17,17,17,0.08)]',
        'min-h-12 bg-[color:var(--color-accent-primary)] px-6 py-3.5 text-sm font-semibold tracking-normal text-white shadow-[0_10px_30px_rgba(217,107,43,0.16)] sm:px-7',
        'transition duration-500 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--color-accent-soft)] hover:shadow-[0_14px_34px_rgba(217,107,43,0.2)] active:translate-y-0 focus:outline-none sm:w-auto',
        'focus-visible:ring-2 focus-visible:ring-[rgba(217,107,43,0.32)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)]',
        className,
      )}
      {...props}
    >
      <span className="relative">{children}</span>
    </Component>
  )
}

export default PrimaryButton
