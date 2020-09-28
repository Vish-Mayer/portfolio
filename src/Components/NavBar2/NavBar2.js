import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function NavBar2() {
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
            smooth to="/#home">
              Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={navbar ? "nav-link text-dark about" : "nav-link text-secondary about"}
            smooth to="/#about">
              About
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={navbar ? "nav-link text-dark projects" : "nav-link text-secondary projects"}
            smooth to="/projects">
              Projects
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={navbar ? "nav-link text-dark contact" : "nav-link text-secondary contact"}
            smooth to="/#contact">
              Contact 
          </Link>
        </li>
      </ul>
  )
}

export default NavBar2
