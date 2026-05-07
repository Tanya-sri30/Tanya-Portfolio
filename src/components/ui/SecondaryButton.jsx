import { cn } from '../../utils/cn.js'

function SecondaryButton({ as, children, href, className = '', ...props }) {
  const Component = as || (href ? 'a' : 'button')

  return (
    <Component
      {...(href ? { href } : {})}
      className={cn(
        'group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-[rgba(232,237,242,0.1)]',
        'min-h-12 bg-[color:var(--color-surface)] px-6 py-3.5 font-system text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-primary)]/80 shadow-[var(--shadow-dark-soft)] backdrop-blur-md sm:px-7',
        'transition duration-500 ease-out hover:border-[color:var(--color-cyan-border)] hover:bg-[color:var(--color-glass-surface)] hover:text-[color:var(--color-text-primary)] hover:shadow-[var(--shadow-white-soft)]',
        'active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(232,237,242,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)] sm:w-auto',
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.1)] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px scale-x-0 bg-[rgba(0,212,255,0.45)] transition duration-500 group-hover:scale-x-100" />
      <span className="relative">{children}</span>
    </Component>
  )
}

export default SecondaryButton
