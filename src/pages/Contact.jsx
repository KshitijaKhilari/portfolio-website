import "../styles/Contact.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"
function Contact() {

    return (

        <section
            id="contact"
            className="contact-section"
        >

            <h2 className="contact-title">
                ✨ Contact
            </h2>

            <div className="contact-card">

                <div className="contact-left">

                    <h3 className="contact-heading">
                        Get In Touch
                    </h3>

                    <p className="contact-email">
                        📧 your-email@gmail.com
                    </p>

                    <div className="contact-links">

                        <a
                            href="https://www.linkedin.com/in/kshitija-sandip-khilari/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-button pink-button"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/KshitijaKhilari"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-button pink-button"
                        >
                            <FaGithub />
                            GitHub
                        </a>

                    </div>

                    <div className="resume-actions">

                        <a
                            href="/Kshitija_Sandip_Khilari_Resume_.pdf"
                            download
                            className="contact-button blue-button"
                        >
                            ⬇ Download Resume
                        </a>

                        <a
                            href="/Kshitija_Sandip_Khilari_Resume_.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-button blue-button"
                        >
                            👁 Preview Resume
                        </a>

                    </div>

                </div>

                <div className="contact-note">

                    <div className="note-content">

                        <h3>
                            💌
                        </h3>

                        <p className="note-title">
                            Currently looking for:
                        </p>

                        <ul>

                            <li>
                                Internship Opportunities
                            </li>

                            <li>
                                Collaboration Projects
                            </li>

                            <li>
                                Learning Experiences
                            </li>

                        </ul>

                        <p className="note-footer">
                            Let's build something together!
                        </p>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default Contact