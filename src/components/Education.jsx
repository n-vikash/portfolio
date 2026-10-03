import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";
function Education() {
  const { education } = portfolioData;

  return (
    <FadeInSection>
      <section className="section content-section" id="education">
        <div className="section-heading">
          <p className="eyebrow">04 — EDUCATION</p>
          <h2>Where my journey is taking me.</h2>
        </div>

        <div className="timeline">
          <div className="timeline-line" />

          {education.map((item, index) => (
            <article className="glass-card education-card" key={item.degree}>
              <div className="timeline-marker">
                <GraduationCap size={21} />
              </div>

              <div className="education-top">
                <span className="detail-tag">{item.status}</span>

                <span className="muted">
                  <CalendarDays size={14} /> {item.period}
                </span>
              </div>

              <h3>{item.degree}</h3>
              <p>{item.college}</p>

              <p className="muted education-location">
                <MapPin size={15} /> {item.location}
              </p>

              {item.score && (
                <p className="muted education-score">{item.score}</p>
              )}
            </article>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}

export default Education;
