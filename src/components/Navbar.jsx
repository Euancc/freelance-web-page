import { useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link
          to="home"
          className="logo"
          smooth={true}
          duration={500}
          offset={-70}
        >
          EC
        </Link>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
