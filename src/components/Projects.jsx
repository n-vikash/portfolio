import { ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";
const projectThemes = ["project-blue", "project-purple", "project-cyan"];

function Projects() {
  return (
    <FadeInSection>
      <section className="section content-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">03 — SELECTED WORK</p>

          <h2>
            Things I've <span className="gradient-text">built.</span>
          </h2>

          <p className="section-description">
            A few projects that reflect my learning and problem-solving.
          </p>
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <article className="glass-card project-card" key={project.id}>
              <div
                className={`project-preview ${
                  projectThemes[index % projectThemes.length]
                }`}
              >
                <span className="project-number">{project.number}</span>

                <div className="preview-orb" />

                <span className="preview-symbol">
                  {index === 0 ? "⌖" : index === 1 ? "{ }" : "⚄"}
                </span>

                <span className="preview-caption">
                  PROJECT / {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="project-info">
                <p className="eyebrow">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon" aria-hidden="true">
                      GH
                    </span>
                    Source code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="projects-note">
          Replace the example URLs with your actual repository and deployed
          project links before publishing.
        </p>
      </section>
    </FadeInSection>
  );
}

export default Projects;
