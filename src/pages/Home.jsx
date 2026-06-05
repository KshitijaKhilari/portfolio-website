import { useState } from "react"
import "../styles/Home.css"

import heroImage from "../assets/kshitija.jpeg"

import arrow from "../assets/arrow.png"
import star from "../assets/star.png"
import smiley from "../assets/smiley.png"

function Home() {
  const [showConnect, setShowConnect] = useState(false)
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
            Kshitija Khilari.
          </span>
        </h1>

        <p className="hero-description">
          A Computer Science Engineering student exploring
          software engineering, DSA, backend development,
          and creative web experiences.
        </p>

      </div>

      <div className="hero-right">
        <div className="connect-container">

  <button
    className="connect-button"
    onClick={() => setShowConnect(!showConnect)}
  >
    ↗ Let's Connect
  </button>

  {showConnect && (
    <div className="connect-popup">

      <a
        href="https://www.linkedin.com/in/kshitija-sandip-khilari/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/KshitijaKhilari"
        target="_blank"
        rel="noreferrer"
      >
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