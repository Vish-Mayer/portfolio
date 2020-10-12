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
    <ul className={ navbar ? "nav navbar1 font-weight-bold sticky-top nav-justified": "nav bg-transparent font-weight-bold sticky-top nav-justified"}>
        <li className="nav-item">
          <Link
            className={navbar ? "nav-link home home1" : "nav-link text-secondary home home2"}
            smooth to="/#home">
              Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={navbar ? "nav-link text-white about" : "nav-link text-secondary about"}
            smooth to="/#about">
              About
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={navbar ? "nav-link text-white projects" : "nav-link text-secondary projects"}
            smooth to="/projects/#project-content">
              Projects
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={navbar ? "nav-link text-white contact" : "nav-link text-secondary contact"}
            smooth to="/#contact">
              Contact 
          </Link>
        </li>
      </ul>
  )
}

export default NavBar
