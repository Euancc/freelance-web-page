import './About.css'
import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="about-text">
            <p>
              Hi! I&apos;m Euan — a remote freelancer from New Zealand currently
              travelling the world with my laptop, helping small businesses grow
              online.
            </p>
            <p>
              I&apos;ve got a background in radio, marketing and copywriting,
              and I&apos;ve completed a coding bootcamp as well as Google&apos;s
              courses in Ads and Business Profiles. I&apos;ve worked with small
              businesses on everything from website edits and ads to creating
              brand content and setting up Shopify stores.
            </p>
            <p>
              I&apos;m all about keeping things simple, clear and results-driven
              — and I love helping people feel more confident online.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
