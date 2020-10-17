import React from 'react';
import './ModalFooter.css'

import icon from '../../../../../Assets/closeXS.png'
import icon2 from '../../../../../Assets/github.png'

function ModalFooter({onClose}) {
  return(
    <div className="modal-footer">
       <button className="ext-link btn p-0">
        <img src={icon2} /><h5>View in github</h5>
      </button>

      <button className="close-modal btn p-0" onClick={onClose}>
        <img src={icon}/>
      </button>

    </div>
  )
}
export default ModalFooter