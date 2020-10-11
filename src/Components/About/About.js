import React from 'react';
import './About.css'
import profilepic from '../../Assets/testprofilepic.png'

function About() {
  return(
   <div className="profile" id="about">
      <h1>About</h1>
        <div className="about-grid container-fluid d-flex justify-content-center" id="about-grid">
          <div className="about-row row">
            <div className="col-md-5">
              <img src={profilepic} alt="profile-pic" className='img-fluid'/>
            </div>
            <div className="profile-body col-md-7">
             <p>This is a test profile, This is a test profile, This is a test profile, This is a test profile
             This is a test profile, This is a test profile, This is a test profile, This is a test profile
             This is a test profile, This is a test profile, This is a test profile, This is a test profile
             This is a test profile,This is a test profile,This is a test profile,This is a test profile
             This is a test profile This is a test profile This is a test profile
             <br/><br/>
             This is a test profile This is a test profile This is a test profile This is a test profile This is a
             This is a test profile This is a test profile This is a test profile
             This is a test profile This is a test profile This is a test profile
             </p>
            </div>
          </div>
        </div>
       

        
     </div>
  )
}

export default About