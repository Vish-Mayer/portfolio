import React from 'react';
import Typical from 'react-typical';
import { Link } from 'react-scroll'
import background from '../../Assets/Other/background1.jpg'

import './Header.css'

function Header() {

  return(
  <div className="header d-flex " id="home">
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
      <div class="dwn-btn-container container-fluid d-flex justify-content-center">                  
    
        <Link className="dwn-btn position-sticky d-flex justify-content-center" activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
        <i class="btn fas fa-chevron-down fa-2x" ></i>
        </Link>
    </div>
  </div>
  
  )
}

export default Header
