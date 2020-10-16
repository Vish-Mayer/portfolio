import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
import Carousel from '../Carousel/Carousel'

import icon from '../../../../Assets/dwn-arrowXS.png'

export default function Modal({open, onClose, image, title, description}){
  if (!open) return null

  return ReactDom.createPortal(
    <>
    <div id="overlay"/>
    <div className="card text-center d-flex" id="modal">
      <button className="close-modal" onClick={onClose}><img src={icon} alt="left"/></button>
    
      <div className="modal-img"><Carousel  /></div>
      <h3 className="card-title modal-title">{title}</h3>
      <p className="modal-description">{description}</p>
    </div>
    </>,
    document.getElementById('portal')
  )
}