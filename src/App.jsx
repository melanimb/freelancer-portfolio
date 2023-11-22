import './app.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'

const App = () => {
  return <div>
    <section id='Inicio'>
      <Navbar />
      <Hero />
    </section>
    <section id='Servicios'>Parallax</section>
    <section>Services</section>
    <section id='Trabajos'>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contacto'>Contact</section>
  </div>
}

export default App
