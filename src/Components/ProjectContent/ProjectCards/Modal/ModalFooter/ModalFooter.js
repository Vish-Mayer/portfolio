import React from 'react';
import './ModalFooter.css'

import icon from '../../../../../Assets/closeXS.png'
import icon2 from '../../../../../Assets/github.png'

function ModalFooter({onClose, projectLink}) {
  return(
    <div className="modal-footer container-fluid d-flex">
       <a href={projectLink} className="ext-link btn p-0">
        <img src={icon2} /><h6>View in github</h6>
      </a>

      <button className="close-modal btn p-0" onClick={onClose}>
        <img src={icon}/>
      </button>
    </div>
  )
}
export default ModalFooter