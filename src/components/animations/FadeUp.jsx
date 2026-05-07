import Reveal from './Reveal.jsx'

function FadeUp({ children, distance = 16, duration = 0.78, ...props }) {
  return (
    <Reveal distance={distance} duration={duration} {...props}>
      {children}
    </Reveal>
  )
}

export default FadeUp
