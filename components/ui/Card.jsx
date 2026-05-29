'use client'

import { motion } from 'framer-motion'

export function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`glass-card p-8 transition-all duration-300 ${hover ? 'hover:shadow-2xl hover:shadow-blue-500/10' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}