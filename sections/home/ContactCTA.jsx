'use client'

import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'  // Changed from '@/components/ui/Button'
import { Mail, ArrowRight } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <Mail className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              Ready to Build Something <span className="text-gradient">Amazing?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let's collaborate and transform your ideas into exceptional digital experiences
            </p>
            <Button size="large">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}