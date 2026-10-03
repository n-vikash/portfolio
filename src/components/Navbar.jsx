
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigation(event, href) {
    event.preventDefault();
    setMenuOpen(false);

    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href);

    if (!target) {
      console.error(`Section not found: ${href}`);
      return;
    }

    window.history.replaceState(null, "", href);

    const navbarHeight =
      document.querySelector(".navbar-wrapper")?.offsetHeight ??
      document.querySelector(".navbar")?.offsetHeight ??
      78;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
  }

  return (
    <div className="navbar-wrapper">
      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={(event) => handleNavigation(event, "#home")}
        >
          Vikash<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={(event) => handleNavigation(event, href)}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-contact"
            href="#contact"
            onClick={(event) => handleNavigation(event, "#contact")}
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
    </div>
  );
}

export default Navbar;