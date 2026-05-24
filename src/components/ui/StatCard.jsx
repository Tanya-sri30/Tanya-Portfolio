import { cn } from '../../utils/cn.js'
import GlassCard from './GlassCard.jsx'

function StatCard({ label, value, detail, className = '' }) {
  return (
    <GlassCard className={cn('text-left', className)} contentClassName="p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-4 sm:mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-primary)]" />
        <span className="h-px flex-1 bg-gradient-to-r from-[rgba(17,17,17,0.14)] to-transparent" />
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
        {label}
      </p>
      <p className="mt-2 font-display text-2xl font-semibold leading-none text-[color:var(--color-text-primary)] sm:text-3xl">
        {value}
      </p>
      {detail && <p className="mt-3 text-xs leading-5 text-[color:var(--color-text-muted)]">{detail}</p>}
    </GlassCard>
  )
}

export default StatCard
