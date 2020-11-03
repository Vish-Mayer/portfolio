import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css'
import icon from '../../Assets/Icons/menu.png'

function NavBar() {
  const [navbar,setNavbar] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 40) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return(

    <nav className="navbar navbar-expand-lg navbar1 font-weight-bold sticky-top">
      <div className="navbar-brand text-light"></div>
    <button className="navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Togglee navigation">
      <img src={icon} alt="menu"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
      <li className="nav-item">
          <Link
            className={navbar ? "nav-link home nav-home" : "nav-link text-secondary home home2"}
            smooth to="/#home">
              HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={navbar ? "nav-link nav-about" : "nav-link text-secondary about"}
            smooth to="/#about">
              ABOUT
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={navbar ? "nav-link nav-projects" : "nav-link text-secondary projects"}
            smooth to="/projects/#project-list">
              PROJECTS
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={navbar ? "nav-link nav-contact" : "nav-link text-secondary contact"}
            smooth to="/#contact">
              CONTACT
          </Link>
        </li>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
