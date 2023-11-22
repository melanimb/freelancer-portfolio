import './hero.scss'

function Hero () {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>MELANI MARES</h2>
          <h1>Desarrollo y diseño web a medida</h1>
          <div className="buttons">
            <button>Ver mis trabajos</button>
            <button>Contacto</button>
          </div>
          <img src="/scroll.png" alt="scroll image" />
        </div>
      </div>
      <div className="slidingTextContainer">
        Web Design And Developement
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero image" />
      </div>
    </div>
  )
}
export default Hero
