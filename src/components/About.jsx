import { ArrowUpRight, Code2, GraduationCap, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";
function About() {
  const education = portfolioData.education[0];

  return (
    <FadeInSection>
      <section className="section content-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 — ABOUT ME</p>
          <h2>
            A little about <span className="gradient-text">my journey.</span>
          </h2>
        </div>

        <div className="about-grid">
          <article className="glass-card about-main">
            <span className="card-icon">
              <Code2 />
            </span>

            <h3>Curious by nature. Developer by choice.</h3>

            <p>
              I'm a final-year B.Tech Artificial Intelligence and Data Science
              student who enjoys turning ideas into practical web experiences. I
              work with React.js and JavaScript, explore web development
              technologies, and keep improving through hands-on projects.
            </p>

            <a href="#projects" className="text-link">
              See what I've built <ArrowUpRight size={16} />
            </a>
          </article>

          <article className="glass-card about-detail">
            <GraduationCap className="detail-icon" />

            <p className="muted">CURRENTLY STUDYING</p>

            <h3>{education.degree}</h3>

            <p>{education.college}</p>

            <p className="muted">{education.location}</p>

            <span className="detail-tag">{education.period}</span>

            {education.score && <p className="muted">{education.score}</p>}
          </article>

          <article className="glass-card about-detail">
            <Layers className="detail-icon" />

            <p className="muted">MY APPROACH</p>

            <h3>Learn. Build. Improve.</h3>

            <p>
              I learn by creating projects, debugging problems, and
              experimenting with new tools.
            </p>
          </article>
        </div>
      </section>
    </FadeInSection>
  );
}

export default About;
