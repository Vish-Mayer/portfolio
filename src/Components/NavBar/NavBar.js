import React, {useState} from 'react';
import './NavBar.css'

function NavBar() {
  const [navbar,setNavbar] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 20) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  
  return(
    
      <ul className={navbar ? "nav bg-secondary sticky-top nav-tabs nav-justified" : "nav bg-white sticky-top nav-tabs nav-justified"}>
        <li className="nav-item">
          <a className={navbar ? "nav-link text-light home" : "nav-link text-secondary home"} href="#">Home</a>
          
        </li>
        <li className="nav-item">
          <a className={navbar ? "nav-link text-light about" : "nav-link text-secondary about"} href="#">About</a>
        </li>
        <li className="nav-item">
          <a className={navbar ? "nav-link text-light projects" : "nav-link text-secondary projects"} href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className={navbar ? "nav-link text-light contact" : "nav-link text-secondary contact"} href="#" tabindex="-1">Contact</a>
        </li>
      </ul>
      
  
  )
}

export default NavBar