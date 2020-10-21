import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css'

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
  
    <ul className="nav navbar1 font-weight-bold sticky-top nav-justified">
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
            smooth to="/#about"
             activeStyle={{ color: 'red' }}>
              
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
      </ul>
    
  )
}

export default NavBar
