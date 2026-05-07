import GradientOrb from './GradientOrb.jsx'
import GridOverlay from './GridOverlay.jsx'

function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[color:var(--color-background)]" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(0,212,255,0.12),transparent_32rem),radial-gradient(circle_at_15%_82%,rgba(79,142,255,0.1),transparent_26rem),linear-gradient(135deg,#080c10_0%,#0d1117_48%,#05070a_100%)]" />

      <GridOverlay />

      <GradientOrb
        className="-top-24 left-[12%]"
        color="rgba(0, 212, 255, 0.14)"
        size="h-80 w-80 sm:h-[34rem] sm:w-[34rem]"
        duration="24s"
      />
      <GradientOrb
        className="right-[8%] top-[22%]"
        color="rgba(79, 142, 255, 0.11)"
        size="h-72 w-72 sm:h-[28rem] sm:w-[28rem]"
        delay="-6s"
        duration="28s"
      />
      <GradientOrb
        className="bottom-[-10rem] left-[36%]"
        color="rgba(0, 212, 255, 0.08)"
        size="h-96 w-96 sm:h-[36rem] sm:w-[36rem]"
        delay="-12s"
        duration="32s"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,12,16,0.08),rgba(8,12,16,0.36)_55%,rgba(8,12,16,0.72))]" />
      <div className="ambient-scanline absolute left-[8%] right-[8%] top-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.15)] to-transparent" />
    </div>
  )
}

export default AmbientBackground
