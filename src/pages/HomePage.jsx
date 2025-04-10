import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Footer from '../components/Footer'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <div>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
