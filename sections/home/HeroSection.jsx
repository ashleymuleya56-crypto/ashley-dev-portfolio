'use client'

import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'
import { ArrowRight, Download, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Premium Development</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-heading font-bold leading-tight">
              <span className="text-white">Ashley</span>
              <span className="text-gradient"> Muleya</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              IT Support • Software Developer • Tech Innovator
            </p>
            
            <p className="text-gray-400 leading-relaxed max-w-md">
              Transforming complex problems into elegant digital solutions with cutting-edge technology and premium design.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="large">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="large">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Premium Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <span className="text-4xl font-bold text-gradient">AM</span>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic text-center mb-6">
                  "Building the future, one line of code at a time. Passionate about creating exceptional digital experiences that make a difference."
                </blockquote>
                <div className="flex justify-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
          <div className="w-1 h-2 bg-white/40 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}