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
        'group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-[color:var(--color-cyan-border-strong)]',
        'bg-[color:var(--color-cyan-glass)] px-7 py-3.5 text-sm font-semibold text-cyan-50 shadow-[var(--shadow-cyan-button)]',
        'transition duration-500 ease-out hover:border-cyan-100/70 hover:bg-cyan-200/20 hover:shadow-[var(--shadow-cyan-button-strong)] active:scale-[0.99] focus:outline-none sm:w-auto',
        'focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090f]',
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-cyan-100/0 transition duration-500 group-hover:bg-cyan-100/[0.04]" />
      <span className="pointer-events-none absolute -inset-x-8 top-0 h-1/2 bg-gradient-to-b from-white/16 to-transparent opacity-40 transition duration-500 group-hover:opacity-70" />
      <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm transition duration-700 group-hover:left-full" />
      </span>
      <span className="relative">{children}</span>
    </Component>
  )
}

export default PrimaryButton
