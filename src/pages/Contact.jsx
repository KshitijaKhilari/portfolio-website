import "../Styles/Contact.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import resumePDF from "../assets/Kshitija_Sandip_Khilari_Resume_.pdf"
function Contact() {

    return (

        <section
            id="contact"
            className="contact-section"
        >

            <h2 className="contact-title">
                Contact
            </h2>

            <div className="contact-card">

                <div className="contact-left">

                    <h3 className="contact-heading">
                        Get In Touch ✨
                    </h3>

                    <p className="contact-email">
                        📧
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=kshitijakhilari12@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            kshitijakhilari12@gmail.com
                        </a>
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
                            href={resumePDF}
                            download
                            className="contact-button blue-button"
                        >
                            ⬇ Download Resume
                        </a>

                        <a
                            href="https://drive.google.com/file/d/1sCUkiVxy_3DcVJZNFP7RWSeD5Srou1Iu/view?usp=sharing"
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