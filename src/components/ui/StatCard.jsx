import { cn } from '../../utils/cn.js'
import GlassCard from './GlassCard.jsx'

function StatCard({ label, value, detail, className = '' }) {
  return (
    <GlassCard className={cn('text-left', className)} contentClassName="p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[var(--shadow-cyan-soft)]" />
        <span className="h-px flex-1 bg-gradient-to-r from-cyan-100/25 to-transparent" />
      </div>

      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/55">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold leading-none text-white sm:text-3xl">
        {value}
      </p>
      {detail && <p className="mt-3 text-xs leading-5 text-slate-300/70">{detail}</p>}
    </GlassCard>
  )
}

export default StatCard
