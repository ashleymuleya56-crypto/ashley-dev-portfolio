'use client'

import { motion } from 'framer-motion'
import { 
  SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, 
  SiPython, SiTypescript, SiMongodb, SiPostgresql,
  SiDocker, SiFigma
} from 'react-icons/si'

const technologies = [
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
]

export function TechStackSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass-card p-6 text-center group cursor-pointer"
            >
              <tech.icon 
                className="w-12 h-12 mx-auto mb-4 transition-all duration-300 group-hover:scale-110" 
                style={{ color: tech.color }}
              />
              <h3 className="text-white font-medium">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}