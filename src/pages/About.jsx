import "../Styles/About.css"
import EducationTimeline from "../components/EducationTimeline"

import aboutImage from "../assets/kshitija-AboutMe.jpeg"

function About() {
  return (
    <>
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
            I’m currently pursuing Computer Science Engineering
            and exploring software engineering through projects,
            frontend development, backend systems, and DSA.
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

    </>
  )
}

export default About