import Motion from '../Motion'
import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'

function Navbar () {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className="wrapper">
        <Motion>
          <span>MELANI MARES</span>
        </Motion>
        <Motion>
          <div className="social">
            <a href="#" target='_blank' rel='noreferrer'>
              <img src="/facebook.png" alt="facebook icon" />
            </a>
            <a href="https://www.instagram.com/melani.mares/" target='_blank' rel='noreferrer'>
              <img src="/instagram.png" alt="instagram icon" />
            </a>
            <a href="https://www.linkedin.com/in/melania-mares-321034262/" target='_blank' rel='noreferrer'>
              <img src="/linkedin.png" alt="linkedin icon" />
            </a>
          </div>
        </Motion>
      </div>
    </div>
  )
}
export default Navbar
