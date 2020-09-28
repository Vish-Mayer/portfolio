import React, {useState} from 'react';

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
          <a
            className={navbar ? "nav-link text-dark home" : "nav-link text-secondary home"}
            href="/">
              Home
          </a>
        </li>

        <li className="nav-item">
          <a
            className={navbar ? "nav-link text-dark about" : "nav-link text-secondary about"}
            href="/#about">
              About
          </a>
        </li>

        <li className="nav-item">
          <a
            className={navbar ? "nav-link text-dark projects" : "nav-link text-secondary projects"}
            href="/#projects">
              Projects
          </a>
        </li>

        <li className="nav-item">
          <a
            className={navbar ? "nav-link text-dark contact" : "nav-link text-secondary contact"}
            href="/#contact">
              Contact 
          </a>
        </li>
      </ul>
  )
}

export default NavBar2
