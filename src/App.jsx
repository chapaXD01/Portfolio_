import './App.css'
import rotationIqImage from './assets/rotationIQ.png'
import helpdeskImage from './assets/helpdesk.png'

const skills = [
  {
    title: 'Frontend',
    items: ['JavaScript', 'HTML', 'CSS', 'Responsive UI', 'User Experience'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Database Design'],
  },
  {
    title: 'Tools',
    items: ['GitHub', 'VS Code', 'Problem Solving'],
  },
]

const projects = [
  {
    name: 'RotationIQ',
    type: 'Volleyball rotation tool',
    description:
      'A volleyball rotation web program that helps teams organize player positions and manage rotation logic.',
    stack: ['Python', 'JavaScript', 'Logic', 'Web App'],
    link: 'https://github.com/chapaXD01/RotationIQ',
  },
  {
    name: 'Helpdesk',
    type: 'Support desk',
    description:
      'A modern support desk web app that helps teams manage tickets, track issues, and organize support requests efficiently.',
    stack: ['React', 'Ticketing', 'Dashboard', 'Support'],
    link: 'https://github.com/chapaXD01',
  },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/chapaXD01' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand" aria-label="Renārs Pētersons">
          <span className="brand-mark">R</span>
          <span>Renārs Pētersons</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">Available for internship</span>
            <h1>
              I build ideas into <span>smart digital products</span>.
            </h1>
            <p className="lead">
              I’m a motivated and enthusiastic developer with a strong interest in web
              development and building practical applications. I mainly work with PHP,
              Laravel, and JavaScript, and I enjoy creating websites and applications that
              are functional, efficient, and user-friendly. I enjoy finding bugs,
              understanding the root cause, and fixing them with reliable solutions.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#projects">
                View projects
              </a>
              <a className="secondary-btn" href="#contact">
                Let’s connect
              </a>
            </div>

            <div className="stats" aria-label="Key achievements">
              <div>
                <strong>2+</strong>
                <span>Years learning</span>
              </div>
              <div>
                <strong>8+</strong>
                <span>Projects built</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Curious mindset</span>
              </div>
            </div>
          </div>

          <div className="hero-panel" aria-label="Developer profile card">
            <div className="profile-card">
              <div className="avatar">AC</div>
              <div>
                <p className="profile-label">Developer profile</p>
                <h2>Renārs Pētersons</h2>
              </div>
            </div>

            <div className="panel-grid">
              <div>
                <span className="mini-label">Focus</span>
                <strong>Web development</strong>
              </div>
              <div>
                <span className="mini-label">Stack</span>
                <strong>PHP / Laravel / JS / MySQL</strong>
              </div>
              <div>
                <span className="mini-label">Location</span>
                <strong>Cēsis, Latvia</strong>
              </div>
              <div>
                <span className="mini-label">Status</span>
                <strong>Open to internship</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <span className="eyebrow">About me</span>
            <h2>Turning logic into memorable user experiences.</h2>
          </div>

          <div className="about-grid">
            <p>
              I’m a motivated and enthusiastic developer with a strong interest in web
              development and building practical applications. I mainly work with PHP,
              Laravel, and JavaScript, and I enjoy creating websites and applications that
              are functional, efficient, and user-friendly.
            </p>
            <p>
              I’m always interested in learning new technologies and improving my skills.
              Working with Laravel has helped me develop a stronger understanding of backend
              development, databases, APIs, and application structure, while JavaScript lets
              me build more interactive and dynamic user experiences. I enjoy solving problems,
              experimenting with ideas, and turning concepts into working projects.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span className="eyebrow">Core skills</span>
            <h2>What I bring to the table.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span className="eyebrow">Featured work</span>
            <h2>Projects that reflect my growth as a developer.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-tag">{project.type}</div>
                <h3>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                </h3>
                <p>{project.description}</p>

                {project.name === 'RotationIQ' ? (
                  <img
                    className="project-image"
                    src={rotationIqImage}
                    alt="RotationIQ project preview"
                  />
                ) : project.name === 'Helpdesk' ? (
                  <img
                    className="project-image"
                    src={helpdeskImage}
                    alt="Helpdesk project preview"
                  />
                ) : null}

                <div className="stack-row">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      <footer id="contact" className="footer section">
        <div>
          <span className="eyebrow">Let’s work together</span>
          <h2>Open to internship opportunities.</h2>
        </div>

        <div className="footer-actions">
          <a className="primary-btn" href="mailto:petersonsrenars0@gmail.com">
            petersonsrenars0@gmail.com
          </a>
          <a className="secondary-btn" href="tel:+37125691978">
            +371 25691978
          </a>
          <div className="socials" aria-label="social links">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
