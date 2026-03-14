import { motion } from 'framer-motion'

const spring = { type: 'spring', stiffness: 100, damping: 20 }

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
}

export function StaggerContainer({ children, className = '' }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}

export function FadeUp({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ ...spring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
