import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './ContactFooter.css'

import icon from '../../../Assets/uparrowXS.png'

function ContactFooter() {
  return(
    <div className="contact-footer d-flex justify-content-center" id="contact">
       <Link className="up-btn" smooth to="/#home">
          <img src={icon} alt="up"/>
        </Link>
      </div>
  )
}
export default ContactFooter