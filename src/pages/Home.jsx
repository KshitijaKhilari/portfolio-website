import { FaLinkedin, FaGithub } from "react-icons/fa"
import { useState, useRef, useEffect } from "react"

import "../styles/Home.css"

import heroImage from "../assets/kshitija.jpeg"
import resumePDF from "../assets/Kshitija_Sandip_Khilari_Resume_.pdf"
import arrow from "../assets/arrow.png"
import star from "../assets/star.png"
import smiley from "../assets/smiley.png"

function Home() {

  const [showConnect, setShowConnect] = useState(false)

  const popupRef = useRef(null)

  useEffect(() => {

    function handleClickOutside(event) {

      if (
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setShowConnect(false)
      }

    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    )

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      )

    }

  }, [])

  return (

    <section id="home" className="hero-section">

      <div className="hero-left">

        <p className="hero-greeting">
          Hello,
        </p>

        <h1 className="hero-title">
          Myself
          <br />

          <span className="highlight">
            Kshitija Sandip Khilari.
          </span>
        </h1>

        <p className="hero-description">
          📍 Smt. Indira Gandhi College of Engineering (SIGCE)
          🎓 B.Tech. CSE [IoTCSBCT] (Third Year)<br></br>
          ⭐ CGPA: 9.00 <br></br>
          Exploring software engineering, backend development,
          DSA, and creative web experiences.
        </p>

        <a
          href={resumePDF}
          download
          className="resume-button"
        >
          ⬇ Download Resume
        </a>

      </div>

      <div className="hero-right">

        <div
          className="connect-container"
          ref={popupRef}
        >

          <button
            className="connect-button"
            onClick={() =>
              setShowConnect(!showConnect)
            }
          >
            {showConnect
              ? "↘ Let's Connect"
              : "↗ Let's Connect"}
          </button>

          {showConnect && (

            <div className="connect-popup">

              <a
                href="https://www.linkedin.com/in/kshitija-sandip-khilari/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://github.com/KshitijaKhilari"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          )}

        </div>

        <div className="image-frame">

          <img
            src={heroImage}
            alt="Kshitija"
            className="hero-image"
          />

          <img
            src={smiley}
            alt=""
            className="smiley-sticker"
          />

          <img
            src={star}
            alt=""
            className="star-sticker"
          />

          <img
            src={arrow}
            alt=""
            className="arrow-doodle"
          />

        </div>

      </div>

    </section>

  )
}

export default Home