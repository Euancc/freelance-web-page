import './Footer.css'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>EC</h3>
          <p>Building digital success stories, one website at a time.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500} offset={-70}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} offset={-70}>
                Services
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} MyBrand. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
