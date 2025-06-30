import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Database,
  Globe,
  Server,
  Smartphone,
  BarChart3,
  Brain,
  Users,
  MessageSquare
} from 'lucide-react'
import profilePlaceholder from './assets/images/profile-demo.svg'
import './App.css'
import { title } from 'framer-motion/client'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Portfolio data
  const portfolioData = {
    personal: {
      name: "Kevin Ardhana",
      title: "Mahasiswa Sistem Informasi",
      subtitle: "Full Stack Developer & Data Scientist",
      email: "kevinardhana096@gmail.com",
      phone: "+62 852-9948-9932",
      location: "Makassar, Indonesia",
      linkedin: "https://www.linkedin.com/in/kevin-ardhana-806a12326/",
      github: "https://github.com/Kevinardhana096",
      githubPages: "https://kevinardhana096.github.io/",
      profileImage: "https://avatars.githubusercontent.com/u/165297553?v=4" // Ganti dengan path foto Anda
    },
    profile: {
      greeting: "Halo! Saya seorang mahasiswa Sistem Informasi yang passionate dalam dunia teknologi dan pengembangan software. Saya memiliki minat khusus dalam web development, data analysis, dan user experience design.",
      description: "Selama perjalanan akademik saya, saya telah mengembangkan berbagai proyek yang menggabungkan teori sistem informasi dengan praktik pengembangan modern. Saya selalu antusias untuk mempelajari teknologi baru dan berkontribusi dalam proyek-proyek yang memberikan dampak positif.",
      mission: "Misi saya adalah menjadi profesional IT yang dapat menjembatani kebutuhan bisnis dengan solusi teknologi yang inovatif dan user-friendly.",
      currentFocus: [
        "Full Stack Web Development",
        "Machine Learning dan Data Science",
        "UI/UX Design dan User Research"
      ]
    },
    expertise: [
      "Web Development",
      "Mobile App Development",
      "Data Analysis",
      "Database Management",
      "System Analysis & Design",
      "UI/UX Design"
    ],
    experience: [
      {
        title: " PPK ORMAWA Start-Up Unhas 2025",
        company: "UKM Start-Up Unhas",
        period: "Apr 2025 - Jun 2025",
        description: "Menyusun proposal program pemberdayaan desa wisata berbasis digital, berperan sebagai sekretaris tim: menyusun dokumen perencanaan, logbook, dan kebutuhan administrasi lainnya, dan berkoordinasi dengan pihak desa untuk penyusunan rencana kegiatan kolaboratif."
      },
      {
        title: " UX Today Competition",
        company: "Institut Pertanian Bogor",
        period: "Jul 2024 - Aug 2024",
        description: "Menganalisis data survey dan membuat dashboard visualization menggunakan Python"
      }
    ],
    projects: [
      {
        title: "EasyCook Website",
        tech: ["React", "Node.js", "SQLite", "Flask API", "Tailwind CSS", "DaisiesUI"],
        description: "Membangun website Easy Cook sebagai platform berbagi dan mencari resep masakan, memungkinkan pengguna untuk mencari inspirasi resep dan mengunggah resep buatan sendiri.",
        github: "https://github.com/Kevinardhana096/EasyCook.git"
        // demo: "https://johndoe.github.io/ecommerce-app"
      },
      {
        title: "Melodix Application",
        tech: ["Java", "Android", "Android Studio", "Firebase", "API"],
        description: "Mengembangkan aplikasi Melodix, pemutar musik berbasis Android dengan fitur online streaming, offline playback, download lagu, dan daftar favorit.",
        github: "https://github.com/Kevinardhana096/Melodix.git"
      },
      {
        title: "Data Visualization Dashboard",
        tech: ["Tableau"],
        description: "Dashboard interaktif untuk visualisasi data penjualan dan trend analysis",
        // github: "",
        demo: "https://public.tableau.com/app/profile/kevin.ardhana/viz/TugasBesarVisualisasiInformasi_17498876191350/Dashboard1"
      },
      {
        title: "Proyek Machine Learning Prediksi Harga Bitcoin dan Ethereum",
        tech: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Random Forest", "Decision Tree", "Matplotlib", "Seaborn", "Jupyter Notebook", "Streamlit"],
        description: "Mengimplementasikan dan membandingkan 3 model ML: XGBoost, Random Forest, dan Decision Tree, untuk mengukur performa prediksi dan akurasi model.",
        github: "https://github.com/Kevinardhana096/streamlit.git",
        demo: "https://app-unhas23.streamlit.app/"
      },
      {
        title: "Proyek Website Tiket Online",
        tech: ["Laravel", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
        description: "Aplikasi website untuk pemesanan tiket online dengan fitur pencarian, pemesanan, dan pembayaran.",
        github: "https://kevinardhana096.github.io/posts/project-laravel/",
        // demo: "https://johndoe.github.io/e-learning-app"
      },
      {
        title: "UX Today Competition",
        tech: ["Figma"],
        description: "Merancang user interface dan user experience menggunakan Figma untuk mempermudah konsumen dalam melacak distribusi, kualitas, dan informasi panen.",
        // github: "https://github.com/johndoe/e-learning-app",
        demo: "https://www.figma.com/design/ENxzipTMgn7GzuxEY2Gp5x/IT-TODAY-ROAD-IPB--Copy-?node-id=0-1&t=XiuVV7p8gtaikiF5-1"
      },
      {
        title: "Proyek E-Learning",
        tech: ["React", "Node.js", "MongoDB"],
        description: "Aplikasi e-learning dengan fitur kelas virtual, kuis, dan forum diskusi.",
        github: "https://github.com/johndoe/e-learning-app",
        demo: "https://johndoe.github.io/e-learning-app"
      }

    ],
    education: [
      {
        degree: "S1 Sistem Informasi",
        school: "Universitas Indonesia",
        period: "2023 - Sekarang",
        gpa: "3.82/4.00"
      },
      {
        degree: "SMA IPA",
        school: "SMAN 21 Makassar",
        period: "2020 - 2023",
        gpa: "90.07/100"
      }
    ],
    skills: {
      programming: ["JavaScript", "Python", "PHP", "Java", "SQL", "HTML/CSS"],
      dataVisualization: ["Python (Matplotlib, Seaborn)", "Tableau", "Power BI", "Excel"],
      software: ["VS Code", "Git", "Figma", "MySQL Workbench", "Postman", "Docker"],
      softSkills: ["Problem Solving", "Team Work", "Leadership", "Communication", "Time Management", "Critical Thinking"]
    }
  }  // Navigation handler
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false) // Close mobile menu when navigating

    // Wait a bit for state updates
    setTimeout(() => {
      const element = document.getElementById(sectionId)

      if (element) {
        const offsetTop = element.offsetTop - 80 // Account for navbar height

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      } else {
        // Fallback: try to scroll to approximate position
        const approximatePositions = {
          'home': 0,
          'about': window.innerHeight,
          'experience': window.innerHeight * 2,
          'projects': window.innerHeight * 3,
          'education': window.innerHeight * 4,
          'skills': window.innerHeight * 5,
          'contact': window.innerHeight * 6
        }

        if (approximatePositions[sectionId] !== undefined) {
          window.scrollTo({
            top: approximatePositions[sectionId],
            behavior: 'smooth'
          })
        }
      }
    }, 100)
  }

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      // Add navbar scroll effect
      const navbar = document.querySelector('.navbar')
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-container">
              <Code className="logo-icon" />
              <div className="logo-text">
                <span className="logo-name">{portfolioData.personal.name}</span>
                <span className="logo-subtitle">Portfolio</span>
              </div>
            </div>
          </div>
          <ul className={`nav-menu ${mobileMenuOpen ? 'nav-menu-open' : ''}`}>
            {['Home', 'About', 'Experience', 'Projects', 'Education', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={activeSection === item.toLowerCase() ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.toLowerCase())
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`nav-mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-grid"></div>
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`}></div>
            ))}
          </div>
        </div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Introduction Card */}
            <motion.div
              className="hero-profile-card"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.3 }}
            >
              <div className="profile-image-hero">
                <div className="profile-frame">
                  <img
                    src={portfolioData.personal.profileImage}
                    alt={`${portfolioData.personal.name} - Profile Photo`}
                    className="profile-img"
                    onError={(e) => {
                      console.log('Image failed to load:', e.target.src)
                      e.target.style.display = 'block'
                    }}
                  />
                  <div className="profile-overlay">
                    <div className="overlay-icon">
                      <Code size={24} />
                    </div>
                  </div>
                </div>
                <div className="floating-tech-icons">
                  <div className="tech-icon tech-icon-1"><Code size={18} /></div>
                  <div className="tech-icon tech-icon-2"><Database size={16} /></div>
                  <div className="tech-icon tech-icon-3"><Globe size={14} /></div>
                  <div className="tech-icon tech-icon-4"><Server size={20} /></div>
                </div>
              </div>

              <div className="profile-info">
                <motion.div
                  className="profile-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <span className="badge-icon">🎓</span>
                  <span>{portfolioData.personal.title}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <span className="greeting">Halo, Saya</span>
                  <span className="name-highlight">{portfolioData.personal.name}</span>
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="subtitle"
                >
                  {portfolioData.personal.subtitle}
                </motion.h2>

                <motion.p
                  className="profile-intro"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  {portfolioData.profile.greeting}
                </motion.p>

                <motion.div
                  className="profile-contact-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <div className="contact-item">
                    <Mail size={16} />
                    <span>{portfolioData.personal.email}</span>
                  </div>
                  <div className="contact-item">
                    <span>📍</span>
                    <span>{portfolioData.personal.location}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Call to Action Section */}
            <motion.div
              className="hero-cta-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.6 }}
            >
              <div className="cta-content">
                <h3>Mari Berkolaborasi!</h3>
                <p>Saya terbuka untuk kesempatan magang, proyek kolaborasi, atau diskusi tentang teknologi dan inovasi.</p>

                <div className="hero-buttons">
                  <button
                    className="btn-primary"
                    onClick={() => scrollToSection('contact')}
                  >
                    <Mail size={20} />
                    <span>Hubungi Saya</span>
                  </button>
                  <button
                    className="btn-secondary"
                    onClick={() => scrollToSection('projects')}
                  >
                    <ExternalLink size={20} />
                    <span>Lihat Portfolio</span>
                  </button>
                </div>

                <div className="hero-stats">
                  <div className="stat-card">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">2+</span>
                    <span className="stat-label">Experience</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">3.85</span>
                    <span className="stat-label">GPA</span>
                  </div>
                </div>

                <div className="social-connect">
                  <h4>Connect with me</h4>
                  <div className="social-links">
                    <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="social-link">
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                    <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                      <Linkedin size={20} />
                      <span>LinkedIn</span>
                    </a>
                    <a href={portfolioData.personal.githubPages} target="_blank" rel="noopener noreferrer" className="social-link">
                      <Globe size={20} />
                      <span>Website</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <User className="section-icon" />
            <h2>About Me</h2>
            <p>Get to know more about my background, journey, and expertise in technology</p>
          </motion.div>

          <div className="about-main-content">
            {/* Profile Overview Card */}
            <motion.div
              className="about-profile-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="about-image-section">
                <div className="about-profile-frame">
                  <img
                    src={portfolioData.personal.profileImage}
                    alt={`${portfolioData.personal.name} - Professional Photo`}
                    className="about-profile-img"
                    onError={(e) => {
                      console.log('About image failed to load:', e.target.src)
                      e.target.style.display = 'block'
                    }}
                  />
                  <div className="about-profile-overlay">
                    <div className="about-status-indicator">
                      <div className="status-dot"></div>
                      <span>Available for opportunities</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="about-floating-badges">
                  <div className="badge-item badge-1">
                    <GraduationCap size={16} />
                    <span>Student</span>
                  </div>
                  <div className="badge-item badge-2">
                    <Code size={16} />
                    <span>Developer</span>
                  </div>
                  <div className="badge-item badge-3">
                    <BarChart3 size={16} />
                    <span>Analyst</span>
                  </div>
                </div>
              </div>

              <div className="about-personal-info">
                <h3 className="about-name">{portfolioData.personal.name}</h3>
                <p className="about-title">{portfolioData.personal.subtitle}</p>

                <div className="about-quick-info">
                  <div className="info-item">
                    <Mail size={16} />
                    <span>{portfolioData.personal.email}</span>
                  </div>
                  <div className="info-item">
                    <span>📍</span>
                    <span>{portfolioData.personal.location}</span>
                  </div>
                  <div className="info-item">
                    <GraduationCap size={16} />
                    <span>{portfolioData.personal.title}</span>
                  </div>
                </div>

                <div className="about-social-links">
                  <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                    <Github size={18} />
                  </a>
                  <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                    <Linkedin size={18} />
                  </a>
                  <a href={portfolioData.personal.githubPages} target="_blank" rel="noopener noreferrer" className="social-btn">
                    <Globe size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* About Story & Mission */}
            <motion.div
              className="about-story-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="story-content">
                <div className="story-header">
                  <h3>My Story</h3>
                  <div className="story-divider"></div>
                </div>

                <div className="story-paragraphs">
                  <p className="story-intro">{portfolioData.profile.description}</p>

                  <div className="mission-box">
                    <h4>
                      <Brain size={20} />
                      My Mission
                    </h4>
                    <p>{portfolioData.profile.mission}</p>
                  </div>
                </div>

                <div className="current-focus">
                  <h4>
                    <Users size={20} />
                    Current Focus Areas
                  </h4>
                  <div className="focus-grid">
                    {portfolioData.profile.currentFocus.map((focus, index) => (
                      <div key={index} className="focus-item">
                        <div className="focus-icon">
                          {index === 0 && <Globe size={16} />}
                          {index === 1 && <BarChart3 size={16} />}
                          {index === 2 && <Users size={16} />}
                          {index === 3 && <Database size={16} />}
                        </div>
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Expertise Section */}
          <motion.div
            className="about-expertise-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="expertise-header">
              <h3>
                <Award size={24} />
                Areas of Expertise
              </h3>
              <p>Technologies and domains I'm passionate about</p>
            </div>

            <div className="expertise-showcase">
              {portfolioData.expertise.map((skill, index) => (
                <motion.div
                  key={index}
                  className="expertise-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="expertise-icon">
                    {skill.includes('Web') && <Globe size={20} />}
                    {skill.includes('Mobile') && <Smartphone size={20} />}
                    {skill.includes('Data') && <BarChart3 size={20} />}
                    {skill.includes('Database') && <Database size={20} />}
                    {skill.includes('System') && <Server size={20} />}
                    {skill.includes('UI/UX') && <Users size={20} />}
                  </div>
                  <span>{skill}</span>
                  <div className="expertise-level">
                    <div className="level-bar">
                      <div className="level-fill" style={{ width: `${85 + (index * 2)}%` }}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Briefcase className="section-icon" />
            <h2>Experience</h2>
            <p>My professional journey and internships</p>
          </motion.div>

          <div className="experience-timeline">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <span className="timeline-period">{exp.period}</span>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Code className="section-icon" />
            <h2>Projects</h2>
            <p>Some of my recent work and personal projects</p>
          </motion.div>

          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="section-icon" />
            <h2>Education</h2>
            <p>My academic background and achievements</p>
          </motion.div>

          <div className="education-timeline">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  <span className="timeline-period">{edu.period}</span>
                  <div className="gpa">GPA: {edu.gpa}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Award className="section-icon" />
            <h2>Skills & Technologies</h2>
            <p>My technical and soft skills across different areas</p>
          </motion.div>

          <div className="skills-grid">
            <motion.div
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-header">
                <Code className="skill-icon" />
                <h3>Programming Languages</h3>
              </div>
              <div className="skill-tags">
                {portfolioData.skills.programming.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="skill-header">
                <BarChart3 className="skill-icon" />
                <h3>Data Visualization</h3>
              </div>
              <div className="skill-tags">
                {portfolioData.skills.dataVisualization.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="skill-header">
                <Server className="skill-icon" />
                <h3>Software & Tools</h3>
              </div>
              <div className="skill-tags">
                {portfolioData.skills.software.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="skill-header">
                <Brain className="skill-icon" />
                <h3>Soft Skills</h3>
              </div>
              <div className="skill-tags">
                {portfolioData.skills.softSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <MessageSquare className="section-icon" />
            <h2>Get In Touch</h2>
            <p>Let's connect and discuss opportunities</p>
          </motion.div>

          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="contact-info">
              <h3>Let's work together</h3>
              <p>I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.</p>

              <div className="contact-methods">
                <a href={`mailto:${portfolioData.personal.email}`} className="contact-method">
                  <Mail className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <span>{portfolioData.personal.email}</span>
                  </div>
                </a>

                <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method">
                  <Linkedin className="contact-icon" />
                  <div>
                    <h4>LinkedIn</h4>
                    <span>Connect with me</span>
                  </div>
                </a>

                <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="contact-method">
                  <Github className="contact-icon" />
                  <div>
                    <h4>GitHub</h4>
                    <span>Check out my code</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 {portfolioData.personal.name}. All rights reserved.</p>
            <div className="footer-links">
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href={portfolioData.personal.githubPages} target="_blank" rel="noopener noreferrer">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
