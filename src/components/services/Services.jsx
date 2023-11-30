import './services.scss'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
}

function Services () {
  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      animate={'animate'}
    >
      <div className="textContainer">
        <p>
          Impulsa tu negocio
          <br />y hazlo crecer
        </p>
        <hr />
      </div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people in office image" />
          <h1>
            <motion.b whileHover={{ color: '#8441c7' }}>Ideas</motion.b> Únicas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: '#8441c7' }}>Para tu</motion.b> Negocio.
          </h1>
          <button>EN QUÉ CONSISTE?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Marca</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis nostrum sequi consectetur cumque, praesentium dolorum aliquid explicabo commodi eveniet. Praesentium pariatur optio tempore ea eum vel, est cupiditate nemo!</p>
          <button>Ver</button>
        </motion.div>

        <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Marca</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis nostrum sequi consectetur cumque, praesentium dolorum aliquid explicabo commodi eveniet. Praesentium pariatur optio tempore ea eum vel, est cupiditate nemo!</p>
          <button>Ver</button>
        </motion.div>

        <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Marca</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis nostrum sequi consectetur cumque, praesentium dolorum aliquid explicabo commodi eveniet. Praesentium pariatur optio tempore ea eum vel, est cupiditate nemo!</p>
          <button>Ver</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
export default Services
