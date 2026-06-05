import "../styles/Skills.css"

function Skills() {

  const skills = [
    { name: "Java", color: "pink" },
    { name: "SQL", color: "pink" },
    { name: "HTML", color: "pink" },
    { name: "CSS", color: "pink" },
    { name: "JavaScript", color: "pink" },
    { name: "React", color: "blue" },
    { name: "Node.js", color: "blue" },
    { name: "Express.js", color: "blue" },
    { name: "GitHub", color: "pink" },
    { name: "MongoDB", color: "blue" },
    { name: "DSA", color: "blue" },
    { name: "System Design", color: "blue" }
  ]

  return (

    <section className="skills-section">

      <div className="skills-header">

        <h2 className="skills-tag">
          ✨ Skills & Technologies
        </h2>

      </div>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div
            key={index}
            className={`skill-pill ${skill.color}`}
          >
            {skill.name}
          </div>

        ))}

      </div>

    </section>

  )
}

export default Skills