import React from 'react';

function NavBar() {
  return(
    <ul className="nav nav-tabs nav-justified ">
      <li className="nav-item">
        <a className="nav-link text-secondary home" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary about" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary projects" href="#">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary contact" href="#" tabindex="-1">Contact</a>
      </li>
    </ul>
  )
}

export default NavBar