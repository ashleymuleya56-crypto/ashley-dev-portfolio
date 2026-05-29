'use client'

import { useState } from 'react'
import { Menu, X, Github, Linkedin, Twitter, Mail, ArrowRight, Star, CheckCircle } from 'lucide-react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(10, 10, 10, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '64px'
          }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
              <span style={{ color: 'white' }}>ashley</span>
              <span style={{ color: '#666' }}>.dev</span>
            </div>
            
            <div style={{ display: 'flex', gap: '32px' }}>
              <a href="#work" style={{ color: '#999', textDecoration: 'none' }}>Work</a>
              <a href="#projects" style={{ color: '#999', textDecoration: 'none' }}>Projects</a>
              <a href="#skills" style={{ color: '#999', textDecoration: 'none' }}>Skills</a>
              <a href="#contact" style={{ color: '#999', textDecoration: 'none' }}>Contact</a>
              <button style={{
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                color: 'white',
                border: 'none',
                fontSize: '14px',
                cursor: 'pointer'
              }}>Resume</button>
            </div>
            
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}>
              {menuOpen ? <X color="white" size={20} /> : <Menu color="white" size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#0a0a0a',
          zIndex: 40,
          paddingTop: '80px',
          paddingLeft: '24px',
          paddingRight: '24px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <a href="#work" style={{ color: '#999', textDecoration: 'none', fontSize: '18px' }}>Work</a>
            <a href="#projects" style={{ color: '#999', textDecoration: 'none', fontSize: '18px' }}>Projects</a>
            <a href="#skills" style={{ color: '#999', textDecoration: 'none', fontSize: '18px' }}>Skills</a>
            <a href="#contact" style={{ color: '#999', textDecoration: 'none', fontSize: '18px' }}>Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div style={{ padding: '128px 24px 80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            fontSize: '14px',
            marginBottom: '32px'
          }}>
            <Star size={12} color="#3B82F6" />
            <span style={{ color: '#3B82F6' }}>Available for work</span>
          </div>
          <h1 style={{ 
            fontSize: '60px', 
            fontWeight: 'bold',
            marginBottom: '24px',
            color: 'white'
          }}>
            Ashley Muleya
          </h1>
          <p style={{ fontSize: '20px', color: '#999', marginBottom: '12px' }}>
            IT Support • Software Developer • Tech Innovator
          </p>
          <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto 32px auto' }}>
            Transforming complex problems into elegant digital solutions with cutting-edge technology.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button style={{
              padding: '10px 24px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              View Projects <ArrowRight size={16} />
            </button>
            <button style={{
              padding: '10px 24px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#ccc',
              cursor: 'pointer'
            }}>
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ padding: '48px 24px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '32px',
            textAlign: 'center'
          }}>
            <div><div style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>5+</div><div style={{ fontSize: '14px', color: '#666' }}>Years</div></div>
            <div><div style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>50+</div><div style={{ fontSize: '14px', color: '#666' }}>Projects</div></div>
            <div><div style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>20+</div><div style={{ fontSize: '14px', color: '#666' }}>Clients</div></div>
            <div><div style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>24/7</div><div style={{ fontSize: '14px', color: '#666' }}>Support</div></div>
            <div><div style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>100%</div><div style={{ fontSize: '14px', color: '#666' }}>Success</div></div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Technical <span style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Expertise</span></h2>
            <p style={{ color: '#666' }}>Technologies I work with</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px'
          }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontWeight: '600', color: 'white' }}>Frontend Development</h3>
                <span style={{ fontSize: '14px', color: '#3B82F6' }}>92%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', marginBottom: '16px' }}>
                <div style={{ width: '92%', height: '100%', background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)', borderRadius: '9999px' }}></div>
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>React, Next.js, TypeScript, Tailwind</p>
            </div>
            
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontWeight: '600', color: 'white' }}>Backend Systems</h3>
                <span style={{ fontSize: '14px', color: '#3B82F6' }}>88%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', marginBottom: '16px' }}>
                <div style={{ width: '88%', height: '100%', background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)', borderRadius: '9999px' }}></div>
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>Node.js, Python, Go, PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div id="work" style={{ padding: '80px 24px', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Work <span style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Experience</span></h2>
            <p style={{ color: '#666' }}>Professional journey</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white' }}>Senior Software Engineer</h3>
                  <p style={{ color: '#3B82F6', marginTop: '4px' }}>Tech Innovations Inc.</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#999' }}>2022 — Present</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>San Francisco, CA</div>
                </div>
              </div>
              <ul style={{ marginTop: '16px' }}>
                <li style={{ color: '#999', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={14} color="#3B82F6" /> Leading frontend architecture for enterprise products</li>
                <li style={{ color: '#999', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={14} color="#3B82F6" /> Mentoring junior developers</li>
                <li style={{ color: '#999', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={14} color="#3B82F6" /> Optimizing performance by 45%</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white' }}>Full Stack Developer</h3>
                  <p style={{ color: '#3B82F6', marginTop: '4px' }}>Digital Solutions Co.</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#999' }}>2020 — 2022</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>New York, NY</div>
                </div>
              </div>
              <ul style={{ marginTop: '16px' }}>
                <li style={{ color: '#999', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={14} color="#3B82F6" /> Built 15+ production web applications</li>
                <li style={{ color: '#999', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={14} color="#3B82F6" /> Implemented CI/CD pipelines</li>
                <li style={{ color: '#999', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={14} color="#3B82F6" /> Reduced load times by 60%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Featured <span style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span></h2>
            <p style={{ color: '#666' }}>Selected work</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px'
          }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>AI Analytics Platform</h3>
              <p style={{ color: '#666', marginBottom: '16px' }}>Real-time data visualization with ML predictions</p>
              <button style={{ color: '#3B82F6', background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Learn more <ArrowRight size={12} />
              </button>
            </div>
            
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>Blockchain Exchange</h3>
              <p style={{ color: '#666', marginBottom: '16px' }}>Decentralized crypto trading platform</p>
              <button style={{ color: '#3B82F6', background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Learn more <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" style={{ padding: '80px 24px', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Let's <span style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Work Together</span></h2>
          <p style={{ color: '#666', marginBottom: '32px' }}>Have a project in mind? Let's talk.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
            <a href="#" style={{ padding: '12px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'inline-flex' }}>
              <Github size={20} color="#999" />
            </a>
            <a href="#" style={{ padding: '12px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'inline-flex' }}>
              <Linkedin size={20} color="#999" />
            </a>
            <a href="#" style={{ padding: '12px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'inline-flex' }}>
              <Twitter size={20} color="#999" />
            </a>
            <a href="#" style={{ padding: '12px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'inline-flex' }}>
              <Mail size={20} color="#999" />
            </a>
          </div>
          
          <button style={{
            padding: '12px 32px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}>
            Get in Touch
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '32px 24px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#444' }}>© 2024 Ashley Muleya. All rights reserved.</p>
      </footer>
    </div>
  )
}