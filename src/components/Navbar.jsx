import { useState } from "react"

import {
  HiOutlineMenu,
  HiOutlineX
} from "react-icons/hi"

import "../Styles/Navbar.css"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="navbar">

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen
          ? <HiOutlineX />
          : <HiOutlineMenu />
        }

      </div>

      <ul
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >

        <li>
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </a>
        </li>

        <li>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>

      </ul>

    </nav>

  )
}

export default Navbar