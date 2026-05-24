import { cn } from '../../utils/cn.js'

function SecondaryButton({ as, children, href, className = '', ...props }) {
  const Component = as || (href ? 'a' : 'button')

  return (
    <Component
      {...(href ? { href } : {})}
      className={cn(
        'inline-flex w-full items-center justify-center rounded-full border border-white/10',
        'min-h-12 bg-transparent px-6 py-3.5 text-sm font-semibold tracking-normal text-zinc-300 shadow-none sm:px-7',
        'transition duration-500 ease-out hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.055] hover:text-white active:translate-y-0',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)] sm:w-auto',
        className,
      )}
      {...props}
    >
      <span className="relative">{children}</span>
    </Component>
  )
}

export default SecondaryButton
