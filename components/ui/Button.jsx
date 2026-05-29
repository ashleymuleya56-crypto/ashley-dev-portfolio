'use client'

import { motion } from 'framer-motion'

export function Button({ children, variant = 'primary', size = 'default', className = '', ...props }) {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25',
    outline: 'border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
  }
  
  const sizes = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
    small: 'px-4 py-2 text-sm',
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}