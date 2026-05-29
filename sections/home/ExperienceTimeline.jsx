'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading frontend architecture and mentoring junior developers. Implemented scalable solutions serving 1M+ users.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    location: 'New York, NY',
    period: '2020 - 2022',
    description: 'Developed full-stack applications using React and Node.js. Improved performance by 40%.',
  },
  {
    title: 'IT Support Specialist',
    company: 'Enterprise Systems Ltd.',
    location: 'Austin, TX',
    period: '2018 - 2020',
    description: 'Provided technical support and infrastructure management for 500+ employees.',
  },
]

export function ExperienceTimeline() {
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
            Experience <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional journey and career milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col lg:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="flex-1 lg:text-right">
                <div className="glass-card p-6 ml-12 lg:ml-0">
                  <div className="flex items-center gap-2 mb-3 lg:justify-end">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    <h3 className="text-xl font-heading font-bold">{exp.title}</h3>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-gray-300 lg:justify-end">
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm lg:justify-end">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm lg:justify-end">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </div>
              
              <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 top-6">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </div>
              
              <div className="flex-1 hidden lg:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}