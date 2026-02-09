import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Mail, Phone, MapPin, Linkedin, Instagram, Github, ExternalLink, Code, Shield, Database, ChevronRight, Sparkles, Terminal } from 'lucide-react';
import './App.css';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} data-testid="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" data-testid="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Adi</span>
          <span className="logo-dot">.</span>
          <span className="logo-text">dev</span>
          <span className="logo-bracket">/&gt;</span>
        </Link>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              data-testid={`nav-link-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} data-testid="nav-toggle">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

// Home Page
const Home = () => {
  return (
    <div className="page home-page" data-testid="home-page">
      <section className="hero">
        <div className="hero-bg-effects">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="grid-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <Sparkles size={14} />
            <span>Available for opportunities</span>
          </div>
          
          <h1 className="hero-title animate-fade-in animate-delay-100">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">Abdullah Adi Prabowo</span>
          </h1>
          
          <div className="hero-role animate-fade-in animate-delay-200">
            <Terminal size={20} />
            <span className="typing-text">Software Quality Assurance Engineer</span>
            <span className="cursor">_</span>
          </div>
          
          <p className="hero-description animate-fade-in animate-delay-300">
            5+ years crafting quality software in the banking industry. Based in Jakarta, Indonesia. 
            Passionate about delivering bug-free, user-centric digital experiences.
          </p>
          
          <div className="hero-cta animate-fade-in animate-delay-400">
            <a 
              href="https://www.canva.com/design/DAD5OTJyZlw/wXdXYyXr_gZSZwkMqstB4g/view" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              data-testid="download-cv-btn"
            >
              <Download size={18} />
              Download CV
            </a>
            <Link to="/contact" className="btn btn-secondary" data-testid="contact-btn">
              <Mail size={18} />
              Let's Talk
            </Link>
          </div>

          <div className="hero-stats animate-fade-in animate-delay-400">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Major Companies</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Tested</span>
            </div>
          </div>
        </div>
      </section>

      <section className="what-i-do" data-testid="what-i-do-section">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">What I Do</h2>
        </div>
        
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <Shield size={32} />
            </div>
            <h3>Software Quality Assurance</h3>
            <ul className="skill-list">
              <li>Create comprehensive Test Plans & Scripts</li>
              <li>Execute testing for Web, Mobile & Desktop Apps</li>
              <li>Analyze results & identify bugs efficiently</li>
              <li>Collaborate with development teams</li>
            </ul>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <Code size={32} />
            </div>
            <h3>Web Development</h3>
            <ul className="skill-list">
              <li>Create responsive websites with modern tech</li>
              <li>HTML, CSS, JavaScript, Bootstrap, Laravel</li>
              <li>UI/UX implementation & maintenance</li>
              <li>Collaborate with designers & stakeholders</li>
            </ul>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <Database size={32} />
            </div>
            <h3>SQL Database</h3>
            <ul className="skill-list">
              <li>Create & maintain databases per requirements</li>
              <li>Design software that communicates with SQL</li>
              <li>Data management & optimization</li>
              <li>Query writing & performance tuning</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

// Experience Page
const Experience = () => {
  const experiences = [
    {
      role: "Software Quality Assurance",
      company: "PT Mandiri International Technology",
      client: "Bank Mandiri - Jakarta",
      period: "2020 - Present",
      highlights: [
        "Project Wealth Management Core - Stock investment application",
        "Handle SIT testing for Fund, Primary/Secondary Bond, Static Data",
        "Create Test Plan, Test Script, and Documentation",
        "Methodology: Waterfall, Agile",
        "Tools: Jira, AS400, Postman, BDS"
      ]
    },
    {
      role: "Software Quality Assurance",
      company: "Asuransi Astra Buana",
      client: "Contract - Jakarta",
      period: "2019 - 2020",
      highlights: [
        "Project Garda OTO Apps",
        "Handle SIT testing for Customer Registration end-to-end",
        "Create Test Plan, Test Script, and Documentation",
        "Methodology: Waterfall, Agile",
        "Tools: Mantis, SQL Server"
      ]
    },
    {
      role: "Software Quality Assurance",
      company: "Central Bank of Indonesia",
      client: "Contract - Jakarta",
      period: "2018 - 2019",
      highlights: [
        "Project includes ERP and HRIS systems",
        "Handle HRIS module end-to-end testing",
        "Coordinate with QA team for UAT with Key Users",
        "Execute UAT Testing Cycle for BIMASAKTI",
        "Tools: Mantis, SQL Server"
      ]
    },
    {
      role: "Junior QA Game Tester",
      company: "PT Gameloft",
      client: "Contract - Yogyakarta",
      period: "2016 - 2018",
      highlights: [
        "Projects: Disney Magic Kingdom, NOVA 4, Asphalt Nitro",
        "Handle Gameplay, Functional & Integration Testing",
        "Create Daily Reports: Target Achievement, Bug Follow-up",
        "Execute UAT and SIT Testing based on Documentation",
        "Tools: BugBase"
      ]
    }
  ];

  const courses = [
    { title: "Fundamental Front-End Web Development", provider: "Coding Studio", year: "Oct 2024", skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub"] },
    { title: "MySQL Database", provider: "Coding Studio", year: "Nov 2024", skills: ["DDL", "DML", "Table Relations", "Backup & Restore", "Procedures"] },
    { title: "Computer Network", provider: "Coding Studio", year: "Oct 2024", skills: ["Network Basics", "Protocols", "IPv4/IPv6", "Security", "Cisco Packet Tracer"] }
  ];

  const education = [
    { degree: "Bachelor Degree in Information System", school: "STMIK AMIKOM", year: "2014", location: "Yogyakarta, Indonesia" },
    { degree: "High School - Social Sciences", school: "SMAN 1 Jeruk Legi", year: "2010", location: "Cilacap, Central Java" }
  ];

  return (
    <div className="page experience-page" data-testid="experience-page">
      <section className="page-header">
        <span className="section-tag">My Journey</span>
        <h1 className="page-title">Experience & Education</h1>
        <p className="page-subtitle">A timeline of my professional growth and continuous learning</p>
      </section>

      <section className="experience-section">
        <h2 className="subsection-title">
          <ChevronRight size={24} />
          Work Experience
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-client">{exp.client}</p>
                <ul className="timeline-highlights">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="courses-section">
        <h2 className="subsection-title">
          <ChevronRight size={24} />
          Certifications & Courses
        </h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-header">
                <h3>{course.title}</h3>
                <span className="course-year">{course.year}</span>
              </div>
              <p className="course-provider">{course.provider}</p>
              <div className="course-skills">
                {course.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <h2 className="subsection-title">
          <ChevronRight size={24} />
          Education
        </h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <h3>{edu.degree}</h3>
              <p className="school">{edu.school}</p>
              <div className="edu-details">
                <span>{edu.year}</span>
                <span className="dot">•</span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Portfolio Page
const Portfolio = () => {
  const projects = [
    {
      title: "Wealth Management Core System",
      description: "Comprehensive QA testing for stock investment application at Bank Mandiri, ensuring transaction accuracy for Fund, Primary Bond, and Secondary Bond modules.",
      tech: ["Jira", "AS400", "Postman", "BDS"],
      type: "QA Testing"
    },
    {
      title: "Garda OTO Mobile App",
      description: "End-to-end SIT testing for customer registration flow in insurance mobile application, ensuring seamless user onboarding experience.",
      tech: ["Mantis", "SQL Server", "Mobile Testing"],
      type: "QA Testing"
    },
    {
      title: "BIMASAKTI ERP/HRIS System",
      description: "UAT Testing for Central Bank of Indonesia's enterprise resource planning and human resource information system.",
      tech: ["Mantis", "SQL Server", "UAT"],
      type: "QA Testing"
    },
    {
      title: "Disney Magic Kingdom",
      description: "Gameplay and functional testing for mobile game, ensuring smooth gaming experience and bug-free releases.",
      tech: ["BugBase", "Mobile Gaming", "Functional Testing"],
      type: "Game QA"
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website built with React and styled with custom CSS featuring dark theme design.",
      tech: ["React", "CSS", "JavaScript", "Responsive Design"],
      type: "Web Development"
    }
  ];

  return (
    <div className="page portfolio-page" data-testid="portfolio-page">
      <section className="page-header">
        <span className="section-tag">My Work</span>
        <h1 className="page-title">Portfolio</h1>
        <p className="page-subtitle">Showcase of projects and testing achievements</p>
      </section>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <div className="portfolio-type">{project.type}</div>
            <h3 className="portfolio-title">{project.title}</h3>
            <p className="portfolio-description">{project.description}</p>
            <div className="portfolio-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Page
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "adi.prabowo@gmail.com", href: "mailto:adi.prabowo@gmail.com" },
    { icon: Phone, label: "Phone", value: "+62 856 4992 3471", href: "tel:+6285649923471" },
    { icon: MapPin, label: "Location", value: "Palmerah, Jakarta Barat, Indonesia", href: null }
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/adiprabowo016/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/ad1_prabowo/" },
    { icon: Github, label: "GitHub", href: "https://github.com/adiprabowo016" }
  ];

  return (
    <div className="page contact-page" data-testid="contact-page">
      <section className="page-header">
        <span className="section-tag">Get in Touch</span>
        <h1 className="page-title">Contact Me</h1>
        <p className="page-subtitle">Interested in collaboration? Let's discuss opportunities!</p>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p className="contact-intro">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about QA and technology.
          </p>
          
          <div className="contact-details">
            {contactInfo.map((item, index) => (
              <div className="contact-item" key={index}>
                <div className="contact-icon">
                  <item.icon size={20} />
                </div>
                <div className="contact-text">
                  <span className="contact-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="contact-value">{item.value}</a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label={social.label}
                  data-testid={`social-link-${social.label.toLowerCase()}`}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit} data-testid="contact-form">
            <h2>Send a Message</h2>
            
            {submitted && (
              <div className="success-message" data-testid="success-message">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your name"
                required
                data-testid="input-name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your.email@example.com"
                required
                data-testid="input-email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell me about your project or opportunity..."
                rows="5"
                required
                data-testid="input-message"
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary btn-full" data-testid="submit-btn">
              <Mail size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Adi</span>
          <span className="logo-dot">.</span>
          <span className="logo-text">dev</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-tagline">Quality Assurance Engineer crafting bug-free experiences</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/adiprabowo016/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} />
          </a>
          <a href="https://www.instagram.com/ad1_prabowo/" target="_blank" rel="noopener noreferrer">
            <Instagram size={18} />
          </a>
          <a href="https://github.com/adiprabowo016" target="_blank" rel="noopener noreferrer">
            <Github size={18} />
          </a>
        </div>
        <p className="copyright">© 2024 Abdullah Adi Prabowo. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main App
function App() {
  return (
    <Router>
      <div className="app" data-testid="app-container">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
