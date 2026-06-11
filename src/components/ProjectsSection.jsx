import { useState } from "react"

import "../Styles/Projects.css"

import vmsImage from "../assets/vms.png"
import portfolioImage from "../assets/portfolio-website.png"
import tourismImage from "../assets/tourism.png"
import musarratImage from "../assets/musarrat-restaurant.png"

function ProjectsSection() {

    const projects = [

        {
            title: "Vendor Management System",

            description:
                "Backend-focused REST API for vendor and supplier management.",

            skills: [
                "Node.js",
                "Express.js",
                "PostgreSQL"
            ],

            demo:
                "https://vendor-management-srco.onrender.com/",

            code:
                "https://github.com/KshitijaKhilari/vendor-management",

            image:
                vmsImage
        },

        {
            title: "Portfolio Website",

            description:
                "Personal portfolio showcasing projects and skills.",

            skills: [
                "React",
                "JavaScript",
                "CSS"
            ],

            demo:
                "#",

            code:
                "https://github.com/KshitijaKhilari/portfolio-website",

            image:
                portfolioImage
        },

        {
            title: "Murud Janjira Tourism",

            description:
                "Tourism website highlighting attractions and travel information.",

            skills: [
                "HTML",
                "CSS",
                "JavaScript"
            ],

            demo:
                "https://timely-shortbread-5da588.netlify.app",

            code:
                "https://timely-shortbread-5da588.netlify.app",

            image:
                tourismImage
        },

        {
            title: "Musarrat Restaurant Replica",

            description:
                "Restaurant website replica focused on frontend design.",

            skills: [
                "HTML",
                "CSS",
                "JavaScript"
            ],

            demo:
                "https://musarrat-restaurant-replica.vercel.app/",

            code:
                "https://github.com/KshitijaKhilari/musarrat-restaurant-replica",

            image:
                musarratImage
        }

    ]

    const projectsPerPage = 3

    const totalPages = Math.ceil(
        projects.length / projectsPerPage
    )

    const [page, setPage] = useState(0)

    function nextProjects() {

        setPage(
            (prev) => (prev + 1) % totalPages
        )

    }

    function previousProjects() {

        setPage(
            (prev) =>
                prev === 0
                    ? totalPages - 1
                    : prev - 1
        )

    }

    const visibleProjects =
        projects.slice(
            page * projectsPerPage,
            page * projectsPerPage + projectsPerPage
        )

    while (visibleProjects.length < projectsPerPage) {

        visibleProjects.push(null)

    }

    return (

        <section
            id="projects"
            className="projects-section"
        >

            <h2 className="projects-title">
                Projects
            </h2>

            <div className="projects-carousel">

                <button
                    className="nav-button"
                    onClick={previousProjects}
                >
                    ◀
                </button>

                <div className="projects-grid">

                    {visibleProjects.map((project, index) => (

                        project ? (

                            <div
                                className={`project-card card-${index}`}
                                key={project.title}
                            >

                                <div className="project-image">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />

                                </div>

                                <div className="project-content">

                                    <h3>
                                        {project.title}
                                    </h3>

                                    <p>
                                        {project.description}
                                    </p>

                                    <div className="project-skills">

                                        {project.skills.map((skill) => (

                                            <span
                                                key={skill}
                                                className="project-skill"
                                            >
                                                {skill}
                                            </span>

                                        ))}

                                    </div>

                                    <div className="project-buttons">

                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-button"
                                        >
                                            Demo
                                        </a>

                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-button"
                                        >
                                            Code
                                        </a>

                                    </div>

                                </div>

                            </div>

                        ) : (

                            <div
                                className="project-card empty-card"
                                key={index}
                            >
                            </div>

                        )

                    ))}

                </div>

                <button
                    className="nav-button"
                    onClick={nextProjects}
                >
                    ▶
                </button>

            </div>

        </section>

    )
}

export default ProjectsSection