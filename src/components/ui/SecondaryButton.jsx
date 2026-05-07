import { cn } from '../../utils/cn.js'

function SecondaryButton({ as, children, href, className = '', ...props }) {
  const Component = as || (href ? 'a' : 'button')

  return (
    <Component
      {...(href ? { href } : {})}
      className={cn(
        'group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white/10',
        'bg-white/[0.035] px-7 py-3.5 text-sm font-semibold text-white/78 shadow-[var(--shadow-dark-soft)] backdrop-blur-md',
        'transition duration-500 ease-out hover:border-white/25 hover:bg-white/[0.07] hover:text-white hover:shadow-[var(--shadow-white-soft)]',
        'active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090f] sm:w-auto',
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-cyan-100/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px scale-x-0 bg-cyan-100/45 transition duration-500 group-hover:scale-x-100" />
      <span className="relative">{children}</span>
    </Component>
  )
}

export default SecondaryButton
