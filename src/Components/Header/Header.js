import React from 'react';
import Typical from 'react-typical';
import { HashLink as Link } from 'react-router-hash-link';

import './Header.css'
import icon from '../../Assets/dwn-arrowXS.png'

function Header() {

  return(
  <div className="header big-banner container-fluid d-flex " id="home">
    <div className="intro-message d-flex overflow">
      <div className="row">
        <div class="w-100">
          <h2>
            Hi I'm Vish, I'm a Full Stack Developer.
            <p/>I write applications in {' '}
            <Typical
                steps={['JavaScript.', 2000, 'React.', 2000, 'Ruby.', 2000, 'Ruby on Rails.', 2000 ]}
                loop={Infinity}
                wrapper="b"
              />
            </h2>
        </div>
      </div>  
    </div>
      <div class="container-fluid d-flex justify-content-center">                  
        <Link className="dwn-btn" smooth to="/#about">
          <img src={icon}/>
        </Link>
    </div>
  </div>
  
  )
}

export default Header
