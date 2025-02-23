import './Hero.css'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Build & Grow Your Online Presence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I create stunning websites, set up Google Business accounts, and run
          effective Google & Facebook ads to get you noticed.
        </motion.p>
        <motion.a
          href="#contact"
          className="hero-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
