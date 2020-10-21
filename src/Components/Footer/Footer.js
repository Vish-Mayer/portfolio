import React from 'react';
import './Footer.css'

import media1 from '../../Assets/linkedinS.png'
import media2 from '../../Assets/github.png'
import media3 from '../../Assets/cvlogo2.png'

function Footer() {
  return(
    <div className="main-footer">
      <div className="container-fluid p-0 d-flex justify-content-center">
        <div className="media-row row p-0">
          <div className="col-md-4 col-4">
            <button className="media-btn">
              <img className="media-img" src={media1} alt="media1"/>
            </button>
          </div>
          <div className="col-md-4 col-4">
          <button className="media-btn">
              <img className="media-img" src={media2} alt="media2"/>
            </button>
          </div>
          <div className="col-md-4 col-4">
            <button className="media-btn">
              <img className="media-img" src={media3} alt="media3"/>
            </button>
          </div>
        </div>
      </div>
      <div className='footer-end d-flex justify-content-center'>
      <div className="created-by">Vishal Mayer Kakkad </div>
      <div className="created-date">&nbsp;@2020</div>
      </div>
    </div>
    
  )
}
export default Footer