import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

function Reveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  distance = 18,
  once = true,
  amount = 0.28,
  ...props
}) {
  const Component = motion[as] || motion.div

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ delay, duration, ease }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Reveal
