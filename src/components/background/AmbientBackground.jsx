import GradientOrb from './GradientOrb.jsx'

function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[color:var(--color-background)]" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_8%,rgba(125,211,252,0.045),transparent_34rem),radial-gradient(circle_at_84%_34%,rgba(255,255,255,0.035),transparent_28rem),linear-gradient(180deg,#0b0f14_0%,#11161d_52%,#0b0f14_100%)]" />

      <GradientOrb
        className="-top-24 left-[12%]"
        color="rgba(125, 211, 252, 0.04)"
        size="h-80 w-80 sm:h-[34rem] sm:w-[34rem]"
        duration="24s"
      />
      <GradientOrb
        className="right-[8%] top-[22%]"
        color="rgba(255, 255, 255, 0.028)"
        size="h-72 w-72 sm:h-[28rem] sm:w-[28rem]"
        delay="-6s"
        duration="28s"
      />
      <GradientOrb
        className="bottom-[-10rem] left-[36%]"
        color="rgba(125, 211, 252, 0.032)"
        size="h-96 w-96 sm:h-[36rem] sm:w-[36rem]"
        delay="-12s"
        duration="32s"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,15,20,0.06),rgba(11,15,20,0.34)_55%,rgba(11,15,20,0.72))]" />
    </div>
  )
}

export default AmbientBackground
