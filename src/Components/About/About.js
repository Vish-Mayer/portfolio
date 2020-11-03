import React from 'react';
import './About.css'
import { HashLink as Link } from 'react-router-hash-link';
import profilepic from '../../Assets/Other/profilepic.png'

import icon1 from '../../Assets/Icons/ruby.png'
import icon2 from '../../Assets/Icons/javascript.png'
import icon3 from '../../Assets/Icons/react.png'
import icon4 from '../../Assets/Icons/html-5.png'
import icon5 from '../../Assets/Icons/css.png'
import icon6 from '../../Assets/Icons/postgresql.png'
import icon7 from '../../Assets/Icons/agile.png'

function About() {
  return(
   <div className="profile" id="about">
      <h1>About</h1>
        <div className="about-grid container-fluid d-flex justify-content-center" id="about-grid">
          <div className="about-row row p-0">
            <div className="profile-body p-0 col-md-7 ">

              <div className="developer-icons">
                <div className="row p-0 d-flex justify-content-center">
                  <img src={icon1} alt="ruby" title="Ruby" className="dev-icons"/>
                  <img src={icon2} alt="javascript" title="Javascript" className="dev-icons"/>
                  <img src={icon3} alt="react" title="React"  className="dev-icons"/>         
                  <img src={icon4} alt="html" title="HTML" className="dev-icons"/>        
                  <img src={icon5} alt="css" title="CSS" className="dev-icons"/>  
                  <img src={icon6} alt="postgresql" title ="PostgreSQL" className="dev-icons"/>
                  <img src={icon7} alt="agile" title ="Agile" className="dev-icons"/> 
              </div><br/>
            </div>     
              <p>
                <h4>
                  <i class="fas fa-quote-left fa-lg"></i><br/>
                  As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, 
                  and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact 
                  at a high growth company.<i class="fas fa-quote-right fa-xs"></i>
                  </h4> 
                <br/>
                If you would like to learn more about myself, discuss working together, or find more about my projects, please feel free to <Link smooth to="/#contact">get in touch</Link>.
              </p>
            
              <Link 
              smooth to="/projects/#project-list">
                <button className="projects-link" >
                  View my work
                </button>
              </Link>
          
            </div>
             <div className="col-md-5">
              <img src={profilepic} alt="profile-pic" className='profile-pic d-flex '/>
            </div>
          </div>
        </div>
       

        
     </div>
  )
}

export default About