import React from 'react';
import Typical from 'react-typical';

function Header() {
  return(
  <div>
    <h2>
      Hi Im Vish, I'm a Full Stack Developer,
      <p/>I write applications in {' '}
      <Typical
          steps={['JavaScript', 2000, 'React', 2000, 'Ruby', 2000, 'Ruby on Rails', 2000 ]}
          loop={Infinity}
          wrapper="b"
        />
      </h2>

  </div>
  )
}

export default Header
