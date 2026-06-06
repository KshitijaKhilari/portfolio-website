import "../styles/About.css"

import aboutImage from "../assets/kshitija-AboutMe.jpeg"

import EducationTimeline from "../components/EducationTimeline"
import Skills from "../components/Skills"

function About() {
  return (
    <>
      <h2 className="about-title">
        About Me
      </h2>
      <section id="about" className="about-section">

        <div className="about-card">

          <p className="section-tag">
            About Me
          </p>

          <h2 className="about-heading">
            Learning, building,
            and growing through
            creative development.
          </h2>

          <p className="about-description">
            I’m currently pursuing Computer Science Engineering and exploring software engineering through projects, frontend development, backend systems, and DSA. I have a particular interest in databases and enjoy designing structured data systems, with a strong foundation in SQL.
          </p>

        </div>

        <div className="about-polaroid">

          <div className="polaroid">

            <img
              src={aboutImage}
              alt="Kshitija"
              className="about-image"
            />

            <p className="polaroid-caption">
              currently exploring & building ✨
            </p>

          </div>

        </div>

      </section>

      <EducationTimeline />

      <Skills />

    </>
  )
}

export default About