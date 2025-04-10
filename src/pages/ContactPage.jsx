import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ContactPage.css'

function ContactPage() {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-page-content">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Ready to transform your digital presence? Let&apos;s make it happen.
          </p>
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
