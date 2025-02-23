import './Services.css'
import { FaLaptopCode, FaGoogle, FaBullhorn, FaSearch } from 'react-icons/fa'

function Services() {
  return (
    <section id="services" className="services">
      <h2>My Services</h2>
      <p>I help businesses establish a strong online presence.</p>

      <div className="services-container">
        {/* 🔹 Service 1 - Website Development */}
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Website Development</h3>
          <p>
            I build fast, modern, and responsive websites tailored to your
            needs.
          </p>
        </div>

        {/* 🔹 Service 2 - Google Business Setup */}
        <div className="service-card">
          <FaGoogle className="service-icon" />
          <h3>Google Business Setup</h3>
          <p>
            I help get your business listed on Google Maps for better
            visibility.
          </p>
        </div>

        {/* 🔹 Service 3 - Ads Management */}
        <div className="service-card">
          <FaBullhorn className="service-icon" />
          <h3>Google & Facebook Ads</h3>
          <p>
            I create and manage targeted ad campaigns to grow your business.
          </p>
        </div>

        {/* 🔹 Service 4 - SEO Optimization */}
        <div className="service-card">
          <FaSearch className="service-icon" />
          <h3>SEO Optimization</h3>
          <p>
            I optimize your website to rank higher on Google and increase
            traffic.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
