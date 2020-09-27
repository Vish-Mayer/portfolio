import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll';

function NavBar() {
  const [navbar,setNavbar] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return(
      <ul className="nav bg-white sticky-top nav-tabs nav-justified">
        <li className="nav-item">
          <Link 
            className={navbar ? "nav-link text-dark home" : "nav-link text-secondary home"}
            to="home"
            href="/"
            smooth={true}
            offset={50}
            duration={500}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link 
            className={navbar ? "nav-link text-dark about" : "nav-link text-secondary about"}
            to="about"
            smooth={true}
            offset={50}
            duration={500}>
            About
          </Link>
        </li>

        <li className="nav-item">
          <NavLink 
            to="/projects"
            className={navbar ? "nav-link text-dark projects" : "nav-link text-secondary projects"}>
              Projects
          </NavLink>
        </li>

        <li className="nav-item">
          <Link 
            className={navbar ? "nav-link text-dark contact" : "nav-link text-secondary contact"}
            to="contact"
            smooth={true}
            offset={50}
            duration={500}>
            Contact
          </Link>
        </li>
      </ul>
  )
}

export default NavBar
