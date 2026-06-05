import "../styles/EducationTimeline.css"

function EducationTimeline() {
  return (
    <section className="education-section">

      <div className="education-header">

        <p className="education-tag">
          Education
        </p>

        <h2 className="education-title">
            My Academic Journey
        </h2>

      </div>

      <div className="timeline">

        {/* School */}

        <div className="timeline-item left">

          <div className="timeline-year">
            2022
          </div>

          <div className="timeline-card">

            <h3>
              Amrita Vidyalayam
            </h3>

            <p className="education-course">
              CBSE Secondary Education
            </p>

            <p>
              ⭐ Score: <strong>83.19%</strong>
            </p>

          </div>

        </div>

        {/* Diploma */}

        <div className="timeline-item right">

          <div className="timeline-year">
            2022 - 2025
          </div>

          <div className="timeline-card">

            <h3>
              Bharati Vidyapeeth Institute of Technology
            </h3>

            <p className="education-course">
              Diploma in Information Technology
            </p>

            <p>
              ⭐ Aggregate: <strong>86.60%</strong>
            </p>

            <p>
              Graduated with Distinction
            </p>

          </div>

        </div>

        {/* Engineering */}

        <div className="timeline-item left">

          <div className="timeline-year current-year">
            2025 - Present
          </div>

          <div className="timeline-card current-card">

            <h3>
              Smt. Indira Gandhi College of Engineering
            </h3>

            <p className="education-course">
              B.E. Computer Science Engineering
            </p>

            <p>
              (IoT including Cyber Security using Blockchain Technology)
            </p>

            <p>
              ⭐ Current CGPA: <strong>9.0</strong>
            </p>

            <p>
              🎓 Expected Graduation: 2028
            </p>

            <p className="current-status">
              Currently Pursuing
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default EducationTimeline