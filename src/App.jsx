
import './App.css';
import { about, projects, skills, contact } from './data';

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="glowing-text">{about.name}</h1>
          <h2 className="role-text">{about.role}</h2>
          <p className="bio-text">{about.description}</p>
        </div>
      </header>

      <section className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="view-project-btn">View Project</a>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-grid">
          <a href={`mailto:${contact.email}`} className="contact-card">
            <i className="contact-icon">✉️</i>
            <span>{contact.email}</span>
          </a>
          <a href={`tel:${contact.phone}`} className="contact-card">
            <i className="contact-icon">📱</i>
            <span>{contact.phone}</span>
          </a>
          <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer" className="contact-card">
            <i className="contact-icon">💼</i>
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
