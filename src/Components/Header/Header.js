import React, { useEffect } from 'react';
import Typical from 'react-typical';
import Aos from 'aos';
import "aos/dist/aos.css";

import './Header.css'

function Header() {

  return(
  <div className="header" id="home">
    <div className="text">
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
  )
}

export default Header
