import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
}

function StaggerContainer({
  as = 'div',
  children,
  className = '',
  once = true,
  amount = 0.25,
  ...props
}) {
  const Component = motion[as] || motion.div

  return (
    <Component
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </Component>
  )
}

function StaggerItem({ as = 'div', children, className = '', ...props }) {
  const Component = motion[as] || motion.div

  return (
    <Component className={className} variants={childVariants} {...props}>
      {children}
    </Component>
  )
}

StaggerContainer.Item = StaggerItem

export default StaggerContainer
