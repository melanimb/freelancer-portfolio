import './hero.scss'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import React, { useState, Suspense } from 'react'
import { ClipLoader } from 'react-spinners'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20
    }
  }
}

function Hero () {
  const [isSplineLoading, setSplineLoading] = useState(true)

  const handleSplineLoad = () => {
    setSplineLoading(false)
  }

  return (
    <div className="hero">
      <div className="wrapper">
        <div
          className="textContainer"
        >
          <h2>MELANI MARES</h2>
          <h1>Desarrolladora web · Diseñadora UI/UX</h1>
          <div className="buttons">
            <a href='#Portfolio'>Ver portfolio</a>
            <a href='#Contacto'>Contacto</a>
          </div>
          <motion.img
            src="/scroll.png"
            alt="scroll image"
            variants={textVariants}
            animate='scrollButton'
          />
        </div>
      </div>
      <div className="splineContainer">
        <Suspense fallback={<ClipLoader color="#36D7B7" loading={isSplineLoading} />}>
          <Spline scene="https://prod.spline.design/VcqsjbGvt6w45x39/scene.splinecode" onLoad={handleSplineLoad} />
        </Suspense>
      </div>
      <div className="imageContainer">
        <img src="/spline.png" alt="spline image" />
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Web Design And Developement
      </motion.div>
    </div>
  )
}
export default Hero
