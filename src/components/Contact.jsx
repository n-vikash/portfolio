import { useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <FadeInSection>
      <section className="section content-section" id="contact">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">05 — GET IN TOUCH</p>
            <h2>
              Have an idea?
              <br />
              <span className="gradient-text">Let's build it.</span>
            </h2>
            <p>
              Interested in working together, discussing a project, or talking
              about an opportunity? Send me a message.
            </p>

            <a className="contact-email" href={`mailto:${portfolioData.email}`}>
              <Mail size={18} />
              {portfolioData.email}
              <ArrowUpRight size={16} />
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Your email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your idea..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />

            <button
              className="button button-primary submit-button"
              type="submit"
            >
              Send message <Send size={16} />
            </button>

            <p className="form-note">
              Opens your email app to send the message. No backend required.
            </p>
          </form>
        </div>
      </section>
    </FadeInSection>
  );
}

export default Contact;
