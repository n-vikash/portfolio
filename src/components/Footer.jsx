
import { portfolioData } from "../data/portfolioData";

function Footer() {
  const { name, socialLinks } = portfolioData;

  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="footer-brand">
          <span className="brand-mark">
           N.
          </span>
          <span>{name}</span>
        </a>

        <p className="footer-message">
          Designed with curiosity. Built with code.
        </p>

        <div className="footer-socials">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub 
          </a>
<br />
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {name}. All rights
          reserved.
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;