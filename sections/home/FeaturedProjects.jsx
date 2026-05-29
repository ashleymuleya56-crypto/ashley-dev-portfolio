'use client'

import { motion } from 'framer-motion'
import { Button } from '../../components/ui/Button'  // Changed from '@/components/ui/Button'
import { Card } from '../../components/ui/Card'      // Changed from '@/components/ui/Card'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'AI Analytics Platform',
    description: 'Real-time analytics dashboard powered by machine learning, processing millions of data points.',
    tech: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
    image: '/api/placeholder/400/300',
  },
  {
    title: 'Blockchain Exchange',
    description: 'Decentralized cryptocurrency exchange with real-time trading and smart contracts.',
    tech: ['React', 'Solidity', 'Web3.js', 'Node.js'],
    image: '/api/placeholder/400/300',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Enterprise cloud management platform with automated scaling and monitoring.',
    tech: ['Go', 'Kubernetes', 'AWS', 'Terraform'],
    image: '/api/placeholder/400/300',
  },
]

export function FeaturedProjects() {
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden group">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}