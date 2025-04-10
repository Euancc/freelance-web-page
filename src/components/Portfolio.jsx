import './Portfolio.css'
import { motion } from 'framer-motion'

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Local Restaurant Website',
      category: 'Web Development',
      description:
        'Modern, responsive website with online ordering system for a local restaurant.',
      image:
        'https://placehold.co/600x400/0073ff/ffffff/png?text=Restaurant+Website',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Fitness Studio Marketing',
      category: 'Google & Facebook Ads',
      description:
        'Successful ad campaign that increased gym membership by 150%.',
      image:
        'https://placehold.co/600x400/0073ff/ffffff/png?text=Fitness+Marketing',
      tags: ['Google Ads', 'Facebook Ads', 'Analytics'],
    },
    {
      id: 3,
      title: 'Dental Practice SEO',
      category: 'SEO & Google Business',
      description:
        'Optimized online presence resulting in 200% increase in organic traffic.',
      image: 'https://placehold.co/600x400/0073ff/ffffff/png?text=Dental+SEO',
      tags: ['SEO', 'Google Business', 'Local SEO'],
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      category: 'Web Development',
      description:
        'Full-featured online store with inventory management system.',
      image: 'https://placehold.co/600x400/0073ff/ffffff/png?text=E-commerce',
      tags: ['React', 'Stripe', 'Firebase'],
    },
  ]

  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <p>Here are some of my successful projects.</p>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="portfolio-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="portfolio-content">
              <h3>{project.title}</h3>
              <span className="category">{project.category}</span>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
