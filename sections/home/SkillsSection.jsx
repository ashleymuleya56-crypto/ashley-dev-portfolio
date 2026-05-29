'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Smartphone, Shield, Sparkles } from 'lucide-react'

const skills = [
  { name: 'Frontend Development', icon: Code2, level: 95, description: 'React, Next.js, Vue, TypeScript' },
  { name: 'Backend Systems', icon: Database, level: 90, description: 'Node.js, Python, Go, PostgreSQL' },
  { name: 'Cloud Architecture', icon: Cloud, level: 85, description: 'AWS, Azure, Docker, Kubernetes' },
  { name: 'Mobile Development', icon: Smartphone, level: 80, description: 'React Native, Flutter' },
  { name: 'Security', icon: Shield, level: 75, description: 'OAuth, JWT, Encryption' },
  { name: 'AI/ML', icon: Sparkles, level: 70, description: 'TensorFlow, PyTorch, LLMs' },
]

export function SkillsSection() {
  return (
    <section className="py-24 relative bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Core <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technical expertise and proficiency across the development stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <skill.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-heading font-bold">{skill.name}</h3>
                    <span className="text-sm text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 mb-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}