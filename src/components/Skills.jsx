import { useState } from "react";
import { Code2, Database, Wrench } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const categories = ["All", "Frontend", "Backend", "Tools"];

const icons = {
  Frontend: Code2,
  Backend: Database,
  Tools: Wrench,
  "Web Development": Code2,
  Libraries: Code2,
  Programming: Code2,
};

function Skills() {
  const [active, setActive] = useState("All");

  const skills = portfolioData.skills.filter(
    (skill) => active === "All" || skill.category === active,
  );

  return (
    <section className="section content-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">02 — MY TOOLKIT</p>
        <h2>Skills that bring ideas to life.</h2>
        <p className="section-description">
          Technologies I use to design, develop, and build web experiences.
        </p>
      </div>

      <div className="filter-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={active === category ? "filter active" : "filter"}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skills.map((skill) => {
          const Icon = icons[skill.category] || Code2;

          return (
            <article className="glass-card skill-card" key={skill.name}>
              <div className="skill-card-top">
                <span className="skill-icon">
                  <Icon size={20} />
                </span>
                <span className="skill-category">{skill.category}</span>
              </div>

              <h3>{skill.name}</h3>

              <div className="skill-track">
                <div
                  className="skill-progress"
                  style={{ "--skill-level": `${skill.level}%` }}
                />
              </div>
            </article>
          );
        })}
      </div>
      <p className="muted skill-note">
        Skill bars are illustrative self-assessments, not test results.
      </p>
    </section>
  );
}

export default Skills;
