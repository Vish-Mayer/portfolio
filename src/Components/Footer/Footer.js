import React from 'react';
import './Footer.css'

import media1 from '../../Assets/Icons/linkedinS.png'
import media2 from '../../Assets/Icons/github.png'
import media3 from '../../Assets/Icons/cvlogo2.png'
import Doc from '../../Assets/Documents/Vishal Kakkad CV 2020.pdf'

function Footer() {
  return(
    <div className="main-footer">
      <div className="container-fluid p-0 d-flex justify-content-center">
        <div className="media-row row p-0">

          <div className="col-md-4 col-4">
            <a href="https://www.linkedin.com/in/vishal-mayer-kakkad-a04607189/" target="_blank" rel="noreferrer noopener">
              <button 
              className="media-btn" 
              title="Linkedin">
                <img className="media-img" src={media1} alt="media1"/>
              </button>
            </a>
          </div>

          <div className="col-md-4 col-4">
          <a href="https://github.com/Vish-Mayer/" target="_blank" rel="noreferrer noopener">
            <button
            className="media-btn" 
            title="Github">
              <img className="media-img" src={media2} alt="media2"/>
            </button>
          </a> 
          </div>

          <div className="col-md-4 col-4">
            <a href={Doc} target="_blank" rel="noreferrer noopener">
              <button 
              className="media-btn" 
              title="Download CV">
                <img className="media-img" src={media3} alt="media3"/>
              </button>
            </a>
          </div>

        </div>
      </div>
      <div className='footer-end d-flex'>
      <div className="created-by">Vishal Mayer Kakkad </div>
      <div className="created-date">&nbsp;@2020</div>
      </div>
    </div>
  )
}
export default Footer