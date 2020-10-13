import React from 'react';
import { animateScroll as scroll,} from 'react-scroll'

import './ContactFooter.css'

import icon from '../../../Assets/uparrowXS.png'

function ContactFooter() {

  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  
  return(
    <div className="contact-footer d-flex justify-content-center" id="contact">
       <button className="up-btn" onClick={scrollToTop}>
          <img src={icon} alt="up"/>
        </button>
      </div>
  )
}
export default ContactFooter