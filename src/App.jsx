import './app.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'

const App = () => {
  return <div>
    <section id='Inicio'>
      <Navbar />
      <Hero />
    </section>
    <section id='Servicios'>
      <Parallax type='services' />
    </section>
    <section>
      <Services />
    </section>
    <section id='Trabajos'>
      <Parallax type='works' />
    </section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contacto'>Contact</section>
  </div>
}

export default App
