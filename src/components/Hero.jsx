
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { portfolioData } from "../data/portfolioData";

function Hero() {
  const {
    name,
    role,
    tagline,
    description,
    socialLinks,
  } = portfolioData;

  return (
    <section className="hero section" id="home">
      {/* Hero content */}
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot" />
          {portfolioData.availability}
        </div>

        <p className="eyebrow">
          <Sparkles size={15} />
          HELLO, WORLD! I'M
        </p>

        <h1>
          {name}
          <br />
          <span className="gradient-text">
            Building the web.
          </span>
        </h1>

        <h2>{role} &amp; B.Tech Student</h2>

        <p className="hero-tagline">{tagline}</p>

        <p className="hero-description">
          {description}
        </p>

        {/* Action buttons */}
        <div className="hero-actions">
          <a
            className="button button-primary"
            href="#projects"
          >
            Explore my work
            <ArrowRight size={17} />
          </a>

          <a
            className="button button-outline"
            href="#contact"
          >
            Get in touch
          </a>

          <a
            className="button button-outline"
            href="/resume.pdf"
            download="Nubothu_Vikash_Resume.pdf"
          >
            Download Resume
          </a>
        </div>

        {/* Social links */}
        <div className="social-links">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon" aria-hidden="true">
              GH
            </span>
            GitHub
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon" aria-hidden="true">
              in
            </span>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Hero visual */}
      <div className="hero-visual">
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-inner" />

        <div className="hero-avatar">
          <div className="avatar-initial">
            {name.charAt(0)}
          </div>

          <span className="avatar-caption">
            DEVELOPER MODE: ON
          </span>
        </div>

        <div className="float-card float-card-top">
          <span className="float-icon">{"</>"}</span>

          <div>
            <strong>Creative Developer</strong>
            <small>Design meets code</small>
          </div>
        </div>

        <div className="float-card float-card-bottom">
          <span className="status-dot" />

          <div>
            <strong>Always learning</strong>
            <small>One project at a time</small>
          </div>
        </div>

        <div className="visual-label">
          01 / INTRODUCTION
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator">
        <ArrowDown size={15} />
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}

export default Hero;

