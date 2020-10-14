import React from 'react';
import { animateScroll as scroll,} from 'react-scroll'

import './SubFooter.css'

import icon from '../../../Assets/redarrow.png'

function SubFooter() {

  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return(
    <div className="sub-footer d-flex justify-content-center" id="contact">
       <button className="up-btn" onClick={scrollToTop}>
          <img src={icon} alt="up"/>
        </button>
      </div>
  )
}
export default SubFooter