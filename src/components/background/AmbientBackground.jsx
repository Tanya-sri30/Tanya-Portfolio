import GradientOrb from './GradientOrb.jsx'

function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[color:var(--color-background)]" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(93,162,113,0.1),transparent_30rem),radial-gradient(circle_at_82%_20%,rgba(217,107,43,0.14),transparent_34rem),linear-gradient(180deg,#f5f2eb_0%,#ede7dc_52%,#f5f2eb_100%)]" />

      <GradientOrb
        className="-top-24 left-[12%]"
        color="rgba(217, 107, 43, 0.12)"
        size="h-80 w-80 sm:h-[34rem] sm:w-[34rem]"
        duration="24s"
      />
      <GradientOrb
        className="right-[8%] top-[22%]"
        color="rgba(93, 162, 113, 0.08)"
        size="h-72 w-72 sm:h-[28rem] sm:w-[28rem]"
        delay="-6s"
        duration="28s"
      />
      <GradientOrb
        className="bottom-[-10rem] left-[36%]"
        color="rgba(239, 141, 84, 0.08)"
        size="h-96 w-96 sm:h-[36rem] sm:w-[36rem]"
        delay="-12s"
        duration="32s"
      />

      <div className="absolute left-1/2 top-9 h-2 w-2 -translate-x-1/2 rounded-full bg-[color:var(--color-accent-green)]" />
      <div className="absolute right-[8%] top-[18%] h-4 w-4 rounded-full border border-[color:var(--color-accent-green)]/60" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(245,242,235,0.1),rgba(245,242,235,0.34)_55%,rgba(245,242,235,0.72))]" />
    </div>
  )
}

export default AmbientBackground
