import './Services.css'
import {
  FaLaptopCode,
  FaGoogle,
  FaBullhorn,
  // FaSearch,
  // FaShoppingCart,
  // FaMobileAlt,
  // FaChartLine,
  FaShopify,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Custom Web Development',
      description:
        'Bespoke websites built with modern technologies, ensuring fast loading times and responsive design across all devices.',
    },
    {
      icon: <FaShopify />,
      title: 'Shopify Development',
      description:
        'Custom Shopify store development with themes and apps tailored to your brand and business needs.',
    },
    {
      icon: <FaBullhorn />,
      title: 'Digital Advertising',
      description:
        'Strategic paid advertising campaigns across Google, Facebook, and Instagram to reach your target audience.',
    },
    {
      icon: <FaGoogle />,
      title: 'Google Business Profile',
      description:
        'Optimize your local presence with a professionally managed Google Business Profile to attract nearby customers.',
    },

    // {
    //   icon: <FaShoppingCart />,
    //   title: 'E-commerce Solutions',
    //   description:
    //     'Full-featured online stores with secure payment processing, inventory management, and order tracking.',
    // },

    // {
    //   icon: <FaSearch />,
    //   title: 'SEO Optimization',
    //   description:
    //     'Comprehensive SEO strategies to improve your search rankings and drive organic traffic to your website.',
    // },
    // {
    //   icon: <FaChartLine />,
    //   title: 'Analytics & Reporting',
    //   description:
    //     "Detailed insights and regular reports on your website's performance, traffic, and conversion rates.",
    // },
    // {
    //   icon: <FaMobileAlt />,
    //   title: 'Mobile-First Design',
    //   description:
    //     'Ensuring your website looks and performs perfectly on smartphones, tablets, and desktop devices.',
    // },
  ]

  return (
    <section id="services" className="services">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>My Services</h2>
        <p>
          Comprehensive solutions to establish and grow your online presence
        </p>
      </motion.div>

      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
