import React from 'react';
import './ModalFooter.css'

import icon from '../../../../../Assets/closeXS.png'
import icon2 from '../../../../../Assets/github.png'

function ModalFooter({onClose, projectLink}) {
  return(
    <div className="modal-footer container-fluid d-flex">
       <a href={projectLink} target="_blank" className="ext-link btn p-0">
        <img src={icon2} alt="View in Github" /><h6>View in github</h6>
      </a>

      <button className="close-modal btn p-0" onClick={onClose}>
        <img src={icon} alt="back to projects"/>
      </button>
    </div>
  )
}
export default ModalFooter