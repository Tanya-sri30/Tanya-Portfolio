import Reveal from './Reveal.jsx'

function FadeUp({ children, distance = 14, duration = 0.65, ...props }) {
  return (
    <Reveal distance={distance} duration={duration} {...props}>
      {children}
    </Reveal>
  )
}

export default FadeUp
