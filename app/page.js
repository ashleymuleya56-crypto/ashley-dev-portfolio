'use client'

import { useState } from 'react'
import { Menu, X, Github, Linkedin, Twitter, Mail, ArrowRight, Star, CheckCircle } from 'lucide-react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Gmail Icon Component
const GmailIcon = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 6L12 13L2 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

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
            
            {/* Desktop Menu */}
            <div style={{ display: 'flex', gap: '32px' }}>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Home</a>
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
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                display: 'block',
                padding: '8px',
                borderRadius: '8px',
                transition: 'background 0.3s'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {menuOpen ? <X color="white" size={24} /> : <Menu color="white" size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slide from Right */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: menuOpen ? '300px' : '0',
        backgroundColor: '#0a0a0a',
        backdropFilter: 'blur(20px)',
        borderLeft: menuOpen ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        zIndex: 49,
        transition: 'width 0.3s ease-in-out',
        overflow: 'hidden',
        boxShadow: menuOpen ? '-10px 0 30px rgba(0, 0, 0, 0.5)' : 'none'
      }}>
        <div style={{
          padding: '80px 24px 24px 24px',
          opacity: menuOpen ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out 0.1s',
          visibility: menuOpen ? 'visible' : 'hidden'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a 
              href="#" 
              onClick={() => setMenuOpen(false)}
              style={{ 
                color: '#ccc', 
                textDecoration: 'none', 
                fontSize: '18px',
                padding: '12px 16px',
                borderRadius: '12px',
                transition: 'all 0.2s',
                display: 'block'
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#ccc'; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
              🏠 Home
            </a>
            <a 
              href="#work" 
              onClick={() => setMenuOpen(false)}
              style={{ 
                color: '#ccc', 
                textDecoration: 'none', 
                fontSize: '18px',
                padding: '12px 16px',
                borderRadius: '12px',
                transition: 'all 0.2s',
                display: 'block'
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#ccc'; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
              💼 Work
            </a>
            <a 
              href="#projects" 
              onClick={() => setMenuOpen(false)}
              style={{ 
                color: '#ccc', 
                textDecoration: 'none', 
                fontSize: '18px',
                padding: '12px 16px',
                borderRadius: '12px',
                transition: 'all 0.2s',
                display: 'block'
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#ccc'; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
              📁 Projects
            </a>
            <a 
              href="#skills" 
              onClick={() => setMenuOpen(false)}
              style={{ 
                color: '#ccc', 
                textDecoration: 'none', 
                fontSize: '18px',
                padding: '12px 16px',
                borderRadius: '12px',
                transition: 'all 0.2s',
                display: 'block'
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#ccc'; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
              ⚡ Skills
            </a>
            <a 
              href="#contact" 
              onClick={() => setMenuOpen(false)}
              style={{ 
                color: '#ccc', 
                textDecoration: 'none', 
                fontSize: '18px',
                padding: '12px 16px',
                borderRadius: '12px',
                transition: 'all 0.2s',
                display: 'block'
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#ccc'; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
              📧 Contact
            </a>
            
            <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', margin: '16px 0' }}></div>
            
            <button 
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                color: 'white',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                marginTop: '8px',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.02)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            >
              📄 Download Resume
            </button>

            {/* Social Icons in Menu */}
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              marginTop: '24px',
              justifyContent: 'center'
            }}>
              <a href="#" style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}>
                <Github size={18} color="#999" />
              </a>
              <a href="#" style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}>
                <Linkedin size={18} color="#999" />
              </a>
              <a href="#" style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', transition: 'all 0.2s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}>
                <Twitter size={18} color="#999" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div 
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 48,
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
        />
      )}

      {/* Hero Section with Picture - Mobile Responsive */}
      <div style={{ padding: '128px 24px 80px 24px' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '40px', 
          alignItems: 'center' 
        }}>
          
          {/* Left Side - Text Content */}
          <div style={{ textAlign: 'left' }}>
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
              fontSize: 'clamp(36px, 8vw, 56px)', 
              fontWeight: 'bold',
              marginBottom: '24px',
              color: 'white'
            }}>
              Ashley Muleya
            </h1>
            <p style={{ fontSize: 'clamp(16px, 4vw, 20px)', color: '#999', marginBottom: '12px' }}>
              IT Support • Software Developer • Tech Innovator
            </p>
            <p style={{ color: '#666', marginBottom: '32px', lineHeight: '1.6' }}>
              Transforming complex problems into elegant digital solutions with cutting-edge technology.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button style={{
                padding: '12px 24px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: 'clamp(14px, 3vw, 16px)'
              }}>
                View Projects <ArrowRight size={16} />
              </button>
              <button style={{
                padding: '12px 24px',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#ccc',
                cursor: 'pointer',
                fontSize: 'clamp(14px, 3vw, 16px)'
              }}>
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Side - Your Picture (Centered on Mobile) */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            order: -1
          }}>
            <div style={{
              width: 'clamp(200px, 60vw, 320px)',
              height: 'clamp(200px, 60vw, 320px)',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
              padding: '4px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: '#1a1a1a',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <img 
                  src="/images/ashley.png" 
                  alt="Ashley Muleya"
                  style={{
                    width: 'auto',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 30%',
                    transform: 'scale(1.1)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Mobile Responsive */}
      <div style={{ padding: '48px 24px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: 'clamp(24px, 6vw, 30px)', fontWeight: 'bold', color: 'white' }}>1.5+</div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Years Experience</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(24px, 6vw, 30px)', fontWeight: 'bold', color: 'white' }}>10+</div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Projects Completed</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(24px, 6vw, 30px)', fontWeight: 'bold', color: 'white' }}>8+</div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Happy Clients</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(24px, 6vw, 30px)', fontWeight: 'bold', color: 'white' }}>24/7</div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Support</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(24px, 6vw, 30px)', fontWeight: 'bold', color: 'white' }}>100%</div>
              <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>Commitment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section - Mobile Responsive */}
      <div id="skills" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Professional <span style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Skills</span></h2>
            <p style={{ color: '#666' }}>Comprehensive technical expertise</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {/* Networking */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontWeight: '600', color: 'white' }}>Networking</h3>
                <span style={{ fontSize: '14px', color: '#3B82F6' }}>95%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', marginBottom: '16px' }}>
                <div style={{ width: '95%', height: '100%', background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)', borderRadius: '9999px' }}></div>
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>Configuration, Crimping, Cabling, Site Survey</p>
            </div>
            
            {/* Fiscal Support */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontWeight: '600', color: 'white' }}>Fiscal Support</h3>
                <span style={{ fontSize: '14px', color: '#3B82F6' }}>90%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', marginBottom: '16px' }}>
                <div style={{ width: '90%', height: '100%', background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)', borderRadius: '9999px' }}></div>
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>Fiscal system management and compliance</p>
            </div>

            {/* Hardware Troubleshooting */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontWeight: '600', color: 'white' }}>Hardware Troubleshooting</h3>
                <span style={{ fontSize: '14px', color: '#3B82F6' }}>92%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', marginBottom: '16px' }}>
                <div style={{ width: '92%', height: '100%', background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)', borderRadius: '9999px' }}></div>
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>Diagnostics, Repair, Maintenance, Component replacement</p>
            </div>

            {/* Accounting Software */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontWeight: '600', color: 'white' }}>Accounting Software</h3>
                <span style={{ fontSize: '14px', color: '#3B82F6' }}>88%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', marginBottom: '16px' }}>
                <div style={{ width: '88%', height: '100%', background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)', borderRadius: '9999px' }}></div>
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>Quick Books, Pastel, Installation & Management</p>
            </div>

            {/* CCTV Installation */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontWeight: '600', color: 'white' }}>CCTV Installation</h3>
                <span style={{ fontSize: '14px', color: '#3B82F6' }}>90%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', marginBottom: '16px' }}>
                <div style={{ width: '90%', height: '100%', background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)', borderRadius: '9999px' }}></div>
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>Camera setup, Configuration, Remote access, Maintenance</p>
            </div>

            {/* Web Development */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontWeight: '600', color: 'white' }}>Web Development</h3>
                <span style={{ fontSize: '14px', color: '#3B82F6' }}>94%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', marginBottom: '16px' }}>
                <div style={{ width: '94%', height: '100%', background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)', borderRadius: '9999px' }}></div>
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>Frontend, Backend, Full-stack applications</p>
            </div>

            {/* Software Development */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ fontWeight: '600', color: 'white' }}>Software Development</h3>
                <span style={{ fontSize: '14px', color: '#3B82F6' }}>96%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', marginBottom: '16px' }}>
                <div style={{ width: '96%', height: '100%', background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)', borderRadius: '9999px' }}></div>
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>Custom applications, APIs, System integration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience Section - Mobile Responsive */}
      <div id="work" style={{ padding: '80px 24px', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Work <span style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Experience</span></h2>
            <p style={{ color: '#666' }}>Professional journey</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* ICT Solutions Victoria Falls */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '16px', gap: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white' }}>IT Support & Graduate Trainee</h3>
                  <p style={{ color: '#3B82F6', marginTop: '4px' }}>ICT Solutions Victoria Falls</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#999' }}>1.5 Years</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>Victoria Falls, Zimbabwe</div>
                </div>
              </div>
              <ul style={{ marginTop: '16px' }}>
                <li style={{ color: '#999', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={14} color="#3B82F6" /> IT support and hardware/software troubleshooting</li>
                <li style={{ color: '#999', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={14} color="#3B82F6" /> Network maintenance and system installations</li>
                <li style={{ color: '#999', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={14} color="#3B82F6" /> Technical support and user assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section - Mobile Responsive */}
      <div id="projects" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Featured <span style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span></h2>
            <p style={{ color: '#666' }}>Real-world solutions I've built</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {/* Job Card System */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '20px' }}>💼</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white' }}>Job Card System</h3>
              </div>
              <p style={{ color: '#999', marginBottom: '16px', lineHeight: '1.5' }}>
                Digital job card management system for tracking and managing work orders, assignments, and service requests.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', borderRadius: '20px' }}>React</span>
                <span style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', borderRadius: '20px' }}>Node.js</span>
                <span style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', borderRadius: '20px' }}>MongoDB</span>
              </div>
              <button style={{ color: '#3B82F6', background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px' }}>
                Learn more <ArrowRight size={12} />
              </button>
            </div>
            
            {/* Fiscalization Software */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '20px' }}>📊</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white' }}>Fiscalization Software</h3>
              </div>
              <p style={{ color: '#999', marginBottom: '16px', lineHeight: '1.5' }}>
                Tax compliance and fiscal reporting system for businesses to manage invoices, receipts, and government tax regulations.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', borderRadius: '20px' }}>Python</span>
                <span style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', borderRadius: '20px' }}>Django</span>
                <span style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', borderRadius: '20px' }}>PostgreSQL</span>
              </div>
              <button style={{ color: '#3B82F6', background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px' }}>
                Learn more <ArrowRight size={12} />
              </button>
            </div>

            {/* POS Point of Sale */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '20px' }}>🛒</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white' }}>POS Point of Sale</h3>
              </div>
              <p style={{ color: '#999', marginBottom: '16px', lineHeight: '1.5' }}>
                Complete point of sale system with inventory management, sales tracking, receipt printing, and real-time reporting.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', borderRadius: '20px' }}>Next.js</span>
                <span style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', borderRadius: '20px' }}>Express</span>
                <span style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', borderRadius: '20px' }}>MySQL</span>
              </div>
              <button style={{ color: '#3B82F6', background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px' }}>
                Learn more <ArrowRight size={12} />
              </button>
            </div>

            {/* ICT Solutions Website */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '20px' }}>🌐</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white' }}>ICT Solutions Website</h3>
              </div>
              <p style={{ color: '#999', marginBottom: '16px', lineHeight: '1.5' }}>
                Professional corporate website for ICT Solutions showcasing services, portfolio, and client solutions.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', borderRadius: '20px' }}>React</span>
                <span style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', borderRadius: '20px' }}>Tailwind CSS</span>
                <span style={{ fontSize: '12px', padding: '4px 12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', borderRadius: '20px' }}>Framer Motion</span>
              </div>
              <button style={{ color: '#3B82F6', background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '14px' }}>
                Learn more <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Mobile Responsive */}
      <div id="contact" style={{ padding: '80px 24px', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Let's <span style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connect</span></h2>
          <p style={{ color: '#666', marginBottom: '32px' }}>Have a project in mind? Let's talk.</p>
          
          {/* Contact Info Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '16px', 
            marginBottom: '40px',
            textAlign: 'left'
          }}>
            {/* Email - Gmail */}
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.05)', 
              borderRadius: '12px', 
              padding: '16px',
              transition: 'all 0.3s ease'
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#3B82F6" />
                <div>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Gmail</div>
                  <a href="mailto:ashleymuleya55@gmail.com" style={{ color: '#ccc', fontSize: '13px', textDecoration: 'none', wordBreak: 'break-all' }}>
                    ashleymuleya55@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Email - Outlook */}
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.05)', 
              borderRadius: '12px', 
              padding: '16px',
              transition: 'all 0.3s ease'
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#0078D4" />
                <div>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Outlook</div>
                  <a href="mailto:ashleymuleya57@outlook.com" style={{ color: '#ccc', fontSize: '13px', textDecoration: 'none', wordBreak: 'break-all' }}>
                    ashleymuleya57@outlook.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Contact Card */}
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.03)', 
            border: '1px solid rgba(255, 255, 255, 0.05)', 
            borderRadius: '12px', 
            padding: '16px',
            marginBottom: '40px',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '24px' }}>📞</span>
              <div>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Calls & WhatsApp</div>
                <a href="tel:+263785596204" style={{ color: '#ccc', fontSize: '16px', textDecoration: 'none', fontWeight: '500' }}>
                  +263 785 596 204
                </a>
              </div>
              <span style={{ fontSize: '20px' }}>💬</span>
            </div>
          </div>
          
          {/* Social Links with hover effects */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <a href="mailto:ashleymuleya55@gmail.com" style={{ padding: '12px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'inline-flex', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <GmailIcon size={20} color="#EA4335" />
            </a>
            <a href="#" style={{ padding: '12px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'inline-flex', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <Linkedin size={20} color="#0A66C2" />
            </a>
            <a href="#" style={{ padding: '12px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'inline-flex', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <Twitter size={20} color="#1DA1F2" />
            </a>
            <a href="#" style={{ padding: '12px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'inline-flex', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <Github size={20} color="#fff" />
            </a>
          </div>
          
          <button 
            onClick={() => window.location.href = 'mailto:ashleymuleya55@gmail.com'}
            style={{
              padding: '12px 32px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          >
            Send a Message
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '32px 24px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#444' }}>© 2026 Ashley Muleya. All rights reserved.</p>
      </footer>
    </div>
  )
}